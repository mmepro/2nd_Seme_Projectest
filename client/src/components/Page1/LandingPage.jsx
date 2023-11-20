import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MainImage from './MainImage';
import { API_URL, API_KEY, IMAGE_BASE_URL } from '../Config';

const LandingPage = () => {

  const navigate = useNavigate();
  const [Movies, setMovies] = useState([]); //배열로 값을받기 때문
  const [MainMovieImage, setMainMovieImage] = useState(null);
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);

  useEffect(() => {
    const endpoint = `${API_URL}movie/now_playing?api_key=${API_KEY}&language=ko-KR&page=2`;
    fetch(endpoint)
      .then((response) => response.json()) //응답을 json형태로 변경하여 then의 response에 반환
      .then((response) => {
        console.log(response);
        setMovies([...response.results]); //console로 찍어보면 results배열에 담겨서 데이터보내줌
        //스프레드연산자를 사용하여 배열에 집어넣음
        setMainMovieImage(MainMovieImage || response.results[0]);
        //로딩될때는 MainMovieImage값이 null이기 때문에 response.results[0]값이 들어오며
        //그다음 loding button을 눌릴때마다 MainMovieImage즉 초기이미지로 고정이된다.
        //안그러면 로그창에 오류발생
      });
  }, []);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMovieIndex((prevIndex) => (prevIndex + 1) % Movies.length);
    }, 5000); // 5초 간격으로 변경

    return () => clearInterval(interval); 
  }, [Movies]);
  const currentMovie = Movies[currentMovieIndex];

  return (
    <div style={{ width: '100%' }}>
      {/*Main Image */}
      {currentMovie && (
        <MainImage
          image={`${IMAGE_BASE_URL}w1280/${currentMovie.backdrop_path}`}
          title={currentMovie.title}
          text={currentMovie.overview}
        />
      )}
      <div style={{ width: '80%', margin: '2rem auto' }}>
        <hr />
        <h2>박스 오피스</h2>
        {/*Movie Grid Cards */}
        
      </div>

      
    </div>
  );
};

export default LandingPage;