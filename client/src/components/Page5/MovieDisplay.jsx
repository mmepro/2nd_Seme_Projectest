// MovieDisplay.jsx
function MovieDisplay({ movies, handleBoxClick }) {
    return (
      <>
        {movies.map((movie) => (
          <div key={movie.id} onClick={() => handleBoxClick(movie)}>
            <img
              src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
              alt={movie.title}
            />
            {/* Additional movie details can go here */}
          </div>
        ))}
      </>
    );
  }
  
  export default MovieDisplay;
  