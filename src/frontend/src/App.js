import React, { Component } from 'react';

import BoardResult from './components/BoardResult';

class App extends Component {
  // 状態をもたせる
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <h1>Board</h1>
        <BoardResult />
      </div>
    );
  }
}

export default App;
