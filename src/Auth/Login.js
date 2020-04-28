import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth'


const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: ""
  })

  const handleChange = event => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post('/login/', user)
      .then(res => {
        localStorage.setItem('token', res.data.key)
        console.log(localStorage.getItem('token'))

      })
      .catch(err => console.log(err))
  }


  return (
    <div>
      Login
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