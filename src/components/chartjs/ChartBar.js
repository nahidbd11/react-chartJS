import React from 'react';
import { Chart as ChartJS } from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';

export default ({ chartData }) => {
  return (
    <div className="chart">
         <Bar
      data={chartData}
      options={{
        responsive: true,
      }}
    />
    </div>
 
  );
};
