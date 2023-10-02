import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container,Header,Logo,Search,Image1,Image2,Image3,Image4,ButtonPage1,ButtonPage2,ButtonPage3, Reserve1, Reserve2, Reserve3, Reserve4 } from './components/Page1Style';

function Page1() {
  const [count, setCount] = useState(0)

  return (
    <Container>
      <Image1/>
      <Image2/>
      <Image3/>
      <Image4/>
      <Search/>
      <Link to="/page4">      <Reserve1/></Link>
      <Link to="/page4">      <Reserve2/></Link>
      <Link to="/page4">      <Reserve3/></Link>
      <Link to="/page4">      <Reserve4/></Link>
      <Header>
        <Logo/>
        <Link to="/"><ButtonPage1/></Link>
        <Link to="/page2"><ButtonPage2/></Link>
        <Link to="/page3"><ButtonPage3/></Link>
      </Header>
    </Container>
  )
}

export default Page1