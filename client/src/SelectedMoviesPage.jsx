import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Header, Logo, Body } from './components/Page5Style'; // 가정한 스타일 컴포넌트 경로
import PageButton from './components/Share/PageButton';
import Login from './components/Share/Login';

function SelectedMoviesPage() {
  const [movieTitle1, setMovieTitle1] = useState('');
  const [movieTitle2, setMovieTitle2] = useState('');
  const [movieTitle3, setMovieTitle3] = useState('');
  const [recommendations, setRecommendations] = useState([]);

  const getRecommendations = (title) => {
    // Flask 서버로 GET 요청을 보냅니다.
    axios.get(`http://127.0.0.1:5000/movies?title=${encodeURIComponent(title)}`)
      .then(response => {
        // 성공적으로 데이터를 받으면 상태를 업데이트합니다.
        console.log(response.data); // 응답 데이터 확인
        const recommendedMovies = response.data.recommendations;
        setRecommendations(recommendedMovies);
      })
      .catch(error => {
        // 에러가 발생하면 콘솔에 로그를 출력합니다.
        console.error('There was an error!', error);
      });
  };
  const [selectedMovies, setSelectedMovies] = useState([]);
  const [tvGenres, setTVGenres] = useState({});
  const [recommendedMovies,   setRecommendedMovies] = useState([]);

  useEffect(() => {
    // Retrieve selected movies from local storage
    const storedMovies = localStorage.getItem('selectedMovies');
    if (storedMovies) {
      setSelectedMovies(JSON.parse(storedMovies));
    }
  }, []);
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
    // 여기서 API 호출을 수행하고 추천 영화 목록을 가져옵니다.
    // 사용자가 선택한 영화 목록을 기반으로 추천을 받을 수 있도록 API 호출에 필요한 정보를 전달합니다.
    const apiKey = 'c4e59022826dc465ea5620d6adaa6813';
    const selectedMovieIds = selectedMovies.map((movie) => movie.id).join(',');
    const recommendedMoviesUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${selectedMovieIds}&language=ko-KR`;
    fetch(recommendedMoviesUrl)
      .then((response) => response.json())
      .then((data) => {
        // 추천된 영화 목록을 상태에 저장합니다.
        setRecommendedMovies(data.results);
      })
      .catch((error) => console.error(error));
  }, [selectedMovies]);

   // 선택된 영화 배열이 변경될 때마다 해당 영화 제목을 상태에 할당
   useEffect(() => {
    if (selectedMovies.length === 3) {
      setMovieTitle1(selectedMovies[0].title);
      setMovieTitle2(selectedMovies[1].title);
      setMovieTitle3(selectedMovies[2].title);
    }
  }, [selectedMovies]);

  const fillMovieTitlesInInput = () => {
    if (selectedMovies.length === 3) {
      // 선택된 영화가 3개인 경우에만 실행
      const movieTitles = selectedMovies.map((movie) => movie.title);
      // 상태 업데이트
      setMovieTitle1(movieTitles[0]);
      setMovieTitle2(movieTitles[1]);
      setMovieTitle3(movieTitles[2]);
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
        <h1 style={{ textAlign: 'center', marginBottom: '2rem', color: 'whitesmoke'}}>Movie Recommendations</h1>
        <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '2rem' }}>
          <button onClick={() => getRecommendations(movieTitle1)}>
            {selectedMovies.length >= 1 ? selectedMovies[0].title : 'Select a movie'}
          </button>
          <button onClick={() => getRecommendations(movieTitle2)}>
            {selectedMovies.length >= 2 ? selectedMovies[1].title : 'Select a movie'}
          </button>
          <button onClick={() => getRecommendations(movieTitle3)}>
            {selectedMovies.length >= 3 ? selectedMovies[2].title : 'Select a movie'}
          </button>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
            {/* 추천된 영화 목록을 매핑하여 출력 */}
            {recommendations.map((movie, index) => (
              <li key={index} style={{ padding: '0.5rem', background: '#f0f0f0', margin: '0.5rem', borderRadius: '5px' }}>
                {movie}
              </li>
            ))}
          </ul>
        </div>
      </Body>
    </Container>
  );
}

export default SelectedMoviesPage;
