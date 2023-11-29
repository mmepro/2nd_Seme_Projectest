//Pie.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['SF', '코미디', '드라마'],
  datasets: [
    {
      label: '관람한 영화 수',
      data: [3, 2, 3], // 코미디를 2로, 액션을 4로 변경
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        // 'rgba(75, 192, 192, 0.2)', // 초록색으로 변경 (액션)
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        // 'rgba(75, 192, 192, 1)', // 초록색으로 변경 (액션)
      ],
      borderWidth: 1,
    },
  ],
};


// // 안내 문구 스타일
// const GuideText = styled.div`
//   font-size: 18px;
//   color: #f4f3f3;
//   padding: 5px;
//   border-radius: 10px;
//   box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
//   font-family: 'Noto Sans KR', sans-serif;
//   border: 1px solid #535D7E;
// `;
export function PieChart({selectedGenre, responseData, setSelectedGenre}) { // onGenreSelect 추가} {
  console.log('onGenreSelect prop in PieChart:', setSelectedGenre);
  const [selectedInfo, setSelectedInfo] = useState(''); // 클릭된 섹션 정보를 저장할 상태
  const options = {
    plugins: {
      legend: {
        position: 'bottom', // 범례 위치를 하단으로 설정  
        labels: {
          color: 'white',
          font: {
            family: 'GmarketSansTTFLight',
          },
        },
      },
      tooltip: {
        color: 'white',
        bodyFont: {
          family: 'GmarketSansTTFLight',
        },
      },
    },
    onClick: (event, elements) => {
      if (!elements.length) return; // 클릭된 섹션이 없으면 리턴

      const clickedElementIndex = elements[0].index; // 클릭된 섹션의 인덱스
      const label = data.labels[clickedElementIndex]; // 클릭된 섹션의 라벨 (장르)
      console.log('Label:', label);
      setSelectedGenre(label); // 상위 컴포넌트의 함수 호출
    },
  };
  return (
    <>
      {/* <GuideText>추천받고 싶은 장르를 차트에서 클릭해주세요</GuideText> */}
      <Pie data={data} options={options} />
      {selectedInfo && (
        <div style={{ 
          color: 'white', 
          fontSize: '18px', // 폰트 크기 조정
          textAlign: 'center', // 텍스트 중앙 정렬
          fontFamily: 'Noto Sans KR, sans-serif',
        }}>
          {selectedInfo}
        </div>
      )}
    </>
  );
}
