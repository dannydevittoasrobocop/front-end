import React, { useState,  useEffect } from 'react'
import styled from 'styled-components';
import {axiosWithAuth} from '../utils/axiosWithAuth';



const dummy = [
    {
        id: 1,
        name: '',
        n: false,
        s: false,
        e: true,
        w: false,
    },
    {
        id: 2,
        name: '',
        n: false,
        s: false,
        e: true,
        w: true,
    },
    {
        id: 3,
        name: '',
        n: false,
        s: false,
        e: true,
        w: true,
    },
    {
        id: 4,
        name: '',
        n: false,
        s: false,
        e: true,
        w: true,
    },
    {
        id: 5,
        name: '',
        n: false,
        s: true,
        e: false,
        w: true,
    },
    {
        id: 6,
        name: '',
        n: false,
        s: false,
        e: true,
        w: false,
    },
    {
        id: 7,
        name: '',
        n: false,
        s: false,
        e: true,
        w: true,
    },
    {
        id: 8,
        name: '',
        n: false,
        s: false,
        e: true,
        w: true,
    },
    {
        id: 9,
        name: '',
        n: false,
        s: false,
        e: true,
        w: true,
        current: true
    },
    {
        id: 10,
        name: '',
        n: true,
        s: false,
        e: false,
        w: true,
    }
];
const MapPrototype = () => {
    // hooks
    const [roomMap, setRoomMap] = useState([])
    const [room, setRoom] = useState({
        current: ''
        })

    // effects
    useEffect(() => {
        axiosWithAuth()
            .get("/adv/map")
            .then(response => {
                setRoomMap(response.data.title)
                console.log(response.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    useEffect(() => {
        axiosWithAuth()
            .get("adv/init/")
            .then(response => {
                const res = response.data
                console.log(response.data)
                setRoom({
                    current: response.title
                })
            })
            .catch(err => {
                console.log(err);
            })
    }, [])
    return (
        <>
            <Map>
            
                {roomMap.map(rooms => {
                    
                    return (
                        
                        <Room n={rooms.n_to} s={rooms.s_to} e={rooms.e_to} w={rooms.w_to} current = {rooms.title}>
                            {rooms.id}
                        </Room>
                    )
                })}
            </Map>
        </>
    )
}
// styled comps
const Map = styled.div`
    width: 100%;
    max-width: 800px;
    height: 30rem;
    margin: 0 auto;
    border: 1px solid red;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
`
const Room = styled.div`
    width: 7rem;
    height: 7rem;
    margin: 0 1rem;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    color: #000;
    font-weight: bold;
    font-size: 1.5rem;
    border-top: ${props => props.n !== 0 ? 'none' : '2px solid blue'};
    border-bottom: ${props => props.s !== 0 ? 'none' : '2px solid blue'};
    border-left: ${props => props.w !== 0 ? 'none' : '2px solid blue'};
    border-right: ${props => props.e !== 0 ? 'none' : '2px solid blue'};
    background-color: ${props => props.current === 'Grand Overlook' ? 'red' : "transparent"}
    // background-color: ${props => props.current === 'Foyer' ? 'red' : "transparent"}
    // background-color: ${props => props.current === 'Outside Cave Entrance' ? 'red' : "transparent"}
    // background-color: ${props => props.current === 'Narrow Passage' ? 'red' : "transparent"}
    // background-color: ${props => props.current === 'Treasure Chamber' ? 'red' : "transparent"}
`
export default MapPrototype;

