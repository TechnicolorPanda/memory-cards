import React, { Component } from 'react';
import './styles/App.css';
import SelectPictures from './components/SelectPictures';

class App extends Component {
  render() {
  return (
    <div>
      <div className = "nav-bar">
      </div>
      <div className = "play-board">
        <SelectPictures/>
      </div>
    </div>
  );
  }
}

export default App;
