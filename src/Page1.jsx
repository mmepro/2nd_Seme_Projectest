// import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container,Header,Logo,Search,ButtonPage1,ButtonPage2,ButtonPage3,Body, ImageGroup} from './components/Page1Style';
import ImageChange from './components/Page1/Scroll';
import BoxOffice from './components/Page1/boxoffice';

function Page1() {
  // const [count, setCount] = useState(0)


  return (
    <Container>
      <Header>
        <Logo/>
        <Link to="/"><ButtonPage1>박스오피스</ButtonPage1></Link>
        <Link to="/page2"><ButtonPage2>상영작 추천</ButtonPage2></Link>
        <Link to="/page3"><ButtonPage3>내게 맞는 영화</ButtonPage3></Link>
      </Header>

      <Body>
        <Search/>
        <ImageGroup id='scroll'>
          <BoxOffice/>
        </ImageGroup>  
        <ImageChange/> 
      </Body>
    </Container>
  )
}

export default Page1