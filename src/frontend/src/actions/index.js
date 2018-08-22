import axios from 'axios';

const ENDPOINT = 'http://localhost:8080/api/v1/';


export const setTitle = title => dispatch => dispatch({ type: 'CHANGE_TITLE', title });
export const setComment = comment => dispatch => dispatch({ type: 'CHANGE_COMMENT', comment });

export const setEditTitle = editTitle => dispatch => dispatch({ type: 'EDIT_TITLE', editTitle });
export const setEditComment = editComment => dispatch => dispatch({ type: 'EDIT_COMMENT', editComment });

export const toggleDialog = toggleOpen => dispatch => dispatch({ type: 'TOGGLE_DIALOG', toggleOpen });
export const closeDialog = toggleOpen => dispatch => dispatch({ type: 'TOGGLE_CLOSE', toggleOpen });


export const fetchBoard = () => (dispatch) => {
  axios
    .get(`${ENDPOINT}allBoard`)
    .then((result) => {
      dispatch({ type: 'FETCH_BOARD', result });
    });
};

export const createBoard = () => (dispatch, getState) => {
  axios.post(`${ENDPOINT}createBoard`, {
    title: getState().title,
    comment: getState().comment,
  }).then((result) => {
    dispatch({ type: 'FETCH_BOARD', result });
    dispatch({ type: 'CLEAR_TITLE' });
    dispatch({ type: 'CLEAR_COMMENT' });
  });
};

export const deleteBoard = id => (dispatch) => {
  axios.delete(`${ENDPOINT}deleteBoard/${id}`)
    .then((result) => {
      dispatch({ type: 'FETCH_BOARD', result });
    });
};
