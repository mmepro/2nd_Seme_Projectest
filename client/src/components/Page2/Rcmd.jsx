import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState,useEffect,useRef } from 'react'; // Import useEffect and useState
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
const TextInfo = styled.div`
  position: absolute;
  width: 403px;
  height: 53px;
  left: 540px;
  top: 155px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #f4f3f3;
`;
const ImageInfo = styled.div`
  position: absolute;
  width: 194px;
  height: 285px;
  background: #d9d9d9;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  color: black;
`;

const GradeInfo = styled.div`
  position: absolute;
  width: 65px;
  height: 27px;
  background: #1c1e2c;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #f4f3f3;
`;

const ReservInfo = styled.button`
  position: absolute;
  width: 119px;
  height: 27px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: #898fc0;
  color: black;
  font-family: 'Inter';
  font-style: normal;
  left: 75px;
`;


// Arrow styles
const Arrow = styled.div`
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1000; // Ensure arrows are above other elements
  // Conditional styling based on props
  ${props => props.direction === 'left' ? 'left: 0;' : 'right: 0;'}
`;


// Adjust the existing ScrollContainer to handle overflow and hide scrollbar
const ScrollContainer = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 20px;
  padding: 20px;
  margin: 0 auto;
  position: relative;
  width: 60%; // Adjust based on the size of the container
  top: 260px;
  height: 330px;
  left: 230px;
  max-width: 630px; 

  &::-webkit-scrollbar {
    height: 15px; // Height of the scrollbar
    background-color: #2C3440; // Background color of the scrollbar track
  }

  &::-webkit-scrollbar-thumb {
    background-color: #1c1e2c; // Background color of the scrollbar thumb
    border-radius: 10px; // Rounded corners for the scrollbar thumb
    border: 3px solid #2C3440; // Creates padding effect for the thumb
    
    &:hover {
      background-color: #f4f3f3; // Changes the thumb color when hovered
    }
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey; // Adds a shadow effect inside the track
    border-radius: 10px; // Rounded corners for the scrollbar track
  }

  /* For other browsers like Firefox */
  scrollbar-width: thin; // Makes the scrollbar 'thin'
  scrollbar-color: #1c1e2c #2C3440; // Sets the thumb and track color, respectively
`;

function Rcmd() {
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
    fetch(`http://localhost:5000/nowplaying?watched_genres=${encodeURIComponent('액션')}`)
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
  }, []);

  // const [slideIndex, setSlideIndex] = useState(0);

  // // 슬라이더를 왼쪽으로 이동하는 함수
  // const moveLeft = () => {
  //   setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 0);
  // };

  // // 슬라이더를 오른쪽으로 이동하는 함수
  // const moveRight = () => {
  //   setSlideIndex(slideIndex < movieDetails.length - 3 ? slideIndex + 1 : movieDetails.length - 3);
  // };
  const ImageData = () => {};

  const GradeData = () => {};

  const ReservData = () => {};

  return (
    <>
      <TextInfo>000님에게 추천드리는 현재 상영작</TextInfo>
      <Arrow direction="left" onClick={scrollLeft}>
        <MdChevronLeft size="3rem" />
      </Arrow>
      <ScrollContainer ref={scrollRef}>
        {movieDetails.map((movie, index) => (
          // Make sure each movie is wrapped in a div or similar container
          <div key={index} style={{ minWidth: '200px' /* Adjust as needed */ }}>
            <ImageInfo key={index} onClick={() => ImageData(movie)}>
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
  );
}


export default Rcmd;
