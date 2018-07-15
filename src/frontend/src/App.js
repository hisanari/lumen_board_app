import React, { Component } from 'react';

import Greeting from './Greeting';

class App extends Component {
  // 状態をもたせる
  constructor(props) {
    super(props);
    this.state = {
      name: 'チャッピー',
    };
  }

  handleNameChange(name){
    this.setState({ name })
  }

  render() {
    return (
      <div> 
        <input
           type="text" 
           value={this.state.name}
           onChange={(e)=> this.handleNameChange(e.target.value)}
        />
        <Greeting name={ this.state.name } />
      </div>
    );
  }
}

export default App;
