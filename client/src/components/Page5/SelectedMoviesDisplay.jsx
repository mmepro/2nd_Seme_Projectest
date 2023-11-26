// SelectedMoviesDisplay.jsx
function SelectedMoviesDisplay({ selectedMovies, handleDeleteBox }) {
    return (
      <SubmitBox>
        {selectedMovies.map((selectedMovie) => (
          <SubmitContent
            key={selectedMovie.id}
            onClick={() => handleDeleteBox(selectedMovie)}
          >
            <img
              src={`https://image.tmdb.org/t/p/w185${selectedMovie.poster_path}`}
              alt={selectedMovie.title}
              style={{ maxWidth: '150px', maxHeight: '150px' }}
            />
            {/* Additional details of the selected movie */}
          </SubmitContent>
        ))}
      </SubmitBox>
    );
  }
  
  export default SelectedMoviesDisplay;
  