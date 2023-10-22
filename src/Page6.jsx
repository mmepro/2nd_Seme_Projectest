import { useState, useEffect } from 'react';
import { Container, Header, Logo, Body } from './components/Page1Style';
import PageButton from './components/Share/PageButton';
import Login from './components/Share/Login';
import Search from './components/Share/Search';
import Movie from './components/Page6/MovieDB';
import { ResultContainer, ResultGroup, SearchText } from './components/Page6Style';
import Page6Scroll from './components/Page6/Scroll';

function Page6() {
  // const [count, setCount] = useState(0)

  const KEY = '0d38cc635c10e090910f3d7ea7194e05';
  const URL = 'https://api.themoviedb.org/3/search/movie';

  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [NAME, setNAME] = useState(''); 
  const [Enter, setEnter] = useState(false);
  const getMovies = async () => {
    const json = await (await fetch(`${URL}?api_key=${KEY}&language=ko-KR&page=1&query=${NAME}`)).json();
    setMovies(json.results);
    setLoading(false);
  };

  const onSubmit = () => {
    // Enter 키를 눌렀을 때 실행될 로직을 작성
    getMovies();
    setEnter(true);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Backspace') {
        setEnter(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <Container>
      <Header>
        <Logo>LOGO</Logo>
        <PageButton />
        <Login />
      </Header>

      <Body>
        <Search onInputChange={(value) => setNAME(value)} onSubmit={onSubmit} />
        { NAME && Enter ? <SearchText>{NAME}의 검색결과입니다</SearchText> : ''}
          <ResultContainer id='page6scroll'>
            {loading ? (
              <h1>Loading...</h1>
            ) : (
              <ResultGroup>
                {movies.map((movie) => (
                  <Movie
                    key={movie.id}
                    poster_path={movie.poster_path}
                    title={movie.title}
                    overview={movie.overview}
                    genre_ids={movie.genre_ids}
                  />
                ))}{' '}
              </ResultGroup>
            )}
          </ResultContainer>
          { NAME && Enter ? <Page6Scroll/> : null}
      </Body>
    </Container>
  );
}

export default Page6;
