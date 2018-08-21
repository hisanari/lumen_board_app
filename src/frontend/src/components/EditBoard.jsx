import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Edit from '@material-ui/icons/Edit';
import Tooltip from '@material-ui/core/Tooltip';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';


const styles = theme => ({
  editButon: {
    padding: theme.spacing.unit,
  },
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    top: `${50}%`,
    left: `${50}%`,
    transform: `translate(-${50}%, -${50}%)`,
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
      <div>
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
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={() => {
            this.setState({
              open: false,
            });
          }}
        >
          <div className={classes.paper}>
            <Typography>
              {id}
              :MODAL
            </Typography>
          </div>
        </Modal>
      </div>
    );
  }
}

EditBoard.propTypes = {
  id: PropTypes.number.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EditBoard);
