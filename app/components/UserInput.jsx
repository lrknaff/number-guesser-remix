const React = require('react');


class UserInput extends React.Component {
  constructor() {
    super();
    this.state = {
      randomNumber: '',
      guessInput: '',
      guess: ''
    };
  }

  componentDidMount() {
    this.generateRandomNumber(0, 10);
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
  }

  handleClearClick() {
    this.setState({ guessInput: '' });
  }

  handleResetClick() {
    this.setState({ guessInput: '', guess: '', randomNumber: '' })
  }


  displayMessage() {
    let userGuess = parseInt(this.state.guessInput);

    userGuess === this.state.randomNumber ? this.setState({ message: 'Correct!' }) :
    userGuess > this.state.randomNumber ? this.setState({ message: 'Too high. Try again!'}) :
    this.setState({ message: 'Too low. Try again!' })
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
          onChange={this.handleUserInput.bind(this)}/>

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
