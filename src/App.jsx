import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Admin from './components/Admin'
import Inicio from './components/Inicio'
import Login from './components/Login'
import Menu from './components/Menu'

const App = () => {
  return (
    <div className="container">
      <Router>
        <Menu />


        <Switch>
          <Route exact path="/" component={Inicio}>

          </Route>
          <Route exact path="/admin" component={Admin}>

          </Route>
          <Route exact path="/login" component={Login}>

          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
