// import { useState } from 'react';
import { Container,Header,Logo,Body, ImageGroup,Footer} from './components/Page1Style';
import { Link } from 'react-router-dom';
import ImageChange from './components/Page1/Scroll';
import BoxOffice from './components/Page1/boxoffice';
import PageButton from './components/Share/PageButton';
import Search from './components/Share/Search';
import Login from './components/Share/Login';
import MoreMovies from './components/Page1/MoreMovies';
import LandingPage from './components/Page1/LandingPage';
function Page1() {
  // const [count, setCount] = useState(0)


  return (
    <Container>
      <Header>
        <Logo>
        <Link to="/">
            <img width={'112px'} height={'80px'} src='/logo.png' alt='Logo'></img>
          </Link>
        </Logo>
        <PageButton/>
        <Login/>
      </Header>

      <Body>
        <LandingPage/>
        <Search/>
        <ImageGroup id='scroll'>
          <BoxOffice/>
        </ImageGroup>  
        <ImageChange/> 
        <MoreMovies/>
      </Body>
      <Footer>
        © 2023 MOVIEPARTNER. All Rights Reserved.
      </Footer>
    </Container>
  )
}

export default Page1