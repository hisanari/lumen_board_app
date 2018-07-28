import React, { Component } from 'react';
import axios from 'axios';

import BoardResult from './components/BoardResult';
import AddBoardForm from './components/AddBoardForm';

const ENDPOINT = "http://localhost:8080/api/v1/";

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

  getBorad(){
    axios
    .get(ENDPOINT + "allBoard")
    .then((result) => {
      this.setBoardData(result);
    });
  }

  handleBoardSubmit = newBoard => {
    axios.post(ENDPOINT + 'createBoard', {
      title: newBoard.title,
      comment: newBoard.comment
    }).then((result) => {
      this.setBoardData(result);
    });
  }

  render() {
    return (
      <div>
        <h1>Board</h1>
        <AddBoardForm onSubmit={newBoard => this.handleBoardSubmit(newBoard)}/>
        {this.state.results.map(
          result => (
            <BoardResult key={result.id} {...result} />
          ))}
      </div>
    );
  }
}

export default App;
