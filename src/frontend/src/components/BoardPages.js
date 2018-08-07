import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

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

BoardPages.propTypes = {
  results: PropTypes.array.isRequired,

}

// ビューの表示に必要なプロップス
const boardStateToProps = state => ({
  results: state.board.results,
});

const ConnectedAddBoardPages = connect(boardStateToProps, { fetchBoard })(BoardPages);

export default ConnectedAddBoardPages;
