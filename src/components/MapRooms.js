import React, { useRef, useEffect } from 'react';

const MapRooms = props => {

    const canvasRef = useRef("map");

    useEffect(() => {
        const ctx = canvasRef.getContext("2d");
        const drawRooms = (r) => {
            let x = 0;
            let y = 0;
            r.forEach(el => {
                ctx.fillStyle = '#f00';
                ctx.fillRect(x, y, 20, 20);
                x += 20;
                y += 20;
            })
        }
    }, [canvasRef]);

    return (
        <div>
            <canvas id="map" ref={canvasRef}>
                
            </canvas>
        </div>
    )

}

export default MapRooms