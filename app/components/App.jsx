const React = require('react')
const ReactDOM = require('react-dom')
const LikesCounter = require('./LikesCounter')

class App extends React.Component {
  render () {
    return (
      <LikesCounter initialCount={0}/>
    )
  }
}

ReactDOM.render( <App />, document.getElementById('application'))
