import { useState } from 'react'
import { Container,Header,Logo,Reservation, TheatherGroup, Body, NearTheather, TextBox, StyledButton} from './components/Page4Style'
import Scroll from './components/Page4/Scroll';
import Theather from './components/Page4/Theather';
import Date from './components/Page4/Date';
import PageButton from './components/Share/PageButton';
import Login from './components/Share/Login';
import MovieInfo from './components/Page4/MovieInfo';
import { useLocation } from 'react-router-dom';
import KakaoMap from './components/Page4/Location';

function Page4() {
  // 선택한 영화 정보 불러오기
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const posterUrl = params.get('posterUrl');
  const voteAvg = params.get('voteAvg');
  const directorName = params.get('directorName');
  const releaseDate = params.get('releaseDate');
  const genres = params.get('genres');

  // 지도 & 영화정보 전환
  const [mapOpen,setMapOpen] = useState(true);
  const [dataOpen, setDataOpen ] = useState(false);
  const ShowMovieData = () => {
    setMapOpen(false);
    setDataOpen(true);
  };

  // 근처 영화관 데이터 받아오기
  const [nData, setNData] = useState('');
  const handleDataChange = (newData) => {
    setNData(newData);
    // console.log(newData);
  };

  return (
    <Container>
      <Header>
      <Logo>
        <img width={'170px'} height={'120px'} src='/logo.png'></img>
      </Logo>
        <PageButton/>
        <Login/>
      </Header>

      <Body>
      {dataOpen && (<>
        <MovieInfo posterUrl={posterUrl} voteAvg={voteAvg} directorName={directorName} releaseDate={releaseDate} genres={genres}/>
        <Reservation>
            <Date/>
            <NearTheather>가까운 극장순 ↓</NearTheather>
            <TheatherGroup id='scroll'>
              <Theather nData={nData}/>
            </TheatherGroup>
            <Scroll/>
        </Reservation>
        </>)}

        {mapOpen && (<>
          <KakaoMap onDataChange={handleDataChange}/>
          <TextBox>
            <span>근처 영화관 검색결과입니다.</span><br/>
            <span>원하시는 버튼을 눌러주세요.</span><br/><br/>
            <StyledButton onClick={ShowMovieData}>실시간 예매 현황</StyledButton><br/>
            <StyledButton onClick={() => window.location.reload()}>위치 새로고침</StyledButton><br/>
            <StyledButton>위치 직접 설정</StyledButton>
          </TextBox>
        </>)}
      </Body>
    </Container>
  );
}

export default Page4