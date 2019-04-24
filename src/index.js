
import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import Routes from './routes';
import registerServiceWorker from './containers/utils/registerServiceWorker.js';

ReactDOM.render(
  <Routes history={browserHistory}/>,
  document.getElementById('root')
);
// registerServiceWorker();
// 'root'