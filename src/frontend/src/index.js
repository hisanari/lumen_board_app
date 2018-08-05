import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import './index.css';
// import App from './components/BoardPages';
import reducer from './reducers/';
import registerServiceWorker from './registerServiceWorker';
import BoardPages from './components/BoardPages';

const store = createStore(reducer);

const render = () => {
  const state = store.getState();
  console.log(state);
  
  ReactDOM.render(
    <BoardPages 
      title={state.title}
      comment="test"
      onTitleChange={title => store.dispatch({type: 'CHANGE_TITLE', title })}
    />,
  document.getElementById('root')
  );
  registerServiceWorker();
}

render();
store.subscribe(render);