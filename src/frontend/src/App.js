import React, { Component } from 'react';
import axios from 'axios';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import BoardResult from './components/BoardResult';
import AddBoardForm from './components/AddBoardForm';
import DeleteBoard from './components/DeleteBoard';

const ENDPOINT = "http://localhost:8080/api/v1/";

const styles = theme => ({
  cardStyle: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  }

});

class App extends Component {
  // 状態をもたせる
  constructor(props) {
    super(props);
    this.state = {
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
  handleBoardSubmit = newBoard => {
    axios.post(ENDPOINT + 'createBoard', {
      title: newBoard.title,
      comment: newBoard.comment
    }).then((result) => {
      this.setBoardData(result);
    });
  }

  // 削除
  handleBoardDelete = id => {
    axios.delete(ENDPOINT + 'deleteBoard/' + id)
    .then((result) => {
      this.setBoardData(result);
    })
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <h1>Board</h1>
          <AddBoardForm
            onSubmit={newBoard => this.handleBoardSubmit(newBoard)}
          />
        {this.state.results.map(
          result => (
            <div key={result.id}>
            <Card className={classes.cardStyle}>
              <CardContent>
                <BoardResult {...result} />
              </CardContent>
              <hr style={{ marginBottom: 0 }}/>
              <CardActions>
                <DeleteBoard
                  onDelete={id => this.handleBoardDelete(id)}
                 id={result.id}
                />
              </CardActions>
            </Card>
            </div>
          ))}
      </div>
    );
  }
}

export default withStyles(styles)(App);
