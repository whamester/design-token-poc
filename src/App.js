import React from 'react'
import keys from 'lodash/keys'
import styles from '../src/styles/design-tokens/json/styles.json'
import ravn_logo from './assets/images/ravn.png'
import './App.css'
import Buttons from './components/buttons'

const App = () => {
  const designTokenKeys = keys(styles)

  return (
    <div className="app">
      <div className="app-header">
        <img src={ravn_logo} className="app-logo" alt="logo" />
        <h1>
          <b>Design. Build. Scale.</b>
        </h1>
        <a className="app-link" href="https://www.ravn.co/" target="_blank" rel="noopener noreferrer">
          ravn.co
        </a>
        <Buttons />

        <div>
          {designTokenKeys.map((tokenKey) => {
            return (
              typeof styles[tokenKey] === 'string' && (
                <div className="token-row">
                  <span key={tokenKey}>{`${tokenKey} - ${styles[tokenKey]}`}</span>
                  <div className="avatar-circle" style={{ backgroundColor: styles[tokenKey] }}></div>
                </div>
              )
            )
          })}
        </div>
      </div>
      <div className="app-footer"></div>
    </div>
  )
}

export default App
