import React, { useState } from 'react';
import Room from './Room';
import Map from './Map';

const Game = () => {

    const [currentRoom, setCurrentRoom] = useState({
        current: ''
        })

    return (
        <div>
            <div>
                <Map currentRoom = {currentRoom} setCurrentRoom = {setCurrentRoom}/>
            </div>
            <div>
                <Room currentRoom = {currentRoom} setCurrentRoom = {setCurrentRoom}/>
            </div>
        </div>
    )
}

export default Game