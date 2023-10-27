import { useState } from 'react'
import React, { useRef } from 'react';
//import { Link } from 'react-router-dom';
import { Container,Header,Logo,Body } from './components/Page5Style'
import Login from './components/Share/Login';
import PageButton from './components/Share/PageButton';
import {Box1,Box2,Box3,Box4,Box5,Box6,Box7,Box8,Box9,Text1,Submit,ScrollContent,SubmitBox,SubmitContent} from './components/Page5Style';
import BoxChange from './components/Page5/BoxChange';
import { handleBoxClick } from './components/Page5/BoxClick';
import { useEffect } from 'react';

function Page5() {
  // const [count, setCount] = useState(0);
  const scrollableContentRef = useRef(null);
  const [selectedMovies, setSelectedMovies] = useState([]);
  const [movies, setMovies] = useState([]);
  const [tvGenres, setTVGenres] = useState({});

  useEffect(() => {
    // Fetch TV show genre data from the API when the component mounts
    const apiKey = 'c4e59022826dc465ea5620d6adaa6813';
    const tvGenreUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=ko`;

    fetch(tvGenreUrl)
      .then((response) => response.json())
      .then((data) => {
        setTVGenres(
          data.genres.reduce((acc, genre) => {
            acc[genre.id] = genre.name;
            return acc;
          }, {})
        );
      })
      .catch((error) => console.error(error));
  }, []);
  useEffect(() => {
    // Fetch data from the API when the component mounts
    const apiKey = 'c4e59022826dc465ea5620d6adaa6813'; // Replace with your API key
    const apiUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=ko`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // Extract the first 9 movies from the API response
        const firstNineMovies = data.results.slice(5, 14, 2);
        setMovies(firstNineMovies);
      })
      .catch((error) => console.error(error));
  }, []);


  const handleBoxClick = (movie) => {
    // Check if the movie is not already in selectedMovies
    if (selectedMovies.length < 3 && !selectedMovies.some((m) => m.id === movie.id)) {
      setSelectedMovies([...selectedMovies, movie]);
    } else if (selectedMovies.some((m) => m.id === movie.id)) {
      alert('이미 선택된 영화입니다.');
    } else {
      alert('최대 세 개의 박스까지만 선택 가능합니다.');
    }
  };

  const handleDeleteBox = (movie) => {
    setSelectedMovies(selectedMovies.filter((m) => m.id !== movie.id));
  };
  
  return (
    <Container>
      <Header>
      <Logo>MOVIE</Logo>
        <PageButton/>
        <Login/>
      </Header>

      <Body>
        <Text1>본인의 취향에 맞는 영화를 3개 골라주세요!</Text1>
        <ScrollContent id='scroll' style={{ scrollBehavior: 'smooth', display: 'flex', color : 'white'  }} ref={scrollableContentRef}>
        {movies.map((movie, index) => (
            <div key={movie.id}>
              <div onClick={() => handleBoxClick(movie)}>
                <img
                  src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`} // Use the poster_path from the API response
                  alt={movie.title}
                />
              </div>
              <div>{`Box${index + 1}: ${movie.title}`}</div>
              <div>{`Box${index +1}장르: ${movie.genre_ids}`}</div>
              <p>
                  Genres: {movie.genre_ids.map((genreId) => tvGenres[genreId]).join(', ')}
                </p>
            </div>
          ))}
        </ScrollContent>
        <BoxChange/>
        <SubmitBox>
        {selectedMovies.map((selectedMovie) => (
            <SubmitContent key={selectedMovie.id} onClick={() => handleDeleteBox(selectedMovie)}>
              <img
                src={`https://image.tmdb.org/t/p/w185${selectedMovie.poster_path}`}
                alt={selectedMovie.title}
                style={{ maxWidth: '100px', maxHeight: '150px' }} // Adjust the size as needed
              />
            </SubmitContent>
          ))}
</SubmitBox>

        <Submit>제출하기</Submit>
      </Body>
    </Container>
  );
}

export default Page5