// import { useState } from 'react'
import { Link } from 'react-router-dom';
import { Container,Header,Logo,ButtonPage1,ButtonPage2,ButtonPage3,Image,Reservation, Date1, Date2, Date3, Date4, Date5, Date6, Date7, Theather1, Theather2, Theather3, Body } from './components/Page4Style'

function Page4() {
  // const [count, setCount] = useState(0);

  return (
    <Container>
      <Body>
        <Image />
        <Reservation>
            <Date1 />
            <Date2 />
            <Date3 />
            <Date4 />
            <Date5 />
            <Date6 />
            <Date7 />
            <Theather1 />
            <Theather2/>
            <Theather3/>
        </Reservation>
      </Body>
      <Header>
        <Logo />
        <Link to="/"><ButtonPage1>박스오피스</ButtonPage1></Link>
        <Link to="/page2"><ButtonPage2>상영작 추천</ButtonPage2></Link>
        <Link to="/page3"><ButtonPage3>내게 맞는 영화</ButtonPage3></Link>
      </Header>
    </Container>
  );
}

export default Page4