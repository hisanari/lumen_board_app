import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'; 

import './index.css';
// import App from './components/BoardPages';
import reducer from './reducers/';
import registerServiceWorker from './registerServiceWorker';
import BoardPages from './components/BoardPages';

ReactDOM.render(
  <Provider store={createStore(reducer)}>
    <BoardPages 
      comment=""
    />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
