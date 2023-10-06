// import { useState } from 'react'
import { Link } from 'react-router-dom';
import { Container,Header,Logo,ButtonPage1,ButtonPage2,ButtonPage3,Image,Reservation, TheatherGroup, Body } from './components/Page4Style'
import Scroll from './components/Page4/Scroll';
import Theather from './components/Page4/Theather';
import Date from './components/Page4/Date';
function Page4() {
  // const [count, setCount] = useState(0);

  return (
    <Container>
      <Header>
        <Logo />
        <Link to="/"><ButtonPage1>박스오피스</ButtonPage1></Link>
        <Link to="/page2"><ButtonPage2>상영작 추천</ButtonPage2></Link>
        <Link to="/page3"><ButtonPage3>내게 맞는 영화</ButtonPage3></Link>
      </Header>

      <Body>
        <Image />
        <Reservation>
            <Date/>
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