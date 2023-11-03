import React, { useEffect } from 'react';
import { Container, Header, Logo, Body } from './components/MapPageStyle';
import PageButton from './components/Share/PageButton';
import Login from './components/Share/Login';

function MapPage() {
  useEffect(() => {
    // Kakao Maps SDK 스크립트를 로드한 후 실행되어야 합니다.
    const script = document.createElement('script');
    script.src = '//dapi.kakao.com/v2/maps/sdk.js?appkey=75ca4824598e0e448b4eba133435b6de';
    script.async = true;

    script.onload = () => {
      // Kakao Maps SDK 로드 후에 kakao.maps 객체가 전역 범위에 사용 가능해집니다.
      const container = document.getElementById('map');
      const options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 3
      };

      const map = new kakao.maps.Map(container, options);
    };

    document.body.appendChild(script);

    return () => {
      // 컴포넌트 언마운트 시에 스크립트 정리
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Container>
      <Header>
        <Logo>LOGO</Logo>
        <PageButton />
        <Login />
      </Header>

      <Body>
        <div id="map" style={{ width: '500px', height: '400px' }}></div>
      </Body>
    </Container>
  );
}

export default MapPage;
