import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';


const Room = () => {

    const [room, setRoom] = useState({
        username: '',
        roomName: '',
        roomDescrition: '',
        errorMessage: '', 
        currentPlayers: []
        })

    useEffect(() => {
        axiosWithAuth()
            .get("adv/init/")
            .then(response => {
                const res = response.data
                console.log(response.data)
                setRoom({
                    username: res.name,
                    roomName: res.title,
                    roomDescrition: res.description,
                    errorMessage: res.error_message, 
                    currentPlayers: res.players
                })
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    const handleMove = move => {
        axiosWithAuth()
            .post('/adv/move/',  {
                direction: move
            })
            .then(response => {
                const res = response.data
                console.log(response.data)
                setRoom({
                    username: res.name,
                    roomName: res.title,
                    roomDescrition: res.description,
                    errorMessage: res.error_msg, 
                    currentPlayers: res.players
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div className="wrapper">
            <div className="errMsg">
                {room.errorMessage == null || room.errorMessage == '' ? '' : <p>We are sorry... {room.errorMessage}</p>}
            </div>
            <div className="interface">
                <div className="arrows">
                    <button onClick={() => handleMove('n')}>North ↑</button>
                    <br />
                    <button onClick={() => handleMove('w')}>West ←</button>
                    <button onClick={() => handleMove('e')}>East →</button>
                    <button onClick={() => handleMove('s')}>South ↓</button>
                </div>
                <div className="roomInfo">
                    <h3>{room.roomName}</h3>
                    <h4>{room.roomDescrition}</h4>
                </div>
            </div>
        </div >
    )
}

export default Room;