import React from 'react'
import keys from 'lodash/keys'
import styled from 'styled-components'
import styles from './styles/design-tokens/json/styles.json'
import ravn_logo from './assets/images/ravn.png'
import './App.css'
import Buttons from './components/buttons'
import { ThemeProvider } from './styles/ThemeProvider'

const App = () => {
  const designTokenKeys = keys(styles)

  return (
    <ThemeProvider>
      <StyledContent>
        <StyledLogo src={ravn_logo} alt="logo" />
        <h1>
          <b>Design. Build. Scale.</b>
        </h1>

        <SyledButton>
          <h2>
            <b>Click me!</b>
          </h2>
        </SyledButton>

        <div>
          {designTokenKeys.map((tokenKey) => {
            return (
              typeof styles[tokenKey] === 'string' && (
                <StyledRow>
                  <span key={tokenKey}>{`${tokenKey} - ${styles[tokenKey]}`}</span>
                  <StyledDot style={{ backgroundColor: styles[tokenKey] }}></StyledDot>
                </StyledRow>
              )
            )
          })}
        </div>
      </StyledContent>
      <div className="app-footer"></div>
    </ThemeProvider>
  )
}

export default App

const StyledLink = styled.a`
  color: ${(props) => props.theme.colors.ColorPrimary1};
`

const StyledLogo = styled.img`
  height: 40vmin;
  pointer-events: none;
  border-radius: 50%;
`

const StyledContent = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${(props) => props.theme.colors.ColorPrimary1};
`

const StyledRow = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  line-height: 60px;
`

const StyledDot = styled.div`
  height: 25px;
  width: 25px;
  border-radius: 50%;
  display: inline-block;
  align-self: center;
  border: solid 0.5px ${(props) => props.theme.colors.ColorPrimary1};
  margin-left: 32px;
`

const SyledButton = styled.button`
  padding: 12px 16px;
  width: 200px;
  background-color: ${(props) => props.theme.colors.ColorSecondary6};
  color: ${(props) => props.theme.colors.ColorPrimary1};
  border: solid 1px ${(props) => props.theme.colors.ColorSecondary5};
  cursor: pointer;
  margin-bottom: 64px;

  :hover {
    background-color: ${(props) => props.theme.colors.ColorDanger6};
    color: ${(props) => props.theme.colors.ColorTertiary5};
    border: solid 1px ${(props) => props.theme.colors.ColorDanger3};
  }
`
