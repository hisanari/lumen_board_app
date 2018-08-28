import { combineReducers } from 'redux';

const title = (state = '', action) => {
  switch (action.type) {
    case 'CHANGE_TITLE':
      return action.title;
    default:
      return state;
  }
};

const comment = (state = '', action) => {
  switch (action.type) {
    case 'CHANGE_COMMENT':
      return action.comment;
    default:
      return state;
  }
};

const editTitle = (state = '', action) => {
  switch (action.type) {
    case 'EDIT_TITLE':
      return action.editTitle;
    default:
      return state;
  }
};

const editComment = (state = '', action) => {
  switch (action.type) {
    case 'EDIT_COMMENT':
      return action.editComment;
    default:
      return state;
  }
};


const boards = (
  state = {
    results: [],
  },
  action,
) => {
  switch (action.type) {
    case 'FETCH_BOARD':
    console.log(action);
      return {
        results: action.result.data.boardResults.reverse(),
      };
    default:
      return state;
  }
};

const snackbarState = (state = false, action) => {
  switch (action.type) {
    case 'OPEN_SNACKBAR':
      return true;
    default:
      return state;
  }
};

export default combineReducers({
  title, comment, editTitle, editComment, boards, snackbarState,
});
