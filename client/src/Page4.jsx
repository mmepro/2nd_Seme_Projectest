// import { useState } from 'react'
// import { Link } from 'react-router-dom';
import { Container,Header,Logo,Reservation, TheatherGroup, Body, NearTheather } from './components/Page4Style'
import Scroll from './components/Page4/Scroll';
import Theather from './components/Page4/Theather';
import Date from './components/Page4/Date';
import PageButton from './components/Share/PageButton';
import Login from './components/Share/Login';
import MovieInfo from './components/Page4/MovieInfo';
import { useLocation } from 'react-router-dom';

function Page4() {
  // const [count, setCount] = useState(0);
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const posterUrl = params.get('posterUrl');
  const voteAvg = params.get('voteAvg');
  const directorName = params.get('directorName');
  const releaseDate = params.get('releaseDate');
  const genres = params.get('genres');
  // 이제 movieIndex를 사용하여 moviePost 배열에서 선택한 영화 정보를 가져올 수 있습니다.
  
  return (
    <Container>
      <Header>
      <Logo>LOGO</Logo>
        <PageButton/>
        <Login/>
      </Header>

      <Body>
        <MovieInfo posterUrl={posterUrl} voteAvg={voteAvg} directorName={directorName} releaseDate={releaseDate} genres={genres}/>
        <Reservation>
            <Date/>
            <NearTheather>가까운 극장순 ↓</NearTheather>
            <TheatherGroup id='scroll'>
              <Theather/>
            </TheatherGroup>
            <Scroll/>
        </Reservation>
      </Body>
    </Container>
  );
}

export default Page4