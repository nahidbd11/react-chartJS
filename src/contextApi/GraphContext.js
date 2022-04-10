import React, { createContext, useContext, useState } from 'react';
import { data } from '../data';

const Graphcontext = createContext();

export const useGraph = () => {
  return useContext(Graphcontext);
};

export const GraphProvider = ({ children }) => {
  const [playerData, setData] = useState({
    labels: data.map((d) => d.year),
    datasets: [
      {
        label: 'goals',
        data: data.map((d) => d.goal),
        backgroundColor: 'purple',
      },
    ],
  });
  return (
    <Graphcontext.Provider value={{ playerData }}>
      {children}
    </Graphcontext.Provider>
  );
};
