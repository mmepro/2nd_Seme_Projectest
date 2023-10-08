import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ImageInfo = styled.div`
  position: absolute;
  width: 194px;
  height: 285px;
  background: #d9d9d9;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

const GradeInfo = styled.div`
  position: absolute;
  width: 65px;
  height: 27px;
  background: #1C1E2C;
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
  background-color: #898FC0;
  color: black;
`;

function Rcmd() {
  const ImageData = () => {};

  const GradeData = () => {};

  const ReservData = () => {};

  return (
    <>
      {[565,809,1053].map((left, index) => (
        <ImageInfo
          key={index}
          style={{ left: `${left}px`, top: '220px' }}
          onClick={ImageData}
        />
      ))}

      {[565,809,1053].map((left, index) => (
        <GradeInfo
          key={index}
          style={{ left: `${left}px`, top: '515px' }}
          onClick={GradeData}
        />
      ))}

      <Link to="/page4">
        {[640,884,1128].map((left, index) => (
          <ReservInfo
            key={index}
            style={{ left: `${left}px`, top: '515px' }}
            onClick={ReservData}
          />
        ))}
      </Link>
    </>
  );
}

export default Rcmd;