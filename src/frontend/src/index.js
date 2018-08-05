import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import './index.css';
// import App from './components/BoardPages';
import reducer from './reducers/';
import registerServiceWorker from './registerServiceWorker';
import BoardPages from './containers/BoardPages';

ReactDOM.render(
  <BoardPages 
    comment=""
    store={createStore(reducer)}
  />,
  document.getElementById('root')
);
registerServiceWorker();
