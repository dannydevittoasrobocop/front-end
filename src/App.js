import React from 'react';
import './App.css';

import Register from './Auth/Register';
import Login from './Auth/Login';

function App() {
  return (
    <div className="App">
      <Login/>
      <Register/>
    </div>
  );
}

export default App;
