import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';

const BoardResult = ({id, title, comment, created_at}) => (
  <div>
    <CardContent>
      <Typography variant="title" component="h2">{id}. {title}</Typography>
      <Typography style={{ fontSize: "18px" }}>{comment}</Typography>
      <Typography>{created_at}</Typography>
    </CardContent>
  </div>
);

BoardResult.propTypes = {
  id : PropTypes.number,
  title : PropTypes.string,
  comment: PropTypes.string,
  created_at: PropTypes.string,
}

export default BoardResult;