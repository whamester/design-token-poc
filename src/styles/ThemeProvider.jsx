import React, { createContext, useEffect, useState, useContext } from 'react'
import { ThemeProvider as ThemeStyleComponentProvider } from 'styled-components'

import mainTheme from '../styles/global/themes/mainTheme'

const MAIN_THEME_TYPE = 'light'

const ThemeContext = createContext({
  themeType: MAIN_THEME_TYPE,
  mountedComponent: false,
  theme: mainTheme,
})

export const useThemeProvider = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('Make sure to use ThemeContext inside of the provider')
  }
  return context
}

export const ThemeProvider = ({ children }) => {
  const [theme] = useState(mainTheme)
  const [themeType, setThemeType] = useState(MAIN_THEME_TYPE)
  const [mountedComponent, setMountedComponent] = useState(false)

  const setMode = (mode) => {
    window.localStorage.setItem('theme', mode)
    setThemeType(mode)
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme')
    localTheme ? setThemeType(localTheme) : setMode(MAIN_THEME_TYPE)
    setMountedComponent(true)
  }, [])

  return (
    <ThemeContext.Provider value={{ themeType, mountedComponent, theme }}>
      <ThemeStyleComponentProvider theme={theme}>{children}</ThemeStyleComponentProvider>
    </ThemeContext.Provider>
  )
}
