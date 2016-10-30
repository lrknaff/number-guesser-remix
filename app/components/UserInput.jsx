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

  generateRandomNumber() {

  }

  handleUserInput(e) {
    this.setState( { guessInput: e.target.value } );
  }

  handleGuessClick() {
    this.setState({ guess: this.state.guessInput });
  }

  handleClearClick() {
    this.setState({ guessInput: '' });
  }

  handleResetClick() {
    this.setState({ guessInput: '', guess: '', randomNumber: '' })
  }

  compareGuess() {

  }

  displayMessage() {

  }

  render() {
    return (
      <div className='guess-input-container'>
        <h3>
          Youre last guess was:<br />
          {this.state.guess}
        </h3>

        <input
          type='number'
          className='guess-input-field'
          value={this.state.guessInput}
          onChange={this.handleUserInput.bind(this)}/>

        <button
          className="GuessButton"
          onClick={this.handleGuessClick.bind(this)}>
          Guess
        </button>

        <button
          className="ClearButton"
          onClick={this.handleClearClick.bind(this)}>
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
