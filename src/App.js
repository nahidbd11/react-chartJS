import React, { useState } from 'react';
import './style.css';
import ChartBar from './components/chartjs/ChartBar';
import { useGraph } from './contextApi/GraphContext';

export default function App() {
  const { playerData } = useGraph();
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <ChartBar chartData={playerData} />
    </div>
  );
}
