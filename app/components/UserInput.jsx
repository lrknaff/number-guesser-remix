const React = require('react');
import UserMinAndMax from './UserMinAndMax';


class UserInput extends React.Component {
  constructor() {
    super();
    this.state = {
      randomNumber: '',
      guessInput: '',
      guess: '',
      min: 0,
      max: 10,
      userMin: '',
      userMax: ''
    };
  }

  componentDidMount() {
    this.generateRandomNumber(this.state.min, this.state.max);
  }

  generateRandomNumber(min, max) {
    let randomNumber = Math.floor(Math.random() * (max - min) + min);
    this.setState({ randomNumber: randomNumber });
  }

  generateNewRandomNumber(min, max) {
    let userGuess = parseInt(this.state.guessInput);
    let newRandomNumber = Math.floor(Math.random() * (max - min) + min);

    userGuess === this.state.randomNumber ? this.setState({ randomNumber: newRandomNumber}) :
    this.setState({ randomNumber: this.state.randomNumber })
  }

  handleUserInput(e) {
    this.setState( { guessInput: e.target.value } );
  }

  handleMinInput(e) {
    this.setState({ userMin: e.target.value });
  }

  handleMaxInput(e) {
    this.setState({ userMax: e.target.value });
  }

  handleMinMaxClick () {
    this.setState({ min: this.state.userMin, max: this.state.userMax });
    this.generateRandomNumber(this.state.min, this.state.max);
  }

  handleGuessClick() {
    this.setState({ guess: this.state.guessInput, guessInput: '' });
    this.displayMessage();
    this.increaseMax();
    this.decreaseMin();
    this.generateNewRandomNumber(this.state.min, this.state.max);
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
    let min = this.state.min;
    let max = this.state.max;

    userGuess > max ? this.setState({ message: 'Guess a number between ' + min + ' and ' + max }) :
    userGuess < min ? this.setState({ message: 'Guess a number between ' + min + ' and ' + max }) :
    userGuess === this.state.randomNumber ? this.setState({ message: 'Correct!' }) :
    userGuess > this.state.randomNumber ? this.setState({ message: 'Too high. Try again.' }) :
    this.setState({ message: 'Too low. Try again.' })
  }

  increaseMax() {
    let largerMax = this.state.max + 10;
    let userGuess = parseInt(this.state.guessInput);

    userGuess === this.state.randomNumber ? this.setState({ max: largerMax }) :
    this.setState({ max: this.state.max })
  }

  decreaseMin() {
    let smallerMin = this.state.min - 10;
    let userGuess = parseInt(this.state.guessInput);

    userGuess === this.state.randomNumber? this.setState({ min: smallerMin }) :
    this.setState({ min: this.state.min })
  }


  render() {

    return (
      <main className='container'>
        {/* <UserMinAndMax
          userMin={this.state.UserMin}
          userMax={this.state.UserMax}
          handleMinInput={this.handleMinInput.bind(this)}
          handleMaxInput={this.handleMaxInput.bind(this)}
          handleMinMaxClick={this.handleMinMaxClick.bind(this)}
          disabled={this.state.UserMin === '' ? true :
                                                false}
         /> */}
        <div className='right-container'>
          <h3 className='last-guess-text'>
            Your last guess was:<br />
          </h3>

          <h2 className='number-guess'>
            {this.state.guess}
          </h2>

          <h4 className='message-text'>
            {this.state.message}
          </h4>
        </div>

        <div className='left-container'>
         <h3 className='min-max-text'>
           Guess a number between {this.state.min} and {this.state.max}
         </h3>

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
            onClick={this.handleResetClick.bind(this)}
            disabled={this.state.min === 0 ? true : false}>
            Reset
          </button>
        </div>
      </main>
    )
  }

}

module.exports = UserInput
