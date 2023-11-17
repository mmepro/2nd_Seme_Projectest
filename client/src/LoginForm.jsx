// LoginForm.jsx
import React from 'react';
import { Container, Header, Logo, Body, FormContainer, FormTitle, Label, StyledInput, SubmitButton, Caption  } from './components/LoginFormStyle';
// FontAwesome 및 기타 필요한 컴포넌트 import
import PageButton from './components/Share/PageButton';
import Login from './components/Share/Login';
import {Link} from 'react-router-dom';

function LoginForm() {
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
      <FormContainer>
      <FormTitle>회원 가입</FormTitle>
      <Label htmlFor="username">아이디 *</Label>
      <StyledInput id="username" type="text" placeholder="아이디를 입력해주세요." required />

      <Label htmlFor="email">이메일 *</Label>
      <StyledInput id="email" type="email" placeholder="이메일을 입력해주세요." required />

      <Label htmlFor="password">비밀번호 *</Label>
      <StyledInput id="password" type="password" placeholder="비밀번호를 입력해주세요." required />

      <Label htmlFor="passwordConfirm">비밀번호 확인 *</Label>
      <StyledInput id="passwordConfirm" type="password" placeholder="비밀번호 확인을 입력해주세요." required />

      <SubmitButton>회원가입</SubmitButton>
<Caption>
  계정이 있으신가요? |&nbsp;<Link to="/login">로그인</Link>
</Caption>
    </FormContainer>
      </Body>
    </Container>
  );
}

export default LoginForm;
