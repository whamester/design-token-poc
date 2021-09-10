import React from 'react'
import { Route, Switch } from 'react-router'
import App from '../App'
import SyncStyleToken from '../pages/SyncStyleToken'

const AppRouter = () => {
  return (
    <Switch>
      <Route path="/style-token" component={SyncStyleToken} />
      <Route path="/" component={App} />
    </Switch>
  )
}

export default AppRouter
