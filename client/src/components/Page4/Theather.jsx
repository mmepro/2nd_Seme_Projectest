import styled from 'styled-components';
import { useState, useEffect } from 'react'

const TheatherInfo = styled.div`
  position: absolute;
  width: 735px;
  height: 129px;
  background: #4f526b;
  overflow: hidden;
`;

const TheatherName = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  text-align: left;
  margin-left: 23px;
  margin-top: 10px;
`;

const TimeInfo = styled.div`
  position: absolute;
  width: 149px;
  height: 67px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  background: #898fc0;
  color: #000000;

`;

// eslint-disable-next-line react/prop-types
function Theather({ nData }) {
  const [data, setData] = useState(nData);

  useEffect(() => {
    setData(nData); // Update the state if nData prop changes
  }, [nData]); 

  return (
    <>
      {[0, 152, 304, 456, 608].map((top, index) => (
        <TheatherInfo
          key={index}
          style={{ left: '0px', top: `${top}px` }}
        >
          <TheatherName
          >{data[index].place_name}</TheatherName>
          {[23, 189, 355, 521, 687].map((left, index) => (
            <TimeInfo
              key={index}
              style={{ left: `${left}px`, top: `45px` }}
            >00:00 ~ 00:00<br/>
            x관</TimeInfo>
          ))}
        </TheatherInfo>
      ))}
    </>
  );
}

export default Theather;
