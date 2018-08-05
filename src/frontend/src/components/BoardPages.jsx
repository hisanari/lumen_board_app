import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import BoardResult from './BoardResult';
import AddBoardForm from './AddBoardForm';
import DeleteBoard from './DeleteBoard';

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
  // 状態をもたせる
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      comment: '',
      results: [],
    };
  }

  componentDidMount(){
    this.getBorad();
  }

  setBoardData(result){
    this.setState({results: result.data});
  }

  // 取得
  getBorad(){
    axios
    .get(ENDPOINT + "allBoard")
    .then((result) => {
      this.setBoardData(result);
    });
  }

  // 作成
  handleBoardSubmit = e => {
    e.preventDefault();

    const newComment = {
      title: this.state.title,
      comment: this.state.comment,
    };

    axios.post(ENDPOINT + 'createBoard', {
      title: newComment.title,
      comment: newComment.comment
    }).then((result) => {
      this.setBoardData(result);
    });
  }

  // 削除
  handleBoardDelete = (e, id) => {
    e.preventDefault();
    axios.delete(ENDPOINT + 'deleteBoard/' + id)
    .then((result) => {
      this.setBoardData(result);
    })
  }


  handleTitleChange = e => {
    e.preventDefault();
    this.props.onTitleChange(e.target.value);
  }

  handleCommentChange = e => {
    e.preventDefault();
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <h1>Board</h1>
          <AddBoardForm
            title={this.props.title}
            comment={this.props.comment}
            onTitleChange={e => this.handleTitleChange(e)}
            onCommentChange={e => this.handleCommentChange(e)}
            onSubmit={newBoard => this.handleBoardSubmit(newBoard)}
          />
        {this.state.results.map(
          result => (
            <div key={result.id}>
            <Card className={classes.cardStyle}>
              <BoardResult {...result} />
              <hr style={{ marginBottom: 0 }}/>
                <DeleteBoard
                  onDelete={(e, id) => this.handleBoardDelete(e, id)}
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
  title: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  onTitleChange: PropTypes.func.isRequired,
}

export default withStyles(styles)(BoardPages);
