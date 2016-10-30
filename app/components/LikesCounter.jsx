const React = require('react');
const ReactDOM = require('react-dom');
// const ActionButton = require('./ActionButton');

class LikesCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: props.initialCount};
  }

  addToLikesCount (num) {
    d
    this.setState( {count: this.state.count + num } );
  }

  render () {
    return (
      <div className="LikesCounter">
        <h3>Likes: {this.state.count}</h3>
      </div>
    )
  }
}

module.exports = LikesCounter
