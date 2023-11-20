import styled from "styled-components";
import { Link } from 'react-router-dom';
import { useEffect,useState } from "react";

const MoviesWrapper = styled.div`
  position: relative;
  width: 80%; // 화면 너비의 80%를 사용
  margin: 0 auto; // 중앙 정렬
`;
const MovieContainer = styled.div`
  position: absolute;
  left: ${props => (props.index % 4) * 340}px; // 4개의 영화를 한 줄에 배치
  top: ${props => Math.floor(props.index / 4) * 360 +100}px; // 행 당 360px의 간격
  width: 194px;
  height: 312px; // 285px + 27px for GradeInfo
  background: #d9d9d9;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


const ImageInfo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

const GradeInfo = styled.div`
  position: absolute;
  width: 65px;
  height: 27px;
  top: 320px;
  left: 0px;
  background: #1C1E2C;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: ${(props) => {
    if (props.rating == 0) {
      return '17px';
    } 
    else {
      return '20px';
    }
  }};
  display: flex;
  justify-content: center;
  line-height: 30px;
  color: ${(props) => {
    if (props.rating >= 8.5) {
      return '#4D96FF';
    } else if (props.rating >= 7.5) {
      return '#6BCB77';
    } else if (props.rating >= 6.5) {
      return '#FFD93D';
    }
    else {
      return '#FF6B6B';
    }
  }};
`;

const ReservInfo = styled.button`
  position: absolute;
  width: 119px;
  height: 27px;
  top: 320px;
  left: 75px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: #898FC0;
  color: black;
  font-family: 'Noto Sans KR', sans-serif;
`;



function MoreMovies() {
  const [movieData, setMovieData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getMovies = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=262b76947e7259fa05d3bd23195fd016&language=ko-KR&page=1`
      );
      const data = await res.json();
      setMovieData(data.results.slice(0, 20));
    } catch (e) {
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getMovies();
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <MoviesWrapper>
      <div style={{ width: '100%', margin: '10rem auto' }}>
        <hr />
        <h2>무비 차트</h2>
      </div>
      {movieData.map((movie, index) => (
        <MovieContainer key={movie.id} index={index}>
          <ImageInfo src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={`Poster of ${movie.title}`} />
          <GradeInfo rating={movie.vote_average}>
            {movie.vote_average === 0 ? 'X.X' : movie.vote_average.toFixed(1)}
          </GradeInfo>
          <Link to={`/page4?voteAvg=${movie.vote_average}&posterUrl=${movie.posterUrl}&directorName=${movie.director}&releaseDate=${movie.release_date}&genres=${movie.genres}&title=${movie.title}`}>
            <ReservInfo>예매</ReservInfo>
          </Link>
        </MovieContainer>
      ))}
    </MoviesWrapper >
  );
}


export default MoreMovies;