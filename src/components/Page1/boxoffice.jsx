import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react'; // Import useEffect and useState
import axios from 'axios'; // Import axios for making HTTP requests
const ImageInfo = styled.div`
  position: absolute;
  width: 194px;
  height: 285px;
  background: #d9d9d9;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  overflow: hidden; /* Ensure the image doesn't overflow the div */
`;

const PosterImage = styled.img`
  width: 100%;
  height: 85%; /* Adjust the height of the image portion */
  object-fit: cover; /* Maintain aspect ratio and cover the div */
`;
const Title = styled.div`
  padding: 10px;
  font-weight: bold;
  text-align: center;
`;

const GradeInfo = styled.div`
  position: absolute;
  width: 65px;
  height: 27px;
  background: #1C1E2C;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  /* Use the backgroundColor property to dynamically change the background color */
  color: ${(props) => {
    // Define color conditions based on the rating
    if (props.rating >= 8.5) {
      return '#4D96FF'; // Change this to your desired color
    } else if (props.rating >= 7.5) {
      return '#6BCB77'; // Change this to your desired color
    } else if (props.rating >= 6.5) {
      return '#FFD93D'; // Change this to your desired color
    }
    else {
      return '#FF6B6B'; // Change this to your desired color
    }
  }};

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
  background-color: #898FC0;
  color: black;
  font-family: 'Noto Sans KR', sans-serif;
`;


function BoxOffice() {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    // Fetch data from the API when the component mounts
    axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=c4e59022826dc465ea5620d6adaa6813&language=ko&page=1&region=KR')
      .then((response) => {
        // Sort the movie data by vote_count in descending order
        const sortedMovies = response.data.results.sort((a, b) => b.popularity - a.popularity);
        
        // Store the movie data in the state  
        setMovieData(response.data.results);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }, []);
  const ImageData = () => {};

  const GradeData = () => {};

  const ReservData = () => {};

  
  return (
    <>
    {movieData.map((movie, index) => (
        <ImageInfo
          key={index}
          style={{ left: `${index * 291}px`, top: '0px' }}
          onClick={ImageData}
        >
          <PosterImage src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />
          <Title>{movie.title}</Title> {/* Display the movie title */}
        </ImageInfo>
      ))}

    {movieData.map((movie, index) => (
      <GradeInfo
        key={index}
        style={{ left: `${index * 291}px`, top: '295px' }}
        onClick={GradeData}
        rating={movie.vote_average} // Pass the rating as a prop
      >
        {movie.vote_average}
      </GradeInfo>
    ))}
      
      <Link to="/page4">
        {[75, 366, 657, 948, 1239, 1530, 1821, 2112].map((left, index) => (
          <ReservInfo
            key={index}
            style={{ left: `${left}px`, top: '295px' }}
            onClick={ReservData}
          >예매</ReservInfo>
        ))}
      </Link>
    </>
  );
}

export default BoxOffice;
