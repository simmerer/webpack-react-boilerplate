import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const renderableStream = () => {
  return 'heyyyyyyyyyyyyyyyyyyyyy';
};

ReactDOM.render(
  <App stream={renderableStream} />,
  document.getElementById('app'),
);
