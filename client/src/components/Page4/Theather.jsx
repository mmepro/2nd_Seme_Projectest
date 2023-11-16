import styled from 'styled-components';
import { useState, useEffect } from 'react'
import axios from 'axios';

const TheatherInfo = styled.div`
  position: absolute;
  width: 735px;
  height: 145px;
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
  height: 83px;
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
function Theather({ nData, movieName, tData }) {
  const [data2, setData2] = useState([]);
  useEffect(() => {
    if (tData) {
      let allData = [];
      let promises = [];
      for (var i = 0; i < nData.length; i++) {
        let promise = axios({
          method: 'get',
          url: `http://43.201.51.58:3000/crawler/${tData[i].theaterType}/${tData[i].code}`,
        }, { withCredentials: true })
        .then((Response) => {
          const filteredData = Response.data.data.filter(item => item.movieName === movieName);
          return filteredData;
        })
        .catch((Error) => {
          console.log(Error);
          return []; // Return an empty array in case of an error
        });
        promises.push(promise);
      }
      Promise.all(promises).then((results) => {
        allData.push(...results); // Collect all responses
        setData2(allData); // Update the state with the collected data
      });
    }
  }, [nData, tData]);
  
  

  return (
    <>
      {[0, 152, 304, 456, 608].map((top, index) => (
        nData[index] && (
          <TheatherInfo
            key={index}
            style={{ left: '0px', top: `${top}px` }}
          >
            <TheatherName>{nData[index].place_name}</TheatherName>
            {[23, 189, 355, 521, 687].map((left, timeIndex) => {
              // Check if data2 and the required indexes in data2 exist
              const timeInfoData = data2 && data2[index] && data2[index][timeIndex];
              return (
                timeInfoData && (
                  <TimeInfo
                    key={timeIndex}
                    style={{ left: `${left}px`, top: `45px` }}
                  >{timeInfoData.playTime}
                  <br/>{timeInfoData.screenName}
                  <br/>잔여좌석 {timeInfoData.remainingSeats}
                  </TimeInfo>
                )
              );
            })}
          </TheatherInfo>
        )
      ))}
    </>
  );
  
  
  
}

export default Theather;
// {[0, 152, 304, 456, 608].map((top, index) => (