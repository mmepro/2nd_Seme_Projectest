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
function Theather({ nData, movieName }) {
  const [data, setData] = useState(nData);
  const [data2, setData2] = useState();

  function find3Theaters(theaters) {
    const targetTheaters = ['CGV', '메가박스', '롯데시네마'];
    return theaters.filter(theater => targetTheaters.some(target => theater.place_name.includes(target)));
  }

  useEffect(() => {
    const matchingTheaters = find3Theaters(nData);
    setData(matchingTheaters);

    // axios({
    //   method: 'get',
    //   url: 'http://43.201.51.58:3000/crawler/cgv/5173',
    // }, { withCredentials : true })
    //   .then((Response)=>{
    //     //Response.data에서 movieName이 일치하는 것만 데이터를 가져온다
    //     const filteredData = Response.data.filter(item => item.movieName === movieName);
    //     setData2(filteredData);
    //     console.log(filteredData);
    // }).catch((Error)=>{
    //     console.log(Error);
    // })
    
    // const fetchData = async () => {
    //   try {
    //     const response = await axios.get('http://43.201.51.58:3000/crawler/cgv');
    //     console.log(response.data);
    //   } catch (error) {
    //     console.error('Error fetching data:', error);
    //   }
    // };
    // fetchData();

  }, [nData]); 

  return (
    <>
      {[0, 152, 304, 456, 608].map((top, index) => (
        data[index] && (
          <TheatherInfo
            key={index}
            style={{ left: '0px', top: `${top}px` }}
          >
            <TheatherName>{data[index].place_name}</TheatherName>
            {[23, 189, 355, 521, 687].map((left, timeIndex) => (
              data2 && data2[timeIndex] && ( // Added check for data2 and data2[timeIndex]
                <TimeInfo
                  key={timeIndex}
                  style={{ left: `${left}px`, top: `45px` }}
                >{data2[timeIndex].playTime}
                <br/>{data2[timeIndex].screenName}
                <br/>잔여좌석 {data2[timeIndex].remainingSeats}
                </TimeInfo>
              )
            ))}
          </TheatherInfo>
        )
      ))}
    </>
  );
  
  
}

export default Theather;
// {[0, 152, 304, 456, 608].map((top, index) => (