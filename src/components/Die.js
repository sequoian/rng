import React, {Component} from 'react'
import randomInt from '../random'
import PropTypes from 'prop-types'
import './Die.css'

class DieContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      result: null
    }
    this.roll = this.roll.bind(this)
    this.getRef = this.getRef.bind(this)
  }

  componentDidMount() {
    this.calculate()
  }

  roll() {
    this.calculate()
    this.fade()
  }

  calculate() {
    this.setState({
      result: randomInt(1, this.props.sides)
    })
  }

  fade() {
    this.display.classList.remove('start')
    this.display.classList.remove('rolled')
    setTimeout(() => this.display.classList.add('rolled'), 100)
  }

  getRef(node) {
    this.display = node
  }

  render() {
    return (
      <Die
        name={'d' + this.props.sides}
        result={this.state.result}
        roll={this.roll}
        getRef={this.getRef}
      />
    )
  }
}

DieContainer.propTypes = {
  sides: PropTypes.number.isRequired,
}

const Die = ({name, result, roll, getRef}) => (
  <div className="die">
    <div 
      ref={getRef}
      className="result start"
    >
      {result}
    </div>
    <button
      onClick={roll}
    >
      {name}
    </button>
  </div>
)

export default DieContainer