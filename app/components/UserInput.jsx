const React = require('react');


class UserInput extends React.Component {
  constructor() {
    super();
    this.state = {
      randomNumber: '',
      guessInput: '',
      guess: '',
      min: 0,
      max: 10,
    };
  }

  componentDidMount() {
    this.generateRandomNumber(this.state.min, this.state.max);
  }

  generateRandomNumber(min, max) {
    let randomNumber = Math.floor(Math.random() * (max - min) + min);
    this.setState({ randomNumber: randomNumber });
  }

  handleUserInput(e) {
    this.setState( { guessInput: e.target.value } );
  }

  handleGuessClick() {
    this.setState({ guess: this.state.guessInput });
    this.displayMessage();
    this.increaseMax();
    this.decreaseMin();
  }

  handleClearClick() {
    this.setState({ guessInput: '' });
  }

  handleResetClick() {
    let randomNumber = Math.floor(Math.random() * (10 - 0) + 0);
    this.setState({ guessInput: '', guess: '', randomNumber: randomNumber, message: '', min: 0, max: 10 });
  }

  displayMessage() {
    let userGuess = parseInt(this.state.guessInput);

    userGuess === this.state.randomNumber ? this.setState({ message: 'Correct!' }) :
    userGuess > this.state.randomNumber ? this.setState({ message: 'Too high. Try again.'}) :
    this.setState({ message: 'Too low. Try again.' })
  }

  increaseMax() {
    let largerMax = this.state.max + 10;
    let userGuess = parseInt(this.state.guessInput);

    userGuess === this.state.randomNumber? this.setState({ max: largerMax}) :
    this.setState({ max: this.state.max })
  }

  decreaseMin() {
    let smallerMin = this.state.min - 10;
    let userGuess = parseInt(this.state.guessInput);

    userGuess === this.state.randomNumber? this.setState({ min: smallerMin}) :
    this.setState({ min: this.state.min })
  }


  render() {
    return (
      <div className='guess-input-container'>
        <h3>
          Youre last guess was:<br />
          {this.state.guess}
        </h3>

        <h4>
          {this.state.message}
        </h4>

        <input
          type='number'
          className='guess-input-field'
          value={this.state.guessInput}
          onChange={this.handleUserInput.bind(this)}
          placeholder="You're best guess" />

        <button
          className="GuessButton"
          onClick={this.handleGuessClick.bind(this)}
          disabled={this.state.guessInput === '' ? true : false}>
          Guess
        </button>

        <button
          className="ClearButton"
          onClick={this.handleClearClick.bind(this)}
          disabled={this.state.guessInput === '' ? true : false}>
          Clear
        </button>

        <button
          className="ResetButton"
          onClick={this.handleResetClick.bind(this)}>
          Reset
        </button>
      </div>
    )
  }

}

module.exports = UserInput
