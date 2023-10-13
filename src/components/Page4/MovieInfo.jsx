import styled from "styled-components";

const Image = styled.div`
  position: absolute;
  width: 298px;
  height: 402px;
  left: 96px;
  top: 90px;
  background: #d9d9d9;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

const TextInfo = styled.div`
    position: absolute;
width: 298px;
height: 181px;
left: 96px;
top: 492px;
font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 40px;
display: flex;
align-items: center;
color: #F4F3F3;
text-align: left;
`;

function MovieInfo() {

  return (
    <>
        <Image/>
        <TextInfo>감독 : 이승훈<br/>장르 : 드라마 / 멜로<br/>개봉 : 2023.12.24<br/>평점 : 7.9</TextInfo>
    </>
  );
}

export default MovieInfo;