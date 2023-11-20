import PageButton from './components/Share/PageButton';
import Login from './components/Share/Login';
import {
  Container,
  Header,
  Logo,
  Logo1,
  Body,
  Welcome,
  BoldText,
  IdInput,
  PwInput,
  InputGroup,
  LoginButton,
  Caption,
} from './components/LoginPageStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // 서버에서 구동할때는 주소 바꿔야 합니다
  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/login', {
        username,
        password,
      });
      console.log('로그인 성공', res.data);
      navigate('/');
    } catch (error) {
      console.log('로그인 에러', error);
    }
  };

  return (
    <Container>
      <Header>
        <Logo>
          <img width={'170px'} height={'120px'} src="/logo.png"></img>
        </Logo>
        <PageButton />
        <Login />
      </Header>

      <Body>
        <Logo1>
          <img width={'170px'} height={'120px'} src="/logo2.png"></img>
        </Logo1>
        <Welcome>
          반갑습니다.{'\n'}
          <span>
            TGI의 <BoldText>MOVIEPARTNER </BoldText>입니다.{' '}
          </span>
        </Welcome>
        <InputGroup>
          <FontAwesomeIcon
            icon={faUser}
            style={{ position: 'absolute', left: '415px', top: '295px' }}
          />
          <IdInput
            type="text"
            placeholder="아이디를 입력해 주세요"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </InputGroup>

        <InputGroup>
          <FontAwesomeIcon
            icon={faLock}
            style={{ position: 'absolute', left: '415px', top: '360px' }}
          />
          <PwInput
            type="password"
            placeholder="비밀번호를 입력해 주세요"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputGroup>
        <LoginButton onClick={handleLogin}>로그인하기</LoginButton>
        <Caption>
          새로운 회원이신가요? |&nbsp; <Link to="/signup"> 회원가입</Link>
        </Caption>
      </Body>
    </Container>
  );
}

export default LoginPage;
