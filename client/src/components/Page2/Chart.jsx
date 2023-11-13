import styled from 'styled-components';
<<<<<<< HEAD
=======
import { PieChart } from './Pie';
>>>>>>> 3605eda86fa43f10f3f5620bb67787a01720cb25

const ChartTopInfo = styled.div`
  position: absolute;
  width: 410px;
  height: 79px;
<<<<<<< HEAD
  left: 200px;
  top: 183px;
=======
  left: 170px;
  top: 165px;
>>>>>>> 3605eda86fa43f10f3f5620bb67787a01720cb25
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 35px;
  color: #f4f3f3;
  text-align: left;
  align-items: center;
`;

<<<<<<< HEAD
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
=======
// const ChartRightInfo = styled.div`
// position: absolute;
// width: 120px;
// height: 120px;
// left: 422px;
// top: 338px;

// font-family: 'Inter';
// font-style: normal;
// font-weight: 400;
// font-size: 24px;
// line-height: 40px;
// display: flex;
// align-items: center;
// text-align: left;

// color: #F4F3F3;
// `;
>>>>>>> 3605eda86fa43f10f3f5620bb67787a01720cb25

const ChartImage = styled.div`

position: absolute;
<<<<<<< HEAD
width: 257px;
height: 252px;
left: 115px;
top: 282px;
border-radius: 100%;
background: #D9D9D9;
=======
width: 350px;
height: 350px;
left: 110px;
top: 200px;
>>>>>>> 3605eda86fa43f10f3f5620bb67787a01720cb25

`;

function Chart() {
  //   const Data = () => {};

  return (
    <>
      <ChartTopInfo>
<<<<<<< HEAD
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
=======
        OOO님의 관람 기록 top3
      </ChartTopInfo>
      <ChartImage>
        <PieChart/>
      </ChartImage>
>>>>>>> 3605eda86fa43f10f3f5620bb67787a01720cb25
    </>
  );
}

export default Chart;
