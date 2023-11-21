// LoginForm.jsx
import React, { useState } from 'react';
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
  AssignComplete,
  TextOfLogin,
  LoginButton,
  CheckLogo,
} from './components/LoginFormStyle';
// FontAwesome 및 기타 필요한 컴포넌트 import
import PageButton from './components/Share/PageButton';
import Login from './components/Share/Login';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaRegCheckCircle } from "react-icons/fa";

function LoginForm() {
  const navigate = useNavigate();
  // State hooks for each form field
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleLoginClick = () => {
    navigate('/login'); // Navigates to the /Login page
  };

  const handleAssignClick = () => {
    setShowModal(true);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userData = { username, email, password };

    // 서버에서 구동할때는 주소 바꿔야 합니다
    await axios
      .post('http://localhost:3000/signup', userData)
      .then((response) => {
        console.log('회원가입 성공:', response.data);
        showModal(true)
      })
      .catch((error) => {
        console.error('회원가입 오류:', error);
        // 오류 처리
      });
  };

  return (
    <Container>
      <Header>
        <Logo>
          <img width={'170px'} height={'120px'} src="/logo.png" alt="Logo" />
        </Logo>
        <PageButton />
        <Login />
      </Header>

      <Body>
        {!showModal && <form onSubmit={handleSubmit}>
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

            <SubmitButton onClick={handleAssignClick} type="submit">회원가입</SubmitButton>
            <Caption>
              계정이 있으신가요? | <Link to="/login">로그인</Link>
            </Caption>
          </FormContainer>
        </form>}

        {showModal&&<><CheckLogo>
          <FaRegCheckCircle className="logo" />
        </CheckLogo><AssignComplete>회원가입이 완료 되었습니다.</AssignComplete><TextOfLogin>로그인 하시면 예매 정보와 영화 추천 서비스를 이용하실 수 있습니다.</TextOfLogin><LoginButton onClick={handleLoginClick}>로그인</LoginButton></>}  
      </Body>
    </Container>
  );
}

export default LoginForm;
