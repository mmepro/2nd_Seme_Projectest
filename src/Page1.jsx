import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container,Header,Logo,Search,Image1,Image2,Image3,Image4,ButtonPage1,ButtonPage2,ButtonPage3, Reserve1, Reserve2, Reserve3, Reserve4, Grade1, Grade3, Grade2, Grade4, Body } from './components/Page1Style';

function Page1() {
  const [count, setCount] = useState(0)

  return (
    <Container>
      <Header>
        <Logo/>
        <Link to="/"><ButtonPage1>박스오피스</ButtonPage1></Link>
        <Link to="/page2"><ButtonPage2>상영작 추천</ButtonPage2></Link>
        <Link to="/page3"><ButtonPage3>내게 맞는 영화</ButtonPage3></Link>
      </Header>

      <Body>      
        <Image1/>
        <Image2/>
        <Image3/>
        <Image4/>
        <Grade1>x.x</Grade1>
        <Grade2>x.x</Grade2>
        <Grade3>x.x</Grade3>
        <Grade4>x.x</Grade4>
        <Search/>
        <Link to="/page4"><Reserve1>예매</Reserve1></Link>
        <Link to="/page4"><Reserve2>예매</Reserve2></Link>
        <Link to="/page4"><Reserve3>예매</Reserve3></Link>
        <Link to="/page4"><Reserve4>예매</Reserve4></Link></Body>
    </Container>
  )
}

export default Page1