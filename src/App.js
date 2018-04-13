import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

/*---------- GLOBAL ----------*/

const QUOTES = [
  `"When you play a game of thrones, you win or you die." ― Cersei Lannister`,
  `"Crowns do queer things to the heads beneath them." ― Tyrion Lannister`,
  `"My skin has turned to porcelain, to ivory, to steel." ― Sansa Stark`,
  `"Stick em with the pointy end." ― Arya Stark`,
  `"Never forget what you are, for surely the world will not. Make it your strength. Then it can never be your weakness. Armour yourself in it, and it will never be used to hurt you." ― Tyrion Lannister`,
  `"When the snows fall and the white winds blow, the lone wolf dies but the pack survives." ― Eddard Stark`,
  `"A reader lives a thousand lives before he dies. The man who never reads lives only one." ― Jojen Reed`,
  `"Summer will end soon enough, and childhood as well." ― Eddard Stark`,
  `"What is dead may never die, but rises again, harder and stronger." ― Drowned God Priest`,
  `"I have a tender spot in my heart for cripples and bastards and broken things." ― Tyrion Lannister`,
];

let randomNumber = 0;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: QUOTES[randomNumber],
    };
  }

  changeQuote = () => {
    randomNumber = Math.floor(Math.random() * QUOTES.length);
    this.setState({ quote: QUOTES[randomNumber] });
    console.log(this.state.quote);
  };

  tweetQuote() {
    window.open(
      'https://twitter.com/intent/tweet?text=' + QUOTES[randomNumber]
    );
  }

  render() {
    return (
      <div className="App">
        {/* Ancestor component, 100vh */}
        <header className="App-header">
          <h1>Game of Thrones Quote Machine</h1>
        </header>
        <QuoteBox quote={this.state.quote} />
        <ButtonBox
          changeQuote={this.changeQuote}
          tweetQuote={this.tweetQuote}
        />
        <Footer />
      </div>
    );
  }
}

const QuoteBox = props => {
  return <main className="Quote-box">{props.quote}</main>;
};

const ButtonBox = props => {
  return (
    <div className="Button-box">
      <button onClick={props.changeQuote}>Change quote</button>
      <button onClick={props.tweetQuote}>Tweet quote</button>
    </div>
  );
};

const Footer = props => {
  return (
    <footer>
      Coded by <a href="https://github.com/eunipa/">eunicode </a>
    </footer>
  );
};

export default App;
