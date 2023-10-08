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
  background: #d9d9d9;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: #898FC0;
  color: black;
`;


function BoxOffice() {
  const ImageData = () => {};

  const GradeData = () => {};

  const ReservData = () => {};

  return (
    <>
      {[0, 291, 582, 873, 1164, 1455, 1746, 2037].map((left, index) => (
        <ImageInfo
          key={index}
          style={{ left: `${left}px`, top: '0px' }}
          onClick={ImageData}
        >{index + 1}</ImageInfo>
      ))}

      {[0, 291, 582, 873, 1164, 1455, 1746, 2037].map((left, index) => (
        <GradeInfo
          key={index}
          style={{ left: `${left}px`, top: '295px' }}
          onClick={GradeData}
        >x.x</GradeInfo>
      ))}

      <Link to="/page4">
        {[75, 366, 657, 948, 1239, 1530, 1821, 2112].map((left, index) => (
          <ReservInfo
            key={index}
            style={{ left: `${left}px`, top: '295px' }}
            onClick={ReservData}
          >예매</ReservInfo>
        ))}
      </Link>
    </>
  );
}

export default BoxOffice;
