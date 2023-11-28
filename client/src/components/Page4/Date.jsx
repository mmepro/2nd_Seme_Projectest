import { useState } from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
dayjs.locale('ko');

const DateInfo = styled.button`
  position: absolute;
  width: 100px;
  height: 52px;
  background: #2a2f42;
  border: 1px solid #f4f3f3;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  border-radius: 5px;
`;

function Date({ onDateSelect }) {
  const [currentDate, setCurrentDate] = useState(dayjs());

  const formatDate = (index) => {
    return currentDate.add(index, 'day').format("MM.DD");
  };

  const formatDayOfWeek = (index) => {
    return currentDate.add(index, 'day').format("ddd");
  };

  const formatRequestDate = (index) => {
    return currentDate.add(index, 'day').format("YYYY-MM-DD");
  };

  const handleClick = (date) => {
    if (onDateSelect) {
      onDateSelect(date);
    }
  };

  return (
    <>
      {[19, 126, 233, 340, 447, 554, 661].map((left, index) => (
        <DateInfo
          key={index}
          style={{ left: `${left}px`, top: "15px" }}
          onClick={() => handleClick(formatRequestDate(index))}
        >
          {formatDate(index)}<br/>
          {index === 0 ? '오늘' : formatDayOfWeek(index)}
        </DateInfo>
      ))}
    </>
  );
}

export default Date;
