import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { MdRefresh } from 'react-icons/md';
import { Container, Header, Logo, Body } from './components/Page5Style';
import Login from './components/Share/Login';
import PageButton from './components/Share/PageButton';
import {Text1, Submit, ScrollContent, SubmitBox, SubmitContent} from './components/Page5Style';
import BoxChange from './components/Page5/BoxChange';
// import MovieFetcher from './components/Page5/MovieFetcher';
// import MovieSelector from './components/Page5/MovieSelector';

function Page5() {
  // const [count, setCount] = useState(0);
  const scrollableContentRef = useRef(null);
  const [selectedMovies, setSelectedMovies] = useState([]);
  const [movies, setMovies] = useState([]);
  
  const fetchMovies = () => {
    const apiKey = 'c4e59022826dc465ea5620d6adaa6813';
    const randomPage = Math.floor(Math.random() * 3) + 1;
    const apiUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=ko&page=${randomPage}`;
    
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const firstNineMovies = data.results.slice(6, 15, 2);
        setMovies(firstNineMovies);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetchMovies();
  }, []);
  
  // 새로고침 버튼 클릭 핸들러
  const handleRefresh = () => {
    fetchMovies();
  };
  

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
      alert('최대 세 개 영화까지만 선택 가능합니다.');
    }
  };
  localStorage.setItem('selectedMovies', JSON.stringify(selectedMovies));
  
  const handleDeleteBox = (movie) => {
    const shouldDelete = window.confirm(`"${movie.title}" 영화를 삭제하시겠습니까?`);
    if (shouldDelete) {
      setSelectedMovies(selectedMovies.filter((m) => m.id !== movie.id));
    }
  };
  
  const handleSubmit = () => {
    if (selectedMovies.length === 3) {
      // Save selectedMovies to localStorage just before navigating
      
    } else {
      alert('최소 세 개의 영화를 선택해야 합니다.');
    }
  };

  return (
    <Container>
      <Header>
        <Logo>
          <img width={'170px'} height={'110px'} src='/logo.png'></img>
        </Logo>
        <PageButton />
        <Login />
      </Header>
      
      <Body>
        <Text1>본인의 취향에 맞는 영화를 3개 골라주세요!</Text1>
        <div style={{ position: 'absolute', top: '55px', right: '120px', cursor: 'pointer'}}>
          <MdRefresh onClick={handleRefresh} style={{ color: 'white'}} size={40} />
        </div>
        <ScrollContent
          id="scroll"
          ref={scrollableContentRef}>
          {movies.map((movie) => (
            <div key={movie.id}>
              <div onClick={() => handleBoxClick(movie)}>
                <img
                  src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`} // Use the poster_path from the API response
                  alt={movie.title}
                  style={{borderRadius: '5px'}}
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
                style={{ maxWidth: '150px', maxHeight: '150px', borderRadius: '5px' }} // Adjust the size as needed
              />
            </SubmitContent>
          ))}
        </SubmitBox>

        {selectedMovies.length === 3 ? ( // Check if three movies are selected
          <Link to="/page7" onClick={handleSubmit}>
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
