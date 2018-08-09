import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Tooltip from '@material-ui/core/Tooltip';

import { deleteBoard } from '../actions/';

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
        onClick={(e) => {
          e.preventDefault();
          props.deleteBoard(props.id);
        }}>
        <DeleteIcon />
      </IconButton>
    </Tooltip>
  );
}

DeleteBoard.protoType = {
  id: PropTypes.number.isRequired,
}

const ConnectedDeleteBoard = connect(null, { deleteBoard })(DeleteBoard);

export default withStyles(styles)(ConnectedDeleteBoard);