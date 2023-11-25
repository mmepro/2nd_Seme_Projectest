import { useState, useEffect } from 'react';
import {
  Container,
  Header,
  Logo,
  Reservation,
  TheatherGroup,
  Body,
  NearTheather,
  TextBox,
  StyledButton,
} from './components/Page4Style';
import Scroll from './components/Page4/Scroll';
import Theather from './components/Page4/Theather';
import Date from './components/Page4/Date';
import PageButton from './components/Share/PageButton';
import Login from './components/Share/Login';
import MovieInfo from './components/Page4/MovieInfo';
import { useLocation } from 'react-router-dom';
import KakaoMap from './components/Page4/Location';
import cgv from './components/Page4/TN/cgvTheater.json';
import lotte from './components/Page4/TN/lotte.json';
import megabox from './components/Page4/TN/megabox.json';
import axios from 'axios';

function Page4() {
  // 선택한 영화 정보 불러오기
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const posterUrl = params.get('posterUrl');
  const voteAvg = params.get('voteAvg');
  const directorName = params.get('directorName');
  const releaseDate = params.get('releaseDate');
  const genres = params.get('genres');
  const title = params.get('title');

  // 지도 & 영화정보 전환
  const [mapOpen, setMapOpen] = useState(true);
  const [dataOpen, setDataOpen] = useState(false);
  const ShowMovieData = () => {
    setMapOpen(false);
    setDataOpen(true);
  };

  function find3Theaters(theaters) {
    const targetTheaters = ['CGV', '메가박스', '롯데시네마'];
    return theaters.filter((theater) =>
      targetTheaters.some((target) => theater.place_name.includes(target))
    );
  }

  // 근처 영화관 데이터 받아오기
  const [nData, setNData] = useState('');
  const [tData, setTData] = useState();
  const handleDataChange = (newData) => {
    const matchingTheaters = find3Theaters(newData);
    setNData(matchingTheaters);
  };

  function findCGVCode(theaters, place) {
    for (const theater of theaters) {
      if (theater.value.includes(place)) {
        return theater.theatercode;
      }
    }
    return null; // 일치하는 장소가 없을 경우
  }

  function findLOTTECode(theaters, place) {
    for (const theater of theaters) {
      if (theater.value.includes(place)) {
        return theater.cinemaID;
      }
    }
    return null; // 일치하는 장소가 없을 경우
  }

  function findMEGABOXCode(theaters, place) {
    for (const theater of theaters) {
      if (theater.value.includes(place)) {
        return theater.brchNo;
      }
    }
    return null; // 일치하는 장소가 없을 경우
  }

  useEffect(() => {
    const data1 = {
      title : title,
      token : localStorage.getItem('token')
    }
    
    axios
      .post('http://127.0.0.1:3000/movieView', data1)
      .then((response) => {
        // Handle the response here
        console.log(response.data);
      })
      .catch((error) => {
        // Handle errors here
        console.error('There was an error!', error);
      });


    if (dataOpen) {
      let theaterData = [];
      for (var i = 0; i < nData.length; i++) {
        const MD = nData[i].place_name.split(' ');
        const theather = MD[0];
        const place = MD[1];
        const CGV = cgv;
        const LOTTE = lotte;
        const MEGABOX = megabox;
        let code;
        let theaterType;

        if (theather === 'CGV') {
          // console.log(`CGVCode: ${findCGVCode(CGV, place)}`); // CGV 성공
          code = findCGVCode(CGV, place);
          theaterType = 'cgv';
        } else if (theather === '롯데시네마') {
          // console.log(`LotteCode: ${findLOTTECode(LOTTE, place)}`); // 롯데시네마 성공
          code = findLOTTECode(LOTTE, place);
          theaterType = 'lotte';
        } else if (theather === '메가박스') {
          // console.log(`MegaboxCode : ${findMEGABOXCode(MEGABOX, place)}`); //메가박스 성공
          code = findMEGABOXCode(MEGABOX, place);
          theaterType = 'megabox';
        }

        if (code && theaterType) {
          theaterData.push({ code, theaterType });
        }
      }
      setTData(theaterData);
    }
  }, [dataOpen, nData]);

  return (
    <Container>
      <Header>
        <Logo>
          <img width={'170px'} height={'110px'} src="/logo.png"></img>
        </Logo>
        <PageButton />
        <Login />
      </Header>

      <Body>
        {dataOpen && (
          <>
            <MovieInfo
              posterUrl={posterUrl}
              voteAvg={voteAvg}
              directorName={directorName}
              releaseDate={releaseDate}
              genres={genres}
            />
            <Reservation>
              <Date />
              <NearTheather>가까운 극장순 ↓</NearTheather>
              <TheatherGroup id="scroll">
                <Theather nData={nData} movieName={title} tData={tData} />
              </TheatherGroup>
              <Scroll />
            </Reservation>
          </>
        )}

        {mapOpen && (
          <>
            <KakaoMap onDataChange={handleDataChange} />
            <TextBox>
              <span>근처 영화관 검색결과입니다.</span>
              <br />
              <span>원하시는 버튼을 눌러주세요.</span>
              <br />
              <br />
              <StyledButton onClick={ShowMovieData}>
                실시간 예매 현황
              </StyledButton>
              <br />
              <StyledButton onClick={() => window.location.reload()}>
                위치 새로고침
              </StyledButton>
              <br />
              <StyledButton>위치 직접 설정</StyledButton>
            </TextBox>
          </>
        )}
      </Body>
    </Container>
  );
}

export default Page4;
