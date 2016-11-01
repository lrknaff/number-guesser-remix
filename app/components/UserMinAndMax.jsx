const React = require('react');

const UserMinAndMax = ({ handleRangeInput, handleMinMaxClick, userMin, userMax, disabled }) => {
  return (
    <section className='custom-max-min'>
      <input
        className='min-input'
        type='number'
        placeholder='min'
        name='userMin'
        onChange={handleRangeInput}
        />
      <input
        className='max-input'
        type='number'
        placeholder='max'
        name='userMax'
        onChange={handleRangeInput}
        />
      <button
        className='submit-max-min-button'
        onClick={handleMinMaxClick}
        disabled={disabled}
        >
        Submit
      </button>
    </section>
  )
}

module.exports = UserMinAndMax
