import { useState,useEffect } from 'react'
import { Container,Header,Logo,Body } from './components/Page2Style'
import Rcmd from './components/Page2/Rcmd';
import PageButton from './components/Share/PageButton';
import Search from './components/Share/Search';
import Login from './components/Share/Login';
import Chart from './components/Page2/Chart';
import { Colors } from 'chart.js';

function Page2() {

  return (
    <Container>
      <Header>
      <Logo>
        <img width={'170px'} height={'120px'} src='/logo.png'></img>
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