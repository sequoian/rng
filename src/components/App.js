import React, { Component } from 'react'
import './App.css'
import RNG from './RNG'
import Die from './Die'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Random Number Generator</h1>
        <RNG />
        <h2>Dice</h2>
        <div className="dice">
          <Die sides={4} />
          <Die sides={6} />
          <Die sides={8} />
          <Die sides={10} />
          <Die sides={12} />
          <Die sides={20} />
        </div>
      </div>
    )
  }
}

export default App