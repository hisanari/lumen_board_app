import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'; 
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import './index.css';
// import App from './components/BoardPages';
import reducer from './reducers/';
import registerServiceWorker from './registerServiceWorker';
import BoardPages from './components/BoardPages';

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <BoardPages />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
