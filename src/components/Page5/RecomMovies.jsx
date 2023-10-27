import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react'; // Import useEffect and useState
import axios from 'axios'; // Import axios for making HTTP requests

function RecomMovie() {
    const [movieData, setMovieData] = useState([]);
  
    useEffect(() => {
      // Fetch data from the API when the component mounts
      axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=c4e59022826dc465ea5620d6adaa6813&language=ko')
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
      <RecomMovie/>
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
  
      </>
    );
  }
  
  export default RecomMovie;
  