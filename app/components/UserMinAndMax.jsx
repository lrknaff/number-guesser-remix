const React = require('react');

const UserMinAndMax = ({min, max, setNewMinAndMax}) => {
  return (
    <section className='custom-max-min'>
      <input
        type='number'
        placeholder={min}
        onChange={setNewMinAndMax}
        />
      <input
        type='number'
        placeholder={max}
        onChange={setNewMinAndMax}
        />
    </section>
  )
}

module.exports = UserMinAndMax
