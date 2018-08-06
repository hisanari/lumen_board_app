import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'; 

import './index.css';
// import App from './components/BoardPages';
import reducer from './reducers/';
import registerServiceWorker from './registerServiceWorker';
import BoardPages from './components/BoardPages';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <BoardPages />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
