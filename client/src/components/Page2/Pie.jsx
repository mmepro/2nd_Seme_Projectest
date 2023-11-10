// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['S/F', '코미디', '멜로'],
  datasets: [
    {
      label: '관람한 영화 수',
      data: [3, 4, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

export function PieChart() {
  const options = {
    plugins: {
      legend: {
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
  };
  return <Pie data={data} options={options} />;
}
