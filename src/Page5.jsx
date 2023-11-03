import { useState } from 'react';
import React, { useRef } from 'react';
//import { Link } from 'react-router-dom';
import { Container, Header, Logo, Body } from './components/Page5Style';
import Login from './components/Share/Login';
import PageButton from './components/Share/PageButton';
import {Text1, Submit, ScrollContent, SubmitBox, SubmitContent} from './components/Page5Style';
import BoxChange from './components/Page5/BoxChange';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
function Page5() {
  // const [count, setCount] = useState(0);
  const scrollableContentRef = useRef(null);
  const [selectedMovies, setSelectedMovies] = useState([]);
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    // Fetch data from the API when the component mounts
    const apiKey = 'c4e59022826dc465ea5620d6adaa6813'; // Replace with your API key
    const apiUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=ko`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // Extract the first 9 movies from the API response
        const firstNineMovies = data.results.slice(6, 15, 2);
        setMovies(firstNineMovies);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleBoxClick = (movie) => {
    // Check if the movie is not already in selectedMovies
    if (
      selectedMovies.length < 3 &&
      !selectedMovies.some((m) => m.id === movie.id)
    ) {
      setSelectedMovies([...selectedMovies, movie]);
    } else if (selectedMovies.some((m) => m.id === movie.id)) {
      alert('이미 선택된 영화입니다.');
    } else {
      alert('최대 세 개의 박스까지만 선택 가능합니다.');
    }
  };

  const handleDeleteBox = (movie) => {
    const shouldDelete = window.confirm(`"${movie.title}" 영화를 삭제하시겠습니까?`);
    if (shouldDelete) {
      setSelectedMovies(selectedMovies.filter((m) => m.id !== movie.id));
    }
  };
  
  localStorage.setItem('selectedMovies', JSON.stringify(selectedMovies));
// Saving selectedMovies to local storage with genre information
// const selectedMoviesWithGenre = selectedMovies.map((movie) => ({
//   ...movie,
//   genres: movie.genre_ids.map((genreId) => tvGenres[genreId]).join(', '),
// }));
const handleSubmit = () => {
  if (selectedMovies.length >= 3) { // 최소 3개 이상의 영화를 선택해야 함
    const selectedMoviesData = selectedMovies.slice(0, 3); // 처음 3개의 선택한 영화를 사용

    const data = {
      movies: selectedMoviesData,
    };

    // Flask 백엔드로 POST 요청을 보냅니다
    fetch('/recommend-movies', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((recommendedMovies) => {
        // 추천된 영화 데이터를 처리하거나 업데이트합니다.
        // 예를 들어, 상태를 업데이트하거나 추천된 영화를 표시할 수 있습니다.
        console.log('추천된 영화 목록:', recommendedMovies);
      })
      .catch((error) => console.error(error));
  } else {
    alert('최소 세 개의 영화를 선택해야 합니다.');
  }
};



  return (
    <Container>
      <Header>
        <Logo>LOGO</Logo>
        <PageButton />
        <Login />
      </Header>
      <Body>
        <Text1>본인의 취향에 맞는 영화를 3개 골라주세요!</Text1>
        <ScrollContent
          id="scroll"
          style={{ scrollBehavior: 'smooth', display: 'flex', color: 'white' }}
          ref={scrollableContentRef}
        >
          {movies.map((movie) => (
            <div key={movie.id}>
              <div onClick={() => handleBoxClick(movie)}>
                <img
                  src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`} // Use the poster_path from the API response
                  alt={movie.title}
                />
              </div>            
            </div>
          ))}
        </ScrollContent>
        <BoxChange />
        <SubmitBox>
          {selectedMovies.map((selectedMovie) => (
            <SubmitContent
              key={selectedMovie.id}
              onClick={() => handleDeleteBox(selectedMovie)}
            >
              <img
                src={`https://image.tmdb.org/t/p/w185${selectedMovie.poster_path}`}
                alt={selectedMovie.title}
                style={{ maxWidth: '150px', maxHeight: '150px' }} // Adjust the size as needed
              />
            </SubmitContent>
          ))}
        </SubmitBox>

        {selectedMovies.length === 3 ? ( // Check if three movies are selected
          <Link to="/selected-movies" onClick={handleSubmit}>
            <Submit>제출하기</Submit>
          </Link>
        ) : (
          <Submit onClick={handleSubmit}>제출하기</Submit> // Use the same function for the onClick event
        )}
      </Body>
    </Container>
  );
}

export default Page5;
