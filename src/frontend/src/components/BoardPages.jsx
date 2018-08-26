import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import MenuComponent from './MenuComponent';
import BoardResult from './BoardResult';
import AddBoardForm from '../containers/AddBoardForm';
import { fetchAllBoards } from '../actions/index';

class BoardPages extends Component {
  componentDidMount() {
    this.props.fetchAllBoards();
  }

  render() {
    return (
      <div>
        <h1>
        Board
        </h1>
        <MenuComponent />
        <AddBoardForm />
        <BoardResult />
      </div>
    );
  }
}

BoardPages.propTypes = {
  fetchAllBoards: PropTypes.func.isRequired,
};

const ConnectedAddBoardPages = connect(null, { fetchAllBoards })(BoardPages);

export default ConnectedAddBoardPages;
