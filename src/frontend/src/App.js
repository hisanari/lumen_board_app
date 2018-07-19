import React, { Component } from 'react';
import axios from 'axios';

import BoardResult from './components/BoardResult';

const ENDPOINT = "http://localhost:8080/api/v1/all";

class App extends Component {
  // 状態をもたせる
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  componentDidMount(){
    axios
    .get(ENDPOINT)
    .then((result) => {
      console.log(result);
    });
  }

  render() {
    return (
      <div>
        <h1>Board</h1>
        <BoardResult id={1} title={'test'} comment={'advice'} />
      </div>
    );
  }
}

export default App;
