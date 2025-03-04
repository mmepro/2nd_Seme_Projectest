import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MainImage from './MainImage';
import { API_URL, API_KEY, IMAGE_BASE_URL } from '../Config';
import styled from 'styled-components';
import { FaArrowCircleRight } from 'react-icons/fa';
const CustomButton = styled.button`
  position: absolute;
  top: 85vh;
  right: 2.5vw;
  z-index: 500;
  background-color: transparent;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  transition: all 0.3s;
  font-family: 'Noto Sans KR', sans-serif;

  &:hover {
    background: #4f526b;
    transform: translateY(2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
  }
`;
const NextIcon = styled(FaArrowCircleRight)`
`;

const LandingPage = () => {
  const navigate = useNavigate();
  const [Movies, setMovies] = useState([]); //배열로 값을받기 때문
  const [MainMovieImage, setMainMovieImage] = useState(null);
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);

  useEffect(() => {
    const endpoint = `${API_URL}movie/upcoming?api_key=${API_KEY}&language=ko-KR&page=2`;
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
  const [arrowRight, setArrowRight] = useState(false);
  const goToNextMovie = () => {
    setCurrentMovieIndex((prevIndex) => (prevIndex + 1) % Movies.length);
    setArrowRight(!arrowRight); // Toggle the arrow direction
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMovieIndex((prevIndex) => (prevIndex + 1) % Movies.length);
    }, 5000); // 5초 간격으로 변경

    return () => clearInterval(interval);
  }, [Movies]);
  const currentMovie = Movies[currentMovieIndex];

  return (
    <div style={{ width: '100vw' }}>
      {/*Main Image */}
      {currentMovie && (
        <>
          <MainImage
            image={`${IMAGE_BASE_URL}w1280/${currentMovie.backdrop_path}`}
            title={currentMovie.title}
            text={currentMovie.overview}
          />
          <CustomButton onClick={goToNextMovie}>
            <NextIcon size="2em" color="#f3f3f3"
            />
          </CustomButton>
        </>
      )}
      <div style={{ width: '80vw', margin: '2rem auto', marginBottom: '-6vh' }}>
        <hr />
        <h2
          style={{ fontSize: '1.6vw', fontFamily: 'Noto Sans KR, sans-serif' }}
        >
          박스 오피스
        </h2>
        {/*Movie Grid Cards */}
      </div>
    </div>
  );
};

export default LandingPage;
