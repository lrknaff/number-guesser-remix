// import React, { Component } from 'react';
// const ReactDOM = require('react-dom');
const React = require('react');


class UserInput extends React.Component {
  constructor() {
    super();
    this.state = {
      guess: '',
    };
  }

  handleUserInput(e) {
    this.setState( { guess: e.target.value } );
  }

  render() {
    return (
      <form className='guess-input-container'>
        <input
          type='number'
          className='guess-input-field'
          value={this.state.guess}
          onChange={this.handleUserInput.bind(this)}
        />
      </form>
    )
  }

}

module.exports = UserInput
