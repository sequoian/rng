import React, { Component } from 'react'
import './App.css'
import RNG from './RNG'
import Die from './Die'

class App extends Component {
  render() {
    return (
      <div>
        <RNG />
        <Die sides={4} />
        <Die sides={6} />
        <Die sides={8} />
        <Die sides={10} />
        <Die sides={12} />
        <Die sides={20} />
      </div>
    )
  }
}

export default App