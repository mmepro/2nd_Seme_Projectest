import { useState, useEffect } from 'react';
import { Container, Header, Logo, Body } from './components/Page1Style';
import PageButton from './components/Share/PageButton';
import Login from './components/Share/Login';
import Search from './components/Share/Search';
import Movie from './components/Page6/MovieDB';
import { ResultContainer, ResultGroup, SearchText } from './components/Page6Style';
import Page6Scroll from './components/Page6/Scroll';
import { useLocation } from 'react-router-dom';

function Page6() {
  // const [count, setCount] = useState(0)

  const KEY = '0d38cc635c10e090910f3d7ea7194e05';
  const URL = 'https://api.themoviedb.org/3/search/movie';
  const location = useLocation();
  const searchQuery = location.state?.searchQuery || '';

  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [NAME, setNAME] = useState(''); 

  const getMovies = async (searchName) => { // searchName 파라미터 추가
    const json = await (await fetch(`${URL}?api_key=${KEY}&language=ko-KR&page=1&query=${searchName}`)).json();
    setMovies(json.results);
    setLoading(false);
  };
  
  useEffect(() => {
    if (searchQuery) {
      setNAME(searchQuery);
      getMovies(searchQuery); // 직접 검색어 전달
    }
  }, [searchQuery]);

  return (
    <Container>
      <Header>
        <Logo>
          <img width={'170px'} height={'120px'} src='public/logo.png'></img>
        </Logo>
        <PageButton />
        <Login />
      </Header>

      <Body>
        <Search/>
        { NAME ? <SearchText>{NAME}의 검색결과입니다</SearchText> : ''}
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
          { NAME ? <Page6Scroll/> : null}
      </Body>
    </Container>
  );
}

export default Page6;
