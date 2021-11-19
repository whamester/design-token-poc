import React from 'react'
import ravn_logo from './assets/images/ravn.png'
import './App.css'
import Buttons from './components/buttons'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={ravn_logo} className="App-logo" alt="logo" />
        <h1>
          <b>Design. Build. Scale.</b>
        </h1>
        <a className="App-link" href="https://www.ravn.co/" target="_blank" rel="noopener noreferrer">
          ravn.co
        </a>
        <Buttons />
      </header>
    </div>
  )
}

export default App
