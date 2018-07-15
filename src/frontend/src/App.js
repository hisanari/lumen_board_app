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

  handleMouseOver() {
    this.setState({ name: 'Chaa!!!'});
  }

  handleMouseOut(){
    this.setState({ name: 'チャッピー'});
  }

  render() {
    return (
      <div 
        onMouseOver={() => this.handleMouseOver()}
        onMouseOut={() => this.handleMouseOut()}
      >  
        <Greeting name={ this.state.name } />
      </div>
    );
  }
}

export default App;
