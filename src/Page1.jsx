// import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Container,Header,Logo,Search,Image1,Image2,Image3,Image4,ButtonPage1,ButtonPage2,ButtonPage3, Reserve1, Reserve2, Reserve3, Reserve4, Grade1, Grade3, Grade2, Grade4, Body, ImageGroup, Image5, Image6, Image7, Image8, Grade5, Grade6, Grade7, Grade8, Reserve5, Reserve6, Reserve7, Reserve8 } from './components/Page1Style';
import ImageChange from './components/Page1/ImageChange';

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
          <Image1>1</Image1><Image2>2</Image2><Image3>3</Image3><Image4>4</Image4>
          <Image5>5</Image5><Image6>6</Image6><Image7>7</Image7><Image8>8</Image8>
          <Grade1>x.x</Grade1><Grade2>x.x</Grade2><Grade3>x.x</Grade3><Grade4>x.x</Grade4>
          <Grade5>x.x</Grade5><Grade6>x.x</Grade6><Grade7>x.x</Grade7><Grade8>x.x</Grade8>
          <Link to="/page4"><Reserve1>예매</Reserve1></Link>
          <Link to="/page4"><Reserve2>예매</Reserve2></Link>
          <Link to="/page4"><Reserve3>예매</Reserve3></Link>
          <Link to="/page4"><Reserve4>예매</Reserve4></Link>
          <Link to="/page4"><Reserve5>예매</Reserve5></Link>
          <Link to="/page4"><Reserve6>예매</Reserve6></Link>
          <Link to="/page4"><Reserve7>예매</Reserve7></Link>
          <Link to="/page4"><Reserve8>예매</Reserve8></Link>   
        </ImageGroup>  
        <ImageChange/> 
      </Body>
    </Container>
  )
}

export default Page1