import styled from "styled-components";

// export const s = styled.div`
//     position: absolute;
// `;

export const Container = styled.div`
  position: relative;
  width: 1280px;
  height: 832px;
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
width: 238px;
height: 45px;
left: 67px;
top: 32px;
font-family: 'Ingrid Darling';
font-style: normal;
font-weight: 400;
font-size: 64px;
line-height: 79px;
display: flex;
align-items: center;
text-align: center;
`;

export const ButtonPage1 = styled.button`
  position: absolute;
  width: 180px;
  height: 58px;
  left: 469px;
  top: 42px;

  background: #c9c5c5;
`;

export const ButtonPage2 = styled.button`
  position: absolute;
  width: 180px;
  height: 58px;
  left: 655px;
  top: 42px;

  background: #c9c5c5;
`;

export const ButtonPage3 = styled.button`
  position: absolute;
  width: 180px;
  height: 58px;
  left: 841px;
  top: 42px;

  background: #c9c5c5;
`;

export const ScrollContent = styled.div`
  position: absolute;
  left: 106px;
  right: 106px;
  top: 100px;
  overflow: hidden;
  color: black;
  padding: 20px;
  gap: 25px;
  cursor: pointer;
  background: #4F526B; /* 원하는 색상으로 변경 */

  // Add styles for the movie posters
  > div {
    position: relative;
    cursor: pointer;
    transition: filter 0.3s; /* Add a transition for smooth effect */

    // Darken the poster on hover
    &:hover {
      filter: brightness(0.7); /* Darken the poster */
    }

    // Show the overlay when hovering over the movie poster
    &:hover::before {
      display: block;
    }
  }
`;

export const Text1 = styled.div`
position: absolute;
width: 885px;
height: 44.96px;
left: calc(50% - 885px/2 - 0.5px);
top: 57px;
font-family: 'Noto Sans KR', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 19px;
color: #FFFFFF;
`;

export const Submit = styled.button`
position: absolute;
width: 150px;
height: 50px;
left: 580px;
top: 645px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
background: #898FC0;
border-radius: 30px;
transition: background-color 0.2s ease; /* hover 시 배경색 변화를 부드럽게 만들기 위한 트랜지션 설정 */
/* hover 시 배경색 변경 */
&:hover {
  background: #4F526B; /* 원하는 색상으로 변경 */
}
font-family: 'Noto Sans KR', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 20px;
text-align: center; /* 텍스트 가운데 정렬 */
line-height: 10px; 
`;

export const SubmitBox = styled.div`
  position: absolute;
  width: 424px;
  height: 154px;
  left: 428px;
  top: 440px;
  border-radius: 5px;
  background: #4F526B; /* 원하는 색상으로 변경 */
  display: flex;
  justify-content: space-between; /* 컨텐츠를 가운데 정렬하기 위해 */
  align-items: center; /* 세로 가운데 정렬하기 위해 */
  padding: 20px; /* 내부 간격 설정 */
`;

export const SubmitContent = styled.div`
cursor: pointer;
`;