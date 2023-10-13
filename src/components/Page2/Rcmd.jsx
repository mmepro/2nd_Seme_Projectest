import styled from 'styled-components';
import { Link } from 'react-router-dom';

const TextInfo = styled.div`
  position: absolute;
  width: 403px;
  height: 53px;
  left: 565px;
  top: 155px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #f4f3f3;
`;
const ImageInfo = styled.div`
  position: absolute;
  width: 194px;
  height: 285px;
  background: #d9d9d9;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  color: black;
`;

const GradeInfo = styled.div`
  position: absolute;
  width: 65px;
  height: 27px;
  background: #1c1e2c;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #f4f3f3;
`;

const ReservInfo = styled.button`
  position: absolute;
  width: 119px;
  height: 27px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: #898fc0;
  color: black;
`;

function Rcmd() {
  const ImageData = () => {};

  const GradeData = () => {};

  const ReservData = () => {};

  return (
    <>
      <TextInfo>000님에게 추천드리는 현재 상영작</TextInfo>
      {[565, 809, 1053].map((left, index) => (
        <ImageInfo
          key={index}
          style={{ left: `${left}px`, top: '220px' }}
          onClick={ImageData}
        >
          {index + 1}
        </ImageInfo>
      ))}

      {[565, 809, 1053].map((left, index) => (
        <GradeInfo
          key={index}
          style={{ left: `${left}px`, top: '515px' }}
          onClick={GradeData}
        >
          x.x
        </GradeInfo>
      ))}

      <Link to="/page4">
        {[640, 884, 1128].map((left, index) => (
          <ReservInfo
            id={`예매${index + 1}`}
            key={index}
            style={{ left: `${left}px`, top: '515px' }}
            onClick={ReservData}
          >
            예매
          </ReservInfo>
        ))}
      </Link>
    </>
  );
}

export default Rcmd;
