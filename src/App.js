import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Register from './Auth/Register';
import Login from './Auth/Login';
import Map from './components/Map';
import Room from './components/Room'
import PrivateRoute from './utils/PrivateRoute';

function App() {
  return (
    <Router>
    <div className="App">
      <Login />
      <Register />
      <Room />
      <Map />
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
