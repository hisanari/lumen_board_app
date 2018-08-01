import React, {Component} from 'react';
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

class DeleteBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleOnClick = (e, id) => {
    e.preventDefault();
    this.props.onDelete(id);
  }

  render(){
    const { classes } = this.props;
    return(
      <Tooltip title="Delete">
        <IconButton
          variant="fab"
          size="small"
          className={classes.deleteButon}
          onClick={e => this.handleOnClick(e, this.props.id)}>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
    );
  }
}

DeleteBoard.protoType = {
  onDelete: PropTypes.func.isRequired,
}

export default withStyles(styles)(DeleteBoard);