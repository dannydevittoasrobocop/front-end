import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Register from './Auth/Register';
import Login from './Auth/Login';
import Room from './components/Room'
import PrivateRoute from './utils/PrivateRoute';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
      <Route exact path = '/' component={Login} />
      <Route path = '/register' component = {Register}/>
      <PrivateRoute exact path = '/room' component = {Room}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
