import { useState,useEffect } from 'react'
import { Container,Header,Logo,Body } from './components/Page2Style'
import { Link } from 'react-router-dom';
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
        <Link to="/">
            <img width={'112px'} height={'80px'} src='/logo.png' alt='Logo'></img>
          </Link>
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