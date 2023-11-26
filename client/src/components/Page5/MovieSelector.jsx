// MovieSelector.jsx
import { useState } from 'react';

function MovieSelector({ children }) {
  const [selectedMovies, setSelectedMovies] = useState([]);

  // Logic for handling movie selection and deletion
  const handleBoxClick = (movie) => {
    // Check if the movie is not already in selectedMovies
    if (
      selectedMovies.length < 3 &&
      !selectedMovies.some((m) => m.id === movie.id)
    ) {
      setSelectedMovies([...selectedMovies, movie]);
    } else if (selectedMovies.some((m) => m.id === movie.id)) {
      alert('이미 선택된 영화입니다.');
    } else {
      alert('최대 세 개의 박스까지만 선택 가능합니다.');
    }
  };
  localStorage.setItem('selectedMovies', JSON.stringify(selectedMovies));
  
  const handleDeleteBox = (movie) => {
    const shouldDelete = window.confirm(`"${movie.title}" 영화를 삭제하시겠습니까?`);
    if (shouldDelete) {
      setSelectedMovies(selectedMovies.filter((m) => m.id !== movie.id));
    }
  };
  
  return children({ selectedMovies, handleBoxClick, handleDeleteBox });
}

export default MovieSelector;
