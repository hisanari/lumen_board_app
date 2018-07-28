import React from 'react';
import PropTypes from 'prop-types';

const BoardResult = ({id, title, comment, created_at}) => (
  <ul>
    <li>{id}</li>
    <li>{title}</li>
    <li>{comment}</li>
    <li>{created_at}</li>
  </ul>
);

BoardResult.propTypes = {
  id : PropTypes.number,
  title : PropTypes.string,
  comment: PropTypes.string,
  created_at: PropTypes.string,
}

export default BoardResult;