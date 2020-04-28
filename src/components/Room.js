import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';


const Room = () => {

    const [room, setRoom] = useState({
        username: '',
        roomName: '',
        roomDescrition: '',
        errorMesage: ''
    })

    // useEffect(() => {
    //     axiosWithAuth()
    //         .get("adv/init/")
    //         .then(response => {
    //             // console.localStorage(response);
    //             setRoom(response.data)
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         })
    // }, [])
    const test = () => {
        axiosWithAuth()
            .get("adv/init/")
            .then(response => {
                console.log(response);
                // setRoom(response.data)
            })
            .catch(err => {
                console.log(err);
            })
    }

    const handleMove = move => {
        axiosWithAuth()
            .post('/adv/move/',  {
                direction: move
            })
            .then(response => {
                console.log(response.data)
                // setRoom(response.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div className="wrapper">
            <div className="arrows">
                <button onClick={() => handleMove('n')}>↑</button>
                <br />
                <button onClick={() => handleMove('w')}>←</button>
                <button onClick={() => handleMove('s')}>↓</button>
                <button onClick={() => handleMove('e')}>→</button>
                <button onClick={test}>test</button>
            </div>
        </div >
    )
}

export default Room;