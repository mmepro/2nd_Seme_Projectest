export function handleBoxClick(selectedMovies, setSelectedMovies, movie) {
  // Check if the movie is not already in selectedMovies
  if (selectedMovies.length < 3 && !selectedMovies.some((m) => m.id === movie.id)) {
    setSelectedMovies([...selectedMovies, movie]);
  } else if (selectedMovies.some((m) => m.id === movie.id)) {
    alert('이미 선택된 영화입니다.');
  } else {
    alert('최대 세 개의 박스까지만 선택 가능합니다.');
  }
}

