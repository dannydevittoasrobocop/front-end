import React from 'react';
import './App.css';

import Register from './Auth/Register';
import Login from './Auth/Login';
import Room from './components/Room';
import Map from './components/Map';

function App() {
  return (
    <div className="App">
      <Login />
      <Register />
      <Room />
      <Map />
    </div>
  );
}

export default App;
