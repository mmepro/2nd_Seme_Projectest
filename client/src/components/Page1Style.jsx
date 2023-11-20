import styled from "styled-components";

// export const s = styled.div`
//     position: absolute;
// `;

export const Container = styled.div`
  width: 100%; // 너비를 화면의 100%로 설정
`;


export const Body = styled.div`
  position: relative;
  color: #f4f3f3;
  width: 100%;
  height: 100%;
  background: linear-gradient(0deg, #2A2F42 30%, #1C1E2C 70%); // Adjust the gradient direction and color stops
`;


export const ImageGroup = styled.div`
  position: relative;
  width: 90%;
  height: 50vh;
  top: 150px;
  overflow: hidden;
  color: black;
  margin: 0 auto;
`;

export const Header = styled.div`
position: fixed;
width: 100%;
height: 83px;
left: 0px;
top: 0;
background: #1C1E2C;
z-index: 999; /* 다른 요소들 위에 표시하려면 z-index 설정 */
`;

export const Logo = styled.div`
position: fixed;
left: 90px;
display: flex;
transition: transform 0.5s ease-in-out;
&:hover {
  transform: scale(1.1);
  cursor: pointer;
}
`;

export const Footer = styled.footer`
width: 100%;
padding: 20px;
position: relative;
bottom: 0;
background-color: #f0f0f0;
text-align: center;
font-size: 0.8rem;
color: #333;
`;



