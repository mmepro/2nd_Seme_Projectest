import { useState } from "react";
import styled from "styled-components";
import dayjs from "dayjs";
import 'dayjs/locale/ko';
dayjs.locale('ko');

const DateInfo = styled.div`
  position: absolute;
  width: 100px;
  height: 52px;
  background: #2a2f42;
  border: 1px solid #f4f3f3;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  cursor: pointer;
`;

function Date() {
  const [currentDate, setCurrentDate] = useState(dayjs());

  const Date = (index) => {
    return currentDate.add(index, 'day').format("MM.DD");
  };
  const DayOfWeek = (index) => {
    return currentDate.add(index, 'day').format("ddd");
  };

  return (
    <>
      {[19, 126, 233, 340, 447, 554, 661].map((left, index) => (
        <DateInfo
          key={index}
          style={{ left: `${left}px`, top: "15px" }}
        >
          {Date(index)}<br/>
          {index === 0 ? '오늘' : DayOfWeek(index)}
        </DateInfo>
      ))}
    </>
  );
}

export default Date;
