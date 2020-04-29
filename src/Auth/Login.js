import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth'


const Login = ({history}) => {
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
        history.push('/room')

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

      <p>Don't have an account... Sign up here</p>
    </div>
  );
}

export default Login;