const React = require('react');

const UserMinAndMax = ({min, max, handleMinInput, handleMaxInput}) => {
  return (
    <section className='custom-max-min'>
      <input
        className='min-input'
        type='number'
        placeholder={min}
        onChange={(e) => handleMinInput(e)}
        />
      <input
        className='max-input'
        type='number'
        placeholder={max}
        // onChange={handleMaxInput}
        />
    </section>
  )
}

module.exports = UserMinAndMax
