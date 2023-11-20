import styled from "styled-components";

// export const s = styled.div`
//     position: absolute;
// `;

export const Container = styled.div`
  width: 100%;
`;

export const Body = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0px;
  top: 111px;
  background: #2A2F42;
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
