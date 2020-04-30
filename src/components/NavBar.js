import React from 'react';
import { useHistory } from 'react-router-dom'

const NavBar = ({history}) => {
    const { push } = useHistory();

    
    return (
        <div className = 'navbar'>
            <p className = 'logout' onClick={() => {
                localStorage.clear('token')
                push('/login')
            }} >Logout</p>
        </div>
    )
}

export default NavBar