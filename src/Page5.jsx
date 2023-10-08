// import { useState } from 'react'
// import { Link } from 'react-router-dom';
import { Container,Header,Logo,Body } from './components/Page5Style'
import Login from './components/Share/Login';
import PageButton from './components/Share/PageButton';

function Page5() {
  // const [count, setCount] = useState(0);

  return (
    <Container>
      <Header>
      <Logo>MOVIE</Logo>
        <PageButton/>
        <Login/>
      </Header>

      <Body>
      </Body>
    </Container>
  );
}

export default Page5