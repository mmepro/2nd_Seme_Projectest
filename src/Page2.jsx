// import { useState } from 'react'
import { Container,Header,Logo,Body } from './components/Page2Style'
import Rcmd from './components/Page2/Rcmd';
import PageButton from './components/Share/PageButton';
import Search from './components/Share/Search';
import Login from './components/Share/Login';
import Chart from './components/Page2/Chart';

function Page2() {
  // const [count, setCount] = useState(0)

  return (
    <Container>
      <Header>
      <Logo>
        <img width={'170px'} height={'120px'} src='public/logo.png'></img>
      </Logo>
        <PageButton/>
        <Login/>
      </Header>

      <Body>
        <Search/>
        <Rcmd/>
        <Chart/>
      </Body>
    </Container>
  )
}

export default Page2