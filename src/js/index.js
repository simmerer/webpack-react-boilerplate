import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../scss/styles';

const renderableStream = () => {
  return 'heyyyyyyyyyyyyyyyyyyyyy';
};

ReactDOM.render(
  <App stream={renderableStream} />,
  document.getElementById('app'),
);
