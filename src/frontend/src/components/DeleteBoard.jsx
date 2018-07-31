import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';

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
    return(
      <Button
        variant="contained"
        color="secondary"
        size="small"
        onClick={e => this.handleOnClick(e, this.props.id)}>
        delete
      </Button>
    );
  }
}

DeleteBoard.protoType = {
  onDelete: PropTypes.func.isRequired,
}

export default DeleteBoard;