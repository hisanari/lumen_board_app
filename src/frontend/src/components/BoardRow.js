import React from 'react';
// import PropTypes from 'prop-types';


const BoardRow = ({result}) => (
  <div>
    <li>{result.id}</li>
    <li>{result.title}</li>
    <li>{result.comment}</li>
    <hr />
  </div>
);

export default BoardRow;