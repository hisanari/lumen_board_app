import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Tooltip from '@material-ui/core/Tooltip';


const styles = thema => ({
  deleteButon: {
    padding: thema.spacing.unit,
  }
});

const DeleteBoard = props => {
  const { classes } = props;
  return(
    <Tooltip title="Delete">
      <IconButton
        variant="fab"
        size="small"
        className={classes.deleteButon}
        onClick={e => props.onDelete(e, props.id)}>
        <DeleteIcon />
      </IconButton>
    </Tooltip>
  );
}

DeleteBoard.protoType = {
  onDelete: PropTypes.func.isRequired,
  id: PropTypes.number,
}

export default withStyles(styles)(DeleteBoard);