import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth'
import axios from 'axios'

// import '../App.css'


const Register = ({history}) => {

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
      axios
        .post('https://robocop-cs-buildweek.herokuapp.com/api/registration/', user)
        .then(res => {
          localStorage.setItem('token', res.data.key)
          console.log(localStorage.getItem('token'))
          history.push('/game')

        })
        .catch(err => console.log(err))
    }


    return (
      <div className = 'flexForm'>
      <p className = 'label'>Register</p>
        
        
        <form onSubmit={handleSubmit} className='loginForm'>
            <input
                type='text'
                name='username'
                placeholder='username'
                value={user.username}
                onChange={handleChange}
                required
            />
            <input
                type='password'
                name='password1'
                placeholder='password'
                value={user.password1}
                onChange={handleChange}
                required
            />
            <input
                type='password'
                name='password2'
                placeholder='confirm password'
                value={user.password2}
                onChange={handleChange}
                required
            />
            <button className='authButtons'>Register</button>
        </form>
         <div>
          <p>Or login here!</p>
          <Link to='/login'>Login</Link>
        </div>
      </div>
    );
}

export default Register;