import styled from "styled-components";

// export const s = styled.div`
//     position: absolute;
// `;

export const Container = styled.div`
  width: 100%; // 너비를 화면의 100%로 설정
  height: 100vh; // 높이를 화면의 100%로 설정
`;


export const Body = styled.div`
  position: relative;
  top: 11vh;
  color: #f4f3f3;
  background: linear-gradient(0deg, #2A2F42 30%, #1C1E2C 70%); // Adjust the gradient direction and color stops
  overflow-y: visible;
  overflow-x: hidden;
`;


export const ImageGroup = styled.div`
  position: relative;
  width: 90%;
  height: 400px;
  top: 150px;
  overflow: hidden;
  color: black;
  margin: 0 auto;
  scroll-behavior: smooth;
`;

export const Header = styled.div`
position: fixed;
width: 100%;
min-width: 500px;
height: 11vh;
left: 0px;
top: 0;
z-index: 999;
background: ${({ isvisible }) => (isvisible ? 'rgba(28, 30, 44, 1)' : 'rgba(28, 30, 44, 0.5)')};
 transition: background 0.5s ease; /* 배경 전환에 애니메이션 추가 */
`;

export const Logo = styled.div`
  position: fixed;
  width: 7vw; // Start with a base size
  height: 11vh; // Maintain aspect ratio
  left: 6vw;
  transition: transform 0.5s ease-in-out;
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }

  // Adjustments for smaller screens
  @media (max-width: 768px) {
    width: 16vw; // Larger percentage on smaller screens
    height: 11vh; // Maintain aspect ratio
  }

  // Adjustments for very small screens
  @media (max-width: 480px) {
    width: 12vw; // Even larger percentage on very small screens
    height: 11vh; // Maintain aspect ratio
  }
`;




