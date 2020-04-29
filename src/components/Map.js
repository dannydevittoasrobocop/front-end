import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import MapRooms from './MapRooms';


const Map = () => {
    const [roomMap, setRoomMap] = useState([])

    useEffect(() => {
        axiosWithAuth()
            .get("/adv/map")
            .then(response => {
                setRoomMap(response.data.title)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    // <rect x="0" y="0" rx="20" ry="20" width="15" height="15"/>

    return(
        <div>
            <svg id='map'>
                <rect x="0" y="0" rx="20" ry="20" width="15" height="15"/>
            </svg>
        </div>
    )
}

export default Map;
