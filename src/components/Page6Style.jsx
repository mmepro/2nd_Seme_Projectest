import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 1280px;
  height: 832px;
  color: #f4f3f3;
`;

export const Body = styled.div`
  position: relative;
  overflow: hidden;
  width: 1280px;
  height: 721px;
  left: 0px;
  top: 111px;
  background: #2A2F42;
`;

export const Name = styled.div`
position: absolute;
width: 149px;
height: 53px;
left: calc(50% - 149px/2 - 0.5px);
top: calc(50% - 53px/2 - 178px);

font-family: 'Noto Sans KR', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 24px;
display: flex;
align-items: center;
justify-content: center;
background: #2A2F42;
color: #F4F3F3;
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

export const ResultContainer = styled.div`
  position: absolute;
  width: 1170px;
  top: 190px;
  left: 35px;
  overflow: hidden;
  padding: 20px;
  border: 1px solid white;
`;

export const ResultGroup = styled.div`
  display: flex;
`