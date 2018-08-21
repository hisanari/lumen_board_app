import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Edit from '@material-ui/icons/Edit';
import Tooltip from '@material-ui/core/Tooltip';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  editButon: {
    padding: theme.spacing.unit,
  },
  divStyle: {
    display: 'inline',
  },
});

class EditBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  render() {
    const { id, classes } = this.props;
    return (
      <div className={classes.divStyle}>
        <Tooltip title="Edit">
          <IconButton
            variant="fab"
            size="small"
            className={classes.editButon}
            onClick={() => {
              this.setState({
                open: true,
              });
            }}
          >
            <Edit />
          </IconButton>
        </Tooltip>
        <Dialog
          open={this.state.open}
          onClose={() => {
            this.setState({
              open: false,
            });
          }}
          aria-labelledby="simple-modal-title"
        >
          <DialogTitle>
          Edit:
            {id}
          </DialogTitle>
          <DialogContent>
            <TextField
              margin="dense"
              id="title"
              label="Title"
              type="text"
              fullWidth
            />
            <TextField
              margin="dense"
              id="comment"
              label="Comment"
              type="text"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                this.setState({ open: false });
              }}
              color="primary"
            >
                Cancel
            </Button>
            <Button
              onClick={() => {
                this.setState({ open: false });
              }}
              color="primary"
            >
                OK!
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

EditBoard.propTypes = {
  id: PropTypes.number.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EditBoard);
