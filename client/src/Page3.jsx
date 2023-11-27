// import { useState } from 'react'
import { Container, Header, Logo, Body } from './components/Page3Style';
import Rcmd from './components/Page3/Rcmd';
import PageButton from './components/Share/PageButton';
import Search from './components/Share/Search';
import Login from './components/Share/Login';
import Chart from './components/Page3/Chart';
import Member from './components/Share/Member';
import { jwtDecode } from 'jwt-decode';

function Page3() {
  // const [count, setCount] = useState(0)
  const [token, setToken] = useState(null);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
      const decodedToken = jwtDecode(storedToken);
      setUsername(decodedToken.username);
    }
  }, []);

  return (
    <Container>
      <Header>
        <Logo>
          <img width={'170px'} height={'110px'} src="/logo.png"></img>
        </Logo>
        <PageButton />
        {token ? <Member /> : <Login />}
      </Header>

      <Body>
        <Search />
        <Rcmd />
        <Chart />
      </Body>
    </Container>
  );
}

export default Page3;
