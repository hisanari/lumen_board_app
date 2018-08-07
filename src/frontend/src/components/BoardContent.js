import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';

const BoardContent = ({ result }) => (
  <CardContent>
    <Typography variant="title" component="h2">{result.id}. {result.title}</Typography>
    <Typography style={{ fontSize: "18px" }}>{result.comment}</Typography>
    <Typography>{result.created_at}</Typography>
  </CardContent>
);

BoardContent.propTypes = {
  result: PropTypes.shape({
    id : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
    created_at: PropTypes.string,
  }),
}

export default BoardContent;