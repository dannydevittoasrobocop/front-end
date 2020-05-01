import React from 'react';
import { useHistory } from 'react-router-dom'

const NavBar = () => {
    const { push } = useHistory();

    
    return (
        <div className = 'navbar'>
            {localStorage.getItem('token') ? 
                <p className = 'logout' onClick={() => {
                    localStorage.clear('token')
                    push('/login')
                }} >Logout</p> : null
            }
        </div>
    )
}

export default NavBar