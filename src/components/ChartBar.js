import React from 'react';
import { Chart as ChartJS } from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';

export default ({ chartData }) => {
  return (
    <Bar
      data={chartData}
      options={{
        responsive: true,
      }}
    />
  );
};
