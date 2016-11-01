const React = require('react');
import UserMinAndMax from './UserMinAndMax';


class UserInput extends React.Component {
  constructor() {
    super();
    this.state = {
      randomNumber: 0,
      guessInput: '',
      guess: '',
      min: 0,
      max: 10,
      userMin: '',
      userMax: ''
    };
  }

  generateRandomNumber(min = 0, max = 10) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  componentDidMount() {
    this.setState({ randomNumber: this.generateRandomNumber() });
  }

  handleUserInput(e) {
    this.setState( { guessInput: e.target.value } );
  }

  handleRangeInput(e) {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleRangeClick () {
    this.setState({
      min: this.state.userMin,
      max: this.state.userMax
    });
    this.generateRandomNumber(this.state.min, this.state.max);
  }

  handleGuessClick() {
    this.setState({
      guess: this.state.guessInput,
      guessInput: ''
    });
    this.displayMessage();
  }

  handleClearClick() {
    this.setState({ guessInput: '' });
  }

  handleResetClick() {
    this.setState({
      guessInput: '',
      guess: '',
      randomNumber: this.generateRandomNumber(),
      message: '',
      min: 0,
      max: 10
    });
  }

  displayMessage() {
    let userGuess = parseInt(this.state.guessInput);
    let min = this.state.min;
    let max = this.state.max;

    if ( userGuess > max || userGuess < min) {
      this.setState({
        message: 'Guess a number between ' + min + ' and ' + max
      });
    }
    if ( userGuess === this.state.randomNumber ) {
      this.setState({
        message: 'Correct!',
        min: min -= 10,
        max: max += 10,
        randomNumber: this.generateRandomNumber(min, max)
      });
    } else if ( userGuess > this.state.randomNumber ) {
      this.setState ({
        message: 'Too high. Try again.'
      });
    } else {
      this.setState ({
        message: 'Too low. Try again.'
      });
    }
  }

  disableButton() {
    if ( this.state.userMin === '' || this.state.userMax === '' ) {
      return true
    } else {
      return false
    }
  }

  render() {

    return (
      <main className='container'>

        <div className='right-container'>
          <UserMinAndMax
            userMin={this.state.UserMin}
            userMax={this.state.UserMax}
            handleRangeInput={this.handleRangeInput.bind(this)}
            handleRangeClick={this.handleRangeClick.bind(this)}
            disabled={this.disableButton()}
           />

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
