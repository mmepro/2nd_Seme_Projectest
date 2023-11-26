//Rcmd.jsx
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState,useEffect,useRef } from 'react'; // Import useEffect and useState
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
const TextInfo = styled.div`
  width: 40vw;
  margin: 0 auto;
  font-size: 18px;
  color: #f4f3f3;
  padding: 5px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
  font-family: 'Noto Sans KR', sans-serif;
  border: 1px solid #535D7E;
`;
const ImageInfo = styled.div`
  position: relative;
  width: 194px;
  height: 285px;
  background: #d9d9d9;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  color: black;
`;

const GradeInfo = styled.div`
  position: absolute;
  bottom: -27px;
  left: 0;
  width: 65px;
  height: 27px;
  background: #1C1E2C;
  border-radius: 5px;
  font-family: 'Noto Sans KR';
  font-weight: 600;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #f4f3f3;
`;

const ReservInfo = styled.button`
  position: absolute;
  bottom: -27px;
  right: 0;
  width: 119px;
  height: 27px;
  border-radius: 5px;
  background-color: #898FC0;
  color: black;
  font-family: 'Noto Sans KR';
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;

  &:hover {
    background: #535d7e;
    box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.4);
    opacity: 100%;
  }
`;


// Arrow styles
const Arrow = styled.div`
  cursor: pointer;  
  position: absolute;
  top: 80%;
  transform: translateY(-50%);
  z-index: 1000; // Ensure arrows are above other elements
  // Conditional styling based on props
  ${props => props.direction === 'left' ? 'left: 0;' : 'right: 0;'}
`;

// ScrollContainer 스타일링 개선
const ScrollContainer = styled.div`
  display: flex; // Flexbox를 사용하여 내부 아이템들을 가로로 배치
  overflow-x: auto; // 가로 스크롤 가능
  gap: 20px;
  padding: 8vh;
  margin: 0 auto;
  justify-content: center;
  width: 80vw;
  height: 45vh;
  &::-webkit-scrollbar {
    // 스크롤바 스타일 설정
  }
  &::-webkit-scrollbar-track {
    // 스크롤바 스타일 설정
  }
`;

function Rcmd({selectedGenre}) {

  // const scrollContainerRef = useRef(null);

  // useEffect(() => {
  //   if (selectedGenre && scrollContainerRef.current) {
  //     const { current } = scrollContainerRef;
  //     current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  //   }
  // }, [selectedGenre]);

  const scrollRef = useRef(null);
  
   // Function to scroll left
   const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -244, behavior: 'smooth' }); // scroll by the width of one movie container plus gap
  };

  // Function to scroll right
  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 244, behavior: 'smooth' }); // scroll by the width of one movie container plus gap
  };
  
  const [recommendations, setRecommendations] = useState([]);
  const [movieDetails, setMovieDetails] = useState([]);

  const fetchMovieDetails = async (titles) => {
    const KEY = '0d38cc635c10e090910f3d7ea7194e05'; // TMDb API 키
    const URL = 'https://api.themoviedb.org/3';

    const promises = titles.map(async (title) => {
    console.log("Fetching movie details for titles: ", titles);

      const tmdbResponse = await fetch(`${URL}/search/movie?api_key=${KEY}&language=ko-KR&page=1&query=${title}`);
      const tmdbJson = await tmdbResponse.json();
      const movie = tmdbJson.results[0];
      if (movie) {
        return {
          title,
          posterUrl: movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : null,
          vote_average: movie.vote_average
          // 추가적으로 필요한 정보를 여기에 추가
        };
      }
      return { title, posterUrl: null, vote_average: null };
      
    });
    return Promise.all(promises);
  };

  useEffect(() => {
    console.log("Selected Genre: ", selectedGenre);   
    fetch(`http://localhost:5000/nowplaying?watched_genres=${encodeURIComponent(selectedGenre)}`)
      .then(response => response.json())
      .then(data => {
        if (data.recommendations) {
          setRecommendations(data.recommendations);
          return fetchMovieDetails(data.recommendations);
        }
      })
      .then(movieDetails => {
        console.log("Fetched movie details: ", movieDetails);
        setMovieDetails(movieDetails);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, [selectedGenre]);


  const ImageData = () => {};

  const GradeData = () => {};

  const ReservData = () => {};

  return (
    <>
      {!selectedGenre && (
        <TextInfo>Waiting...</TextInfo>
      )}

      {selectedGenre && ( // selectedGenre가 있을 때만 추천 영화를 표시합니다.
        <>
          <TextInfo>{selectedGenre} 장르의 추천 영화 목록입니다.</TextInfo>
          <Arrow direction="left" onClick={scrollLeft}>
            <MdChevronLeft size="3rem" />
          </Arrow>
          <ScrollContainer ref={scrollRef}>
            {movieDetails.map((movie, index) => (
              <div key={index} style={{ minWidth: '200px' }}>
                <ImageInfo onClick={() => ImageData(movie)}>
                  <img src={movie.posterUrl} alt={movie.title} style={{ width: '100%', height: '100%' }} />
                  <GradeInfo onClick={() => GradeData(movie)}>
                    {movie.vote_average === 0 ? 'X.X' : movie.vote_average.toFixed(1)}
                  </GradeInfo>
                  <Link to={`/page4?movieId=${movie.id}`}>
                    <ReservInfo onClick={() => ReservData(movie)}>
                      예매
                    </ReservInfo>
                  </Link>
                </ImageInfo>
              </div>
            ))}
          </ScrollContainer>
          <Arrow direction="right" onClick={scrollRight}>
            <MdChevronRight size="3rem" />
          </Arrow>
        </>
      )}
    </>
  );
}


export default Rcmd;
