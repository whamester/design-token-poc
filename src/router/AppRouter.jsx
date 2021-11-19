import React from 'react'
import { Route, Switch } from 'react-router'
import App from '../App'

const AppRouter = () => {
  return (
    <Switch>
      <Route path="/" component={App} />
    </Switch>
  )
}

export default AppRouter
