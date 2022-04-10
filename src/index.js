import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { GraphProvider } from './contextApi/GraphContext';

ReactDOM.render(
  <GraphProvider>
    <App />
  </GraphProvider>,
  document.getElementById('root')
);
