// import { useState } from 'react'
// import { Link } from 'react-router-dom';
import { Container,Header,Logo,Image,Reservation, TheatherGroup, Body, NearTheather } from './components/Page4Style'
import Scroll from './components/Page4/Scroll';
import Theather from './components/Page4/Theather';
import Date from './components/Page4/Date';
import PageButton from './components/Share/PageButton';
import Login from './components/Share/Login';
function Page4() {
  // const [count, setCount] = useState(0);

  return (
    <Container>
      <Header>
      <Logo>MOVIE</Logo>
        <PageButton/>
        <Login/>
      </Header>

      <Body>
        <Image />
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