import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Tooltip from '@material-ui/core/Tooltip';

import { deleteBoard } from '../actions/index';

const styles = thema => ({
  deleteButon: {
    padding: thema.spacing.unit,
  },
});

const DeleteBoard = (props) => {
  const { id, classes } = props;
  return (
    <Tooltip title="Delete">
      <IconButton
        variant="fab"
        size="small"
        className={classes.deleteButon}
        onClick={(e) => {
          e.preventDefault();
          props.deleteBoard(id);
        }}
      >
        <DeleteIcon />
      </IconButton>
    </Tooltip>
  );
};

DeleteBoard.propTypes = {
  id: PropTypes.number.isRequired,
  deleteBoard: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

const ConnectedDeleteBoard = connect(null, { deleteBoard })(DeleteBoard);

export default withStyles(styles)(ConnectedDeleteBoard);
