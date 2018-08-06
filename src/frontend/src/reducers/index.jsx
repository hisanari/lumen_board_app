import { combineReducers } from 'redux';

const title =  (state= 'title', action) => {
  switch (action.type) {
    case 'CHANGE_TITLE':
      return action.title;
    default:
      return state;
  }
};

const comment =  (state= 'comment', action) => {
  switch (action.type) {
    case 'CHANGE_COMMENT':
      return action.comment;
    default:
      return state;
  }
};

const createBoard =  (
  state = {
    boardResults: [],
  }, 
  action,
) => {
  switch (action.type) {
    case 'CREATE_BOARD':
      return {
        results: action.results,
      };
    default:
      return state;
  }
};

export default combineReducers({ title, comment,createBoard });