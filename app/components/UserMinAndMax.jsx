const React = require('react');

class UserMinAndMax extends React.Component {
  render () {
    return (
      <div>
        <input
          type='number'
          placeholder='min value'
          onChange={this.props.onChange}/>
        <input
          type='number'
          placeholder='max value'
          onChange={this.props.onChange}/>
      </div>
    )
  }
}

module.exports = UserMinAndMax
