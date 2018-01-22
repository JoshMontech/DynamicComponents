import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent'

class App extends Component {
  state = {
    value: '',
    length: 0
  };

  handleChangeListener = (event) => {
    const val = event.target.value;
    const len = val.length;
    this.updateStateValue(val);
    this.updateLengthValue(len);
  };

  removeCharCmptListener = (index) => {
    let val = this.state.value.split('');
    val.splice(index, 1);
    val = val.join('');
    this.updateStateValue(val);
    this.updateLengthValue(val.length);
  };

  updateStateValue = (val) => {
    this.setState({value: val});
  };

  updateLengthValue = (len) => {
    this.setState({length: len});
  };

  render() {
    let charComponents = null;
    charComponents = (
      <div>
        {this.state.value.split('').map((char, index) => {
          return (
            <CharComponent value={char}
                           click={() => {
                             this.removeCharCmptListener(index);
                           }}
            />
          );
        })}
      </div>
    );

    return (
      <div className="App">
        <input value={this.state.value} onChange={this.handleChangeListener} />
        <p>{this.state.length}</p>
        <ValidationComponent input={this.state.length} />
        {charComponents}
      </div>
    );
  }
}

export default App;
