import styled from 'styled-components';

const ChartTopInfo = styled.div`
  position: absolute;
  width: 410px;
  height: 79px;
  left: 200px;
  top: 183px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 35px;
  color: #f4f3f3;
  text-align: left;
  align-items: center;
`;

const ChartRightInfo = styled.div`
position: absolute;
width: 120px;
height: 120px;
left: 422px;
top: 338px;

font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 40px;
display: flex;
align-items: center;
text-align: left;

color: #F4F3F3;
`;

const ChartImage = styled.div`

position: absolute;
width: 257px;
height: 252px;
left: 115px;
top: 282px;
border-radius: 100%;
background: #D9D9D9;

`;

function Chart() {
  //   const Data = () => {};

  return (
    <>
      <ChartTopInfo>
        OOO님의 관람 기록 top3는
        <br />
        OOO,OOO,OOO입니다.
      </ChartTopInfo>
      <ChartImage/>
      <ChartRightInfo>
        스포츠 4편
        <br />
        액션 3편
        <br />
        로맨스 2편
      </ChartRightInfo>
    </>
  );
}

export default Chart;
