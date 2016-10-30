// const React = require('react');
import React, { Component } from 'react'
const ReactDOM = require('react-dom');
const LikesCounter = require('./LikesCounter');
import UserInput from './UserInput';

var App = React.createClass ({
  render () {
    return (
      <div>
        <UserInput />
        <LikesCounter initialCount={0}/>
      </div>
    )
  }
});

ReactDOM.render( <App />, document.getElementById('application'))
