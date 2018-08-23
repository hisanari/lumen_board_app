import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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

import { setEditComment , setEditTitle, editBoard } from '../actions';

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

  handleOpen = () => {
    this.setState({
      open: true,
    });
  }

  handleClose = () => {
    this.setState({
      open: false,
    });
  }

  render() {
    const {
      id, editTitle, editComment, classes,
    } = this.props;
    return (
      <div className={classes.divStyle}>
        <Tooltip title="Edit">
          <IconButton
            variant="fab"
            size="small"
            className={classes.editButon}
            onClick={this.handleOpen}
          >
            <Edit />
          </IconButton>
        </Tooltip>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="simple-modal-title"
        >
          <DialogTitle>
          Edit:
            {id}
          </DialogTitle>
          <DialogContent>
            <TextField
              fullWidth
              id="title"
              label="Title"
              type="text"
              value={editTitle}
              margin="dense"
              onChange={(e) => {
                e.preventDefault();
                this.props.setEditTitle(e.target.value);
              }}
            />
            <TextField
              fullWidth
              id="comment"
              label="Comment"
              type="text"
              value={editComment}
              margin="dense"
              onChange={(e) => {
                e.preventDefault();
                this.props.setEditComment(e.target.value);
              }}
            />
          </DialogContent>
          <DialogActions>
            <Button
              color="primary"
              onClick={() => {
                this.props.setEditTitle("");
                this.props.setEditComment("");
                this.handleClose();
              }}
            >
            Cancel
            </Button>
            <Button
              color="primary"
              onClick={() => {
                this.props.editBoard(id);
                this.handleClose();
              }}
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
  editTitle: PropTypes.string.isRequired,
  editComment: PropTypes.string.isRequired,
  setEditTitle: PropTypes.func.isRequired,
  setEditComment: PropTypes.func.isRequired,
  editBoard: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

// ビューの表示に必要なプロップス
const mapStateToProps = state => ({
  editTitle: state.editTitle,
  editComment: state.editComment,
});

const ConnectedEditBoard = connect(
  mapStateToProps,
  { setEditTitle, setEditComment, editBoard },
)(EditBoard);

export default withStyles(styles)(ConnectedEditBoard);
