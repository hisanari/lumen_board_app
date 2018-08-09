import React, { Component } from 'react';
import { connect } from 'react-redux';

import BoardResult from './BoardResult';
import AddBoardForm from '../containers/AddBoardForm';
import { fetchBoard } from '../actions/';

class BoardPages extends Component {

  componentDidMount(){
    this.props.fetchBoard();
  }

  render() {
    return (
      <div>
        <h1>Board</h1>
          <AddBoardForm />
          <BoardResult />
      </div>
    );
  }
}

const ConnectedAddBoardPages = connect(null, { fetchBoard })(BoardPages);

export default ConnectedAddBoardPages;
