const React = require('react');

const UserMinAndMax = ({min, max, handleMinInput, handleMaxInput}) => {
  return (
    <section className='custom-max-min'>
      <input
        className='min-input'
        type='number'
        placeholder={min}
        // onChange={handleMinInput}
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
