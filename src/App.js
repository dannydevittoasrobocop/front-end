import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Register from './Auth/Register';
import Login from './Auth/Login';
import NavBar from './components/NavBar';
import Game from './components/Game';
import PrivateRoute from './utils/PrivateRoute';

function App() {
  return (
    <Router>
    <div className="App">
      <NavBar />
      <Switch>
      <Route exact path = '/' component={Register} />
      <Route 
        path = '/login' 
        render={props => {
          return <Login {...props}/>
        }}
      />
      <PrivateRoute exact path = '/game' component = {Game}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
