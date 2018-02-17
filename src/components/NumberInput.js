import React from 'react'
import './NumberInput.css'

const NumberInput = ({value, label, name, error, onChange, onBlur}) => (
  <div className={error ? 'num-input error' : 'num-input'}>
    <label htmlFor={name}>
      {label}
    </label>
    <input
      type="text"
      pattern="\d*"
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    />
  </div>
)

export default NumberInput