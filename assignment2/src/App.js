import React, { Component } from 'react';
import './App.css';

import CharComponent from './CharComponent/CharComponent';
import ValidationComponent from './ValidationComponent/ValidationComponent';

class App extends Component {
  state = {
    userInputValue: '',
  }


  changeValueHandler = (event) => {
    console.log(event)
    this.setState({userInputValue: event.target.value});
  }

  clickToDeleteHandler = (index) => {
    const modifyText = this.state.userInputValue.split('');
    modifyText.splice(index, 1);
    const newText = modifyText.join('');
    this.setState({userInputValue: newText});
  }

  render() {
    const chars = this.state.userInputValue.split('').map((c,index)=>{
      return <CharComponent character={c} key={index} clicked={() => this.clickToDeleteHandler(index)}/>
    });

    return (
      <div className="App">
        <input onChange={(event)=>this.changeValueHandler(event)} type='text' value={this.state.userInputValue} />
        <p>{this.state.userInputValue}</p>
        <ValidationComponent inputLength={this.state.userInputValue.length}/>
        {chars}
      </div>
    );
  }
}

export default App;
