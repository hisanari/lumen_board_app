export default (state= { title: 'Hello!!' }, action) => {
  console.log('action', action);
  switch (action.type) {
    case 'CHANGE_TITLE':
      return Object.assign({}, state, { title: action.title });
    default:
      return state;
  }
};