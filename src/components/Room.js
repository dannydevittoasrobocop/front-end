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
            <h1>Welcome {room.username}</h1>
            <h4>Make a move!</h4>
            {room.errorMessage == '' ? '' : <p>{room.errorMessage}</p>}
            <div className="arrows">
                <button onClick={() => handleMove('n')}>North ↑</button>
                <br />
                <button onClick={() => handleMove('w')}>West ←</button>
                <button onClick={() => handleMove('s')}>South ↓</button>
                <button onClick={() => handleMove('e')}>East →</button>
                {/* <button onClick={test}>test</button> */}
            </div>

            <h4>Current Room: {room.roomName}</h4>
            <h3>Room Description: {room.roomDescrition}</h3>
        </div >
    )
}

export default Room;