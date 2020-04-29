import React from 'react';
import Room from './Room';
import Map from './Map';

const Game = () => {
    return (
        <div>
            <div>
                <Map />
            </div>
            <div>
                <Room />
            </div>
        </div>
    )
}

export default Game