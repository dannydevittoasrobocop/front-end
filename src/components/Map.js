import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { render } from '@testing-library/react'


const Map = () => {
    const [roomMap, setRoomMap] = useState([])

    useEffect(() => {
        axiosWithAuth()
            .get("/adv/map")
            .then(response => {
                console.log(response.data.title)
                setRoomMap(response.data.title)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    return(
        <div>
            {console.log(roomMap)}
            {roomMap.map(i => (
                <div>
                    {i.title}
                </div>    
            ))}
        </div>
    )
}

export default Map;
