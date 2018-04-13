import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App"> {/* Ancestor component, 100vh */}
        <header className="App-header">
        <h1>Game of Thrones Quote Machine</h1>
        </header>

        <QuoteBox />

        <ButtonBox />

        <Footer />
      </div>
    );
  }
}

const QuoteBox = props => {
  return (
    <main className="Quote-box">
      "When you play the game of thrones, you win or you die." ― Cersei
      Lannister
    </main>
  );
}

const ButtonBox = props => {
  return (
    <div className="Button-box">
    <button onClick="changeQuote">Change quote</button>
    <button onClick="tweetQuote">Tweet quote</button>
  </div>
  );
}

const Footer = props => {
  return (
    <footer>
    Coded by <a href='https://github.com/eunipa/'>eunicode </a>
    </footer>
  );
}

export default App;
