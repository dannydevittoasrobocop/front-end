import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth'


const Register = () => {

    const [user, setUser] = useState ({
      username: "",
      password1: "",
      password2: ""
    })

    const handleChange = e => {
      setUser({
        ...user,
        [e.target.name]: e.target.value
      });
    };

    const handleSubmit = e => {
      e.preventDefault();
      axiosWithAuth()
        .post('/registration/', user)
        .then(res => {
          localStorage.setItem('token', res.data.key)
          console.log(localStorage.getItem('token'))

        })
        .catch(err => console.log(err))
    }


    return (
      <div>
        Register
        
        
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
                name='password1'
                value={user.password1}
                onChange={handleChange}
                required
            />
            <input
                type='password'
                name='password2'
                value={user.password2}
                onChange={handleChange}
                required
            />
            <button>Register</button>
        </form>
      </div>
    );
}

export default Register;