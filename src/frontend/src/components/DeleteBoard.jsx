import React, {Component} from 'react';
import PropTypes from 'prop-types';

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
      <button onClick={e => this.handleOnClick(e, this.props.id)}>delete</button>
    );
  }
}

DeleteBoard.protoType = {
  onDelete: PropTypes.func.isRequired,
}

export default DeleteBoard;