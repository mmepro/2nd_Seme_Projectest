import { useState } from 'react'
import { Link } from 'react-router-dom';
import { Container,Header,Logo,ButtonPage1,ButtonPage2,ButtonPage3,Image,Reservation, Date1, Date2, Date3, Date4, Date5, Date6, Date7, Theather1, Theather2, Theather3 } from './components/Page4Style'

function Page4() {
  const [count, setCount] = useState(0);

  return (
    <Container>
      <Header>
        <Logo />
        <Link to="/">
          <ButtonPage1 />
        </Link>
        <Link to="/page2">
          <ButtonPage2 />
        </Link>
        <Link to="/page3">
          <ButtonPage3 />
        </Link>
      </Header>
      <Image />
      <Reservation/>
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
    </Container>
  );
}

export default Page4