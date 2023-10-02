import { useState } from 'react'
import { Link } from 'react-router-dom';
import { Container,Header,Logo,Search,Image1,Image2,Image3,Chart,ButtonPage1,ButtonPage2,ButtonPage3 } from './components/Page2Style'

function Page2() {
  const [count, setCount] = useState(0)

  return (
    <Container>
      <Image1/>
      <Image2/>
      <Image3/>
      <Chart/>
      <Search/>
      <Header>
        <Logo/>
        <Link to="/"><ButtonPage1/></Link>
        <Link to="/page2"><ButtonPage2/></Link>
        <Link to="/page3"><ButtonPage3/></Link>
      </Header>
    </Container>
  )
}

export default Page2