import React, {Component} from 'react'
import randomInt from '../random'
import PropTypes from 'prop-types'

class DieContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      result: null
    }
    this.roll = this.roll.bind(this)
  }

  roll() {
    this.setState({
      result: randomInt(1, this.props.sides)
    })
  }

  render() {
    return (
      <Die
        name={'d' + this.props.sides}
        result={this.state.result}
        roll={this.roll}
      />
    )
  }
}

DieContainer.propTypes = {
  sides: PropTypes.number.isRequired,
}

const Die = ({name, result, roll}) => (
  <div className="die">
    <div>{result}</div>
    <button
      onClick={roll}
    >
      {name}
    </button>
  </div>
)

export default DieContainer