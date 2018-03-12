import React, {Component} from 'react'
import './RNG.css'
import randomInt from '../random'
import NumberInput from './NumberInput'

class RNGContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      min: '1',
      max: '100',
      result: null,
      errors: {}
    }
    this.handleInput = this.handleInput.bind(this)
    this.validate = this.validate.bind(this)
    this.roll = this.roll.bind(this)
    this.getRef = this.getRef.bind(this)
  }

  componentDidMount() {
    this.calculate()
  }

  getRef(node) {
    this.display = node
  }

  handleInput(event) {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  validate(event) {
    const {name, value} = event.target
    const parsed = parseInt(value, 10)

    if (value === '') {
      // set empty values to zero
      this.setState({
        [name]: '0'
      })
    }
    else if (isNaN(parsed)) {
      // set error to NaNs and return
      return this.setState(prevState => {
        return {
          errors: {...prevState.errors, [name]: 'invalid'}
        }
      })
    }
    else {
      // set valid numbers to their parsed values
      this.setState({
        [name]: parsed.toString()
      })
    }

    // set errors to null
    this.setState(prevState => {
      return {
        errors: {...prevState.errors, [name]: null}
      }
    })

    // swap min & max if necessary
    this.swap()
  }

  swap() {
    this.setState(prevState => {
      const min = parseInt(prevState.min, 10)
      const max = parseInt(prevState.max, 10)
      if (isNaN(max) || isNaN(min)) return prevState
      if (min <= max) return prevState
      return {
        min: prevState.max,
        max: prevState.min
      }
    })
  }

  roll() {
    this.calculate()
    this.fade()
  }

  calculate() {
    this.setState(prevState => {
      return {
        result: randomInt(prevState.min, prevState.max)
      }
    })
  }

  fade() {
    this.display.classList.remove('start')
    this.display.classList.remove('rolled')
    setTimeout(() => this.display.classList.add('rolled'), 100)
  }

  render() {
    const {min, max, result, errors} = this.state
    return (
      <RNG
        min={min}
        max={max}
        result={result}
        errors={errors}
        onChange={this.handleInput}
        onBlur={this.validate}
        roll={this.roll}
        getRef={this.getRef}
      />
    )
  }
}

const RNG = ({min, max, result, onChange, onBlur, roll, errors, getRef}) => (
  <div id="rng">
    <div className="inputs">
      <NumberInput
        label="Min"
        name="min"
        value={min}
        error={errors.min}
        onChange={onChange}
        onBlur={onBlur}
      />
      <NumberInput
        label="Max"
        name="max"
        value={max}
        error={errors.max}
        onChange={onChange}
        onBlur={onBlur}
      />
      <button
        onClick={roll}
      >
        Calculate
      </button>
    </div>
    <div 
      ref={getRef}
      className="result start"
    >
      {result}
    </div>
  </div> 
)

export default RNGContainer