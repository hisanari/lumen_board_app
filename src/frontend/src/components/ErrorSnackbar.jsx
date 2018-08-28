import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import { closeFormErrorSnackbar } from '../actions/index';


const styles = theme => ({
  close: {
    width: theme.spacing.unit * 4,
    height: theme.spacing.unit * 4,
  },
});

const ErrorSnackbar = (props) => {
  const {
    classes,
    open,
    close,
    message,
  } = props;
  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={close}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={
          <span id="message-id">{message}</span>}
        action={[
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            className={classes.close}
            onClick={close}
          >
            <CloseIcon />
          </IconButton>,
        ]}
      />
    </div>
  );
};

ErrorSnackbar.propTypes = {
  open: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  open: state.snackbarState,
  message: state.setErrorMessage,
});

const ConnectedErrorSnackbar = connect(
  mapStateToProps,
  { close: closeFormErrorSnackbar },
)(ErrorSnackbar);


export default withStyles(styles)(ConnectedErrorSnackbar);
