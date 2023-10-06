import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ImageInfo = styled.div`
  position: absolute;
  width: 194px;
  height: 285px;
  background: #d9d9d9;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const GradeInfo = styled.div`
  position: absolute;
  width: 65px;
  height: 27px;
  background: #d9d9d9;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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
        />
      ))}

      <Link to="/page4">
        {[75, 366, 657, 948, 1239, 1530, 1821, 2112].map((left, index) => (
          <ReservInfo
            key={index}
            style={{ left: `${left}px`, top: '295px' }}
            onClick={ReservData}
          />
        ))}
      </Link>
    </>
  );
}

export default BoxOffice;
