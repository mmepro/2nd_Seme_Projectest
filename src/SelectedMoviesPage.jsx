import React, { useEffect, useState } from 'react';

function SelectedMoviesPage() {
  const [selectedMovies, setSelectedMovies] = useState([]);
  const [tvGenres, setTVGenres] = useState({});
  const [recommendedMovies, setRecommendedMovies] = useState([]);

  useEffect(() => {
    // Retrieve selected movies from local storage
    const storedMovies = localStorage.getItem('selectedMovies');
    if (storedMovies) {
      setSelectedMovies(JSON.parse(storedMovies));
    }
  }, []);
  useEffect(() => {
    // Fetch TV show genre data from the API when the component mounts
    const apiKey = 'c4e59022826dc465ea5620d6adaa6813';
    const tvGenreUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=ko`;

    fetch(tvGenreUrl)
      .then((response) => response.json())
      .then((data) => {
        setTVGenres(
          data.genres.reduce((acc, genre) => {
            acc[genre.id] = genre.name;
            return acc;
          }, {})
        );
      })
      .catch((error) => console.error(error));
  }, []);
  useEffect(() => {
    // 추천된 영화를 가져오는 요청을 보냅니다.
    fetch('/recommend-movies')
      .then((response) => response.json())
      .then((data) => {
        setRecommendedMovies(data); // 추천된 영화 목록을 상태에 저장합니다.
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      {/* <h1>Recommended Movies</h1> */}
      <ul>
        {recommendedMovies.map((movie) => (
          <li key={movie.title}>
            <h2>{movie.title}</h2>
            <p>Overview: {movie.overview}</p>
            {/* 다른 영화 정보도 추가할 수 있습니다. */}
          </li>
        ))}
      </ul>
      <h1>Selected Movies</h1>
      <ul>
        {selectedMovies.map((movie) => (
          <li key={movie.id}>
            <h2>{movie.title}</h2>
            <p>Overview: {movie.overview}</p>
            <p>Release Date: {movie.release_date}</p>
            <p>Genres: {movie.genre_ids.join(', ')}</p>
            <p>
              Genres:{' '}
              {movie.genre_ids.map((genreId) => tvGenres[genreId]).join(', ')}
            </p>

            {/* Add more movie information as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SelectedMoviesPage;
