import React, { useState,  useEffect } from 'react'
import styled from 'styled-components';
import {axiosWithAuth} from '../utils/axiosWithAuth';
// data shape
// description: "North of you, the cave mount beckons"
// e_to: 0
// id: 1
// n_to: 2
// s_to: 0
// title: "Outside Cave Entrance"
// w_to: 0
// dummy data
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
    return (
        <>
            <Map>
                {dummy.map(room => {
                    return (
                        <Room n={room.n} s={room.s} e={room.e} w={room.w} current={room.current}>
                            {room.id}
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
    border-top: ${props => props.n ? 'none' : '2px solid blue'};
    border-bottom: ${props => props.s ? 'none' : '2px solid blue'};
    border-left: ${props => props.w ? 'none' : '2px solid blue'};
    border-right: ${props => props.e ? 'none' : '2px solid blue'};
    background-color: ${props => props.current ? 'red' : "transparent"}
`
export default MapPrototype;

