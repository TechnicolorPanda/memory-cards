import React, { Component } from 'react';
import './styles/App.css';
import SelectPictures from './components/SelectPictures';

class App extends Component {
  render() {
    return (
      <div className = "play-board">
        <SelectPictures/>
      </div>
    );
  }
}

export default App;
