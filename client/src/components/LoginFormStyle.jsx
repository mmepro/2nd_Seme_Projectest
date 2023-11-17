import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 1280px;
  height: 832px;
  color: #f4f3f3;
`;

export const Body = styled.div`
  position: relative;
  width: 1280px;
  height: 721px;
  left: 0px;
  top: 111px;
  background: #2A2F42;
  
`;

export const Header = styled.div`
position: absolute;
width: 1280px;
height: 123px;
left: 0px;
top: 0px;
background: #1C1E2C;
`;

export const Logo = styled.div`
position: absolute;
left: 90px;
display: flex;
`;


export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: #2A2F42;
  color: #fff; /* 글자색 조정 */
  font-family: 'Inter';
`;

export const FormTitle = styled.h2`
  margin-bottom: 20px; /* 제목 아래 간격 */
`;

export const Label = styled.label`
  align-self: flex-start;
  margin-left: 24%; /* 레이블의 왼쪽 마진 */
  margin-bottom: 5px; /* 입력 필드 위 간격 */
  font-family: 'Inter';
`;

export const StyledInput = styled.input`
  width: 50%; /* 폼 너비에 맞춤 */
  height: 40px; /* 입력 필드 높이 */
  margin-bottom: 15px; /* 입력 필드 간격 */
  padding: 0 15px; /* 내부 여백 */
  border-radius: 5px; /* 모서리 둥글기 */
  border: 1px solid #fff; /* 테두리 색상 */
  background-color: #fff; /* 입력 필드 배경색 */
  font-size: 16px; /* 글꼴 크기 */
  font-family: 'Inter';
`;

export const SubmitButton = styled.button`
  width: 52.5%; /* 버튼 너비 */
  height: 65px; /* 버튼 높이 */
  margin-top: 50px; /* 버튼 위 간격 */
  border-radius: 5px; /* 모서리 둥글기 */
  background: #898FC0;
  color: #fff; /* 버튼 글자색 */
  border: none; /* 테두리 없음 */
  font-size: 20px; /* 글꼴 크기 */
  cursor: pointer; /* 마우스 오버시 커서 변경 */
  font-family: 'Inter';
`;

export const SignInLink = styled.p`
margin-top: 20px;
color: #9AB0FF;
text-align: center;
font-size: 18px;

a {
  color: #9AB0FF; // <Link> 컴포넌트에 적용될 색상
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}
`;

export const Caption = styled(SignInLink)` // Caption을 SignInLink와 같은 스타일로 정의
color: #FFFFFF;
font-family: 'Inter';
font-style: normal;
`;