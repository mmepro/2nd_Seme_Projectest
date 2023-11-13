import styled from 'styled-components';
import { PieChart } from './Pie';

const ChartTopInfo = styled.div`
  position: absolute;
  width: 410px;
  height: 79px;
  left: 170px;
  top: 165px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400; 
  font-size: 24px;
  line-height: 35px;
  color: #f4f3f3;
  text-align: left;
  align-items: center;
`;

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

const ChartImage = styled.div`

position: absolute;
width: 350px;
height: 350px;
left: 110px;
top: 200px;

`;

function Chart() {
  //   const Data = () => {};

  return (
    <>  
      <ChartTopInfo>
        OOO님의 관람 기록 top3
      </ChartTopInfo>
      <ChartImage>
        <PieChart/>
      </ChartImage>
    </>
  );
}

export default Chart;
