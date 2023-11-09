// import { useState } from 'react';
import { Container,Header,Logo,Body, ImageGroup,Name} from './components/Page1Style';
import ImageChange from './components/Page1/Scroll';
import BoxOffice from './components/Page1/boxoffice';
import PageButton from './components/Share/PageButton';
import Search from './components/Share/Search';
import Login from './components/Share/Login';

function Page1() {
  // const [count, setCount] = useState(0)


  return (
    <Container>
      <Header>
        <Logo>LOGO</Logo>
        <PageButton/>
        <Login/>
      </Header>

      <Body>
        <Search/>
        <Name>박스오피스</Name>
        <ImageGroup id='scroll'>
          <BoxOffice/>
        </ImageGroup>  
        <ImageChange/> 
      </Body>
    </Container>
  )
}

export default Page1