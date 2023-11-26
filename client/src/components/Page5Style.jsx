import styled from "styled-components";

// export const s = styled.div`
//     position: absolute;
// `;

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between; // 헤더와 푸터 사이의 공간을 균등하게 분배
  background: linear-gradient(0deg, #2A2F42 30%, #1C1E2C 70%);
`;

export const Body = styled.div`
  position: relative;
  top: 11vh;
  color: #f4f3f3;
  background: linear-gradient(0deg, #2A2F42 30%, #1C1E2C 70%); // Adjust the gradient direction and color stops
`;

export const Header = styled.div`
  position: fixed;
  width: 100%;
  min-width: 500px;
  height: 11vh;
  top: 0;
  z-index: 999;
  background: ${({ isvisible }) => (isvisible ? 'rgba(28, 30, 44, 1)' : 'rgba(28, 30, 44, 0.5)')};
  transition: background 0.5s ease;
`;

export const Logo = styled.div`
  position: fixed;
  width: 7vw;
  height: 11vh;
  left: 6vw;
  transition: transform 0.5s ease-in-out;
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
  @media (max-width: 768px) {
    width: 16vw;
  }
  @media (max-width: 480px) {
    width: 12vw;
  }
`;

export const ScrollContent = styled.div`
  width: 90%;
  margin: 0 auto;
  overflow: hidden;
  color: black;
  padding: 1vh 3vw;
  margin-bottom: 15vh;
  gap: 1.1vw;
  cursor: pointer;
  text-align: center;
align-items: center;
box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
border-radius: 10px;
border: 3px solid #535D7E;
  scroll-behavior: smooth;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  > div {
    position: relative;
    cursor: pointer;
    transition: filter 0.3s;
    &:hover {
      filter: brightness(0.7);
    }
    &:hover::before {
      display: block;
    }
  }
`;

export const TopSection = styled.div`
  display: flex;
  margin-bottom: 20vh;
  align-items: center; // 세로 중앙 정렬
  padding: 0 20px; // 필요한 경우 양쪽 패딩을 조정
`;

// export const RefreshIcon = styled.img`
//   cursor: pointer;
//   width: 80px;
//   height: 80px;
// `;

export const Text1 = styled.div`
position: relative;
margin-bottom: 5vh;
margin: 0 auto;
top: 15vh;
width: 430px;
display: flex;
padding: 1vh 2vw;
height: 50px;
font-family: 'Noto Sans KR';
font-style: normal;
font-weight: 400; 
font-size: 24px;
line-height: 35px;
color: #f4f3f3;
text-align: center;
align-items: center;
box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
border-radius: 10px;
border: 1px solid #535D7E;

`;

export const Submit = styled.button`
  width: 10vw;
  height: 8vh;
  background: #898FC0;
  color: #FFF; // 버튼 텍스트 색상
  border: none; // 기본 테두리 제거
  border-radius: 1.875rem;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 1.25rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25); // 그림자 조정
  transition: all 0.2s ease;

  &:hover {
    background: #4F526B;
    transform: translateY(-2px); // 클릭 유도를 위한 애니메이션 효과
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
  }
`;

export const SubmitContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding-bottom: 10vh;
`;


export const SubmitBox = styled.div`
  display: flex;
  width: 38%;
  height: 28vh;
  margin: 0 auto;
  margin-bottom: 10vh;
  border-radius: 5px;
  align-items: center;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  border: 3px solid #535D7E;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

export const SubmitContent = styled.div`
  cursor: pointer;
  boxShadow: '0 2px 4px #fff';
`;
