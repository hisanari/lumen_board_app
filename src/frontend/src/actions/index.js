import axios from 'axios';

const ENDPOINT = "http://localhost:8080/api/v1/";


export const setTitle = title => dispatch => dispatch({ type: 'CHANGE_TITLE', title }); 

export const setComment = comment => dispatch => dispatch({ type: 'CHANGE_COMMENT', comment }); 

export const createBoard = () => (dispatch, getState) => {
  axios.post(ENDPOINT + 'createBoard', {
    title: getState().title,
    comment: getState().comment,
  }).then((result) => {
    dispatch({ type: 'CREATE_BOARD', result});
  });
}