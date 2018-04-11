import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>
          Game of Thrones Quote Machine
        </h1>
        
        <div className="Quote-box">
         <div className="Quote-display">
         Click button to generate a random Game of Thrones quote.
        </div>
        </div>

        <div className="Action-box">
        <button onClick="newQuote">
          Change quote
          </button>
          <button onClick="tweetQuote">
            Tweet quote
            </button>           
        </div>

        </div>
    );
  }
}

export default App;
