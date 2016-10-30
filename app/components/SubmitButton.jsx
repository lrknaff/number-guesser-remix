class ActionButton extends React.Component {
  render () {
    return (
      <button className="GuessButton" onClick={this.props.handleClick}>
        <span>{this.props.text}</span>
      </button>
    )
  }
}

module.exports = ActionButton
