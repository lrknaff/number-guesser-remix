const React = require('react');

const UserMinAndMax = ({ handleRangeInput, handleRangeClick, disabled, clearInputfields }) => {
  let userMin = clearInputfields(this.state.userMin)
  let userMax = clearInputfields(this.state.userMax)

  return (
    <section className='custom-max-min'>
      <input
        className='min-input'
        type='number'
        placeholder='min'
        name='userMin'
        value={userMin}
        onChange={handleRangeInput}
        />
      <input
        className='max-input'
        type='number'
        placeholder='max'
        name='userMax'
        value={clearInputfields}
        onChange={handleRangeInput}
        />
      <button
        className='submit-max-min-button'
        onClick={handleRangeClick}
        disabled={disabled}
        >
        Submit
      </button>
    </section>
  )
}

module.exports = UserMinAndMax
