import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import BoardResult from './BoardResult';
import AddBoardForm from '../containers/AddBoardForm';
import DeleteBoard from './DeleteBoard';
import { fetchBoard } from '../actions/';

const ENDPOINT = "http://localhost:8080/api/v1/";

const styles = theme => ({
  cardStyle: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  }

});

class BoardPages extends Component {
  componentDidMount(){
    // this.props.fetchBoard();
  }

  // 削除
  handleBoardDelete = (e, id) => {
    e.preventDefault();
    axios.delete(ENDPOINT + 'deleteBoard/' + id)
    .then((result) => {
      this.props.fetchBoard();
    })
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <h1>Board</h1>
          <AddBoardForm />
        {this.props.results.map(
          result => (
            <div key={result.id}>
            <Card className={classes.cardStyle}>
              <BoardResult {...result} />
              <hr style={{ marginBottom: 0 }}/>
                <DeleteBoard
                  id={result.id}
                />
            </Card>
            </div>
          ))}
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

export default withStyles(styles)(ConnectedAddBoardPages);
