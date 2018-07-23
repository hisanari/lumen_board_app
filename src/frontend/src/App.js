import React, { Component } from 'react';
import axios from 'axios';

import BoardResult from './components/BoardResult';

const ENDPOINT = "http://localhost:8080/api/v1/all";

class App extends Component {
  // 状態をもたせる
  constructor(props) {
    super(props);
    this.state = {
      results: [],
    };
  }
  
  componentDidMount(){
    axios
    .get(ENDPOINT)
    .then((result) => {
      this.setState({results: result.data});
      console.log(this.state.results);
    });
  }

  render() {
    return (
      <div>
        <h1>Board</h1>
        <BoardResult results={this.state.results} />
      </div>
    );
  }
}

export default App;
