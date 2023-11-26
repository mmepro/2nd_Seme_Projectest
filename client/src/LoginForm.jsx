// LoginForm.jsx
import React, { useState,useEffect } from 'react';
import {
  Container,
  Header,
  Logo,
  Body,
  FormContainer,
  FormTitle,
  Label,
  StyledInput,
  SubmitButton,
  Caption,
} from './components/LoginFormStyle';
// FontAwesome 및 기타 필요한 컴포넌트 import
import PageButton from './components/Share/PageButton';
import Login from './components/Share/Login';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Footer from './components/Share/Footer';

function LoginForm() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setIsHeaderVisible(position === 0);
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  const navigate = useNavigate();
  // State hooks for each form field
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userData = { username, email, password };
    // 서버에서 구동할때는 주소 바꿔야 합니다
    await axios
      .post('http://localhost:3000/signup', userData)
      .then((response) => {
        console.log('회원가입 성공:', response.data);
        navigate('/Login');
        // 성공적인 회원가입 후 처리
      })
      .catch((error) => {
        console.error('회원가입 오류:', error);
        // 오류 처리
      });
  };

  return (
    <Container>
      <Header isvisible={isHeaderVisible}>
      <Logo>
        <Link to="/">
           <img src='/logo2.png' alt='Logo' style={{ width: '100%', height: '100%' }} />
        </Link>
        </Logo>
        <PageButton/>
        <Login/>
      </Header>

      <Body>
        <form onSubmit={handleSubmit}>
          <FormContainer>
            <FormTitle>회원 가입</FormTitle>

            <Label htmlFor="username">아이디 *</Label>
            <StyledInput
              id="username"
              type="text"
              placeholder="아이디를 입력해주세요."
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <Label htmlFor="email">이메일 *</Label>
            <StyledInput
              id="email"
              type="email"
              placeholder="이메일을 입력해주세요."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Label htmlFor="password">비밀번호 *</Label>
            <StyledInput
              id="password"
              type="password"
              placeholder="비밀번호를 입력해주세요."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {/* 
          <Label htmlFor="passwordConfirm">비밀번호 확인 *</Label>
          <StyledInput
            id="passwordConfirm"
            type="password"
            placeholder="비밀번호 확인을 입력해주세요."
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            required
          /> */}

            <SubmitButton type="submit">가입하기</SubmitButton>
            <Caption>
              계정이 있으신가요? | <Link to="/login">로그인</Link>
            </Caption>
          </FormContainer>
        </form>
      </Body>
      <Footer/>
    </Container>
  );
}
export default LoginForm;
