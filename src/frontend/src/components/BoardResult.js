import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';


const BoardResult = ({id, title, comment, created_at}) => (
  <div>
  <Typography variant="title" component="h2">{id}. {title}</Typography>
  <Typography>{comment}</Typography>
  <Typography>{created_at}</Typography>
  </div>
);

BoardResult.propTypes = {
  id : PropTypes.number,
  title : PropTypes.string,
  comment: PropTypes.string,
  created_at: PropTypes.string,
}

export default BoardResult;