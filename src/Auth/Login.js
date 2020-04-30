import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth'
import axios from 'axios'

// import '../App.css'


const Login = (props) => {
  const [user, setUser] = useState({
    username: "",
    password: ""
  })

  const handleChange = event => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post('https://robocop-cs-buildweek.herokuapp.com/api/login/', user)
      .then(res => {
        localStorage.setItem('token', res.data.key)
        console.log(localStorage.getItem('token'))
        props.history.push('/game')

      })
      .catch(err => console.log(err))
  }


  return (
    <div className = 'flexForm'>
      <p className = 'label'>Login</p>
      <form onSubmit={handleSubmit} className='loginForm'>
        <input
          type='text'
          name='username'
          value={user.username}
          onChange={handleChange}
          required
        />
        <input
          type='password'
          name='password'
          value={user.password}
          onChange={handleChange}
          required
        />
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;