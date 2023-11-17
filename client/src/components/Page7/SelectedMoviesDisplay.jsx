import React from 'react';

function SelectedMoviesDisplay({ selectedMovies, getRecommendations }) {
  // Style for the movie container
  const movieContainerStyle = {
    display: 'flex',
    flexDirection: 'column', // Stack items vertically
    alignItems: 'center', // Center items horizontally
    margin: '10px', // Space around each movie container
  };

  // Style for the poster image
  const posterStyle = {
    width: '180px', // Increased width
    height: '270px', // Adjust height proportionally
    marginTop: '10px', // Space above the poster
    borderRadius: '10px', // Optional: rounded corners for the poster
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)', // Optional: drop shadow for depth
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10rem' }}>
      {selectedMovies.map((movie, index) => (
        <div key={index} style={movieContainerStyle}>
          <button onClick={() => getRecommendations(movie.title)}>
            {movie.title || 'Select a movie'}
          </button>
          {movie.poster_path && (
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} style={posterStyle} />
          )}
        </div>
      ))}
    </div>
  );
}

export default SelectedMoviesDisplay;
