import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// export const s = styled.div`
//     position: absolute;
// `;

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

export const Logo1 = styled.div`
  position: absolute;
  width: 238px;
  height: 45px;
  left: 555px; /* 변경된 값으로 수정 */
  top: 100px; /* 변경된 값으로 수정 */

  /* 기존 스타일 유지 */
  font-family: 'Ingrid Darling';
  font-style: normal;
  font-size: 64px;
  font-weight: 100;
  line-height: 79px;
  display: flex;
  align-items: center;
  text-align: center;
`;

export const BoldText = styled.span`
  font-weight: 800;
  font-size: 24px;
`;

export const Welcome = styled.div`
  position: absolute;
  width: 500px;
  left: 400px; /* 변경된 값으로 수정 */
  top: 220px; /* 변경된 값으로 수정 */

  font-family: 'Inter';
  font-style: normal;
  font-size: 18px;
  line-height: 25px;
  align-items: center;
  text-align: left;
  white-space: pre-wrap;
  color: #FFFFFF;
`;

export const Icon = styled(FontAwesomeIcon)`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: grey;
`;

export const IdInput = styled.input`
position: absolute;
width: 460px;
height: 52px;
left: 400px;
top: 276px;
background: transparent;
border: none;
border-bottom: 0.5px solid #fff; 
padding-left: 40px; /* 아이콘을 위한 공간 확보 */
font-family: 'Inter';
font-style: normal;
color: #FFFFFF;
font-weight:400;
font-size: 15px;
`;

export const PwInput = styled(IdInput)` // Extend IdInput to maintain styles
  top: 340px; // Adjust top if necessary
`;

export const LoginButton = styled.button`

position: absolute;
width: 505px;
left: 400px;
top: 420px;
border-radius: 40px;
background: #898FC0;
color: #FFFFFF;
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 20px;
`;

export const Caption = styled.div`
position: absolute;
width: 505px;
height: 47px;
left: 525px;
top: 486px;
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 29px;
display: flex;
align-items: center;
text-align: center;

color: #FFF;

a {
  color: #9AB0FF; // <Link> 컴포넌트에 적용될 색상
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}
`;
export const InputGroup = styled.div`
  position: relative;
  width: 540px; // 아이콘 공간 포함 너비
  margin-bottom: 20px; // 각 InputGroup 사이의 간격
`;

