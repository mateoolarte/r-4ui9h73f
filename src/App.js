import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      valinput: ""
    }
  }

  render() {
    return (
      <div>
        <h1>Un repetidor</h1>
        <input type="text" placeholder="Empieza a escribir algo" onChange={this.repeatVal.bind(this)} />
        <p className="repeater">{this.state.valinput}</p>
      </div>
    );
  }

  repeatVal(e) {
    this.setState({
      valinput: e.target.value
    })
  }
}

export default App;
