import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = thema => ({
  deleteButon: {
    margin: thema.spacing.unit,
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
      <Button
        variant="contained"
        color="secondary"
        size="small"
        className={classes.deleteButon}
        onClick={e => this.handleOnClick(e, this.props.id)}>
        delete
      </Button>
    );
  }
}

DeleteBoard.protoType = {
  onDelete: PropTypes.func.isRequired,
}

export default withStyles(styles)(DeleteBoard);