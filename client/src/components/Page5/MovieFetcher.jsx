// MovieFetcher.jsx
import { useEffect, useState } from 'react';

function MovieFetcher({ setMovies }) {
  const fetchMovies = () => {
    const apiKey = 'c4e59022826dc465ea5620d6adaa6813';
    const randomPage = Math.floor(Math.random() * 3) + 1;
    const apiUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=ko&page=${randomPage}`;
    
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const firstNineMovies = data.results.slice(6, 15, 2);
        setMovies(firstNineMovies);
      })
      .catch(error => console.error(error));
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return null; // This component does not render anything
}

export default MovieFetcher;
