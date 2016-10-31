import React, { Component } from 'react'
const ReactDOM = require('react-dom');
import UserInput from './UserInput';

var App = React.createClass ({
  render () {
    return (
      <div>
        <UserInput />
      </div>
    )
  }
});

ReactDOM.render( <App />, document.getElementById('application'))
