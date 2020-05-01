import React, { useState,  useEffect } from 'react'
import styled from 'styled-components';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import { VictoryScatter, VictoryChart, VictoryTheme } from 'victory';


const MapPrototype = ({currentRoom, setCurrentRoom}) => {
    console.log(currentRoom)
    // hooks
    const [roomMap, setRoomMap] = useState([])
    // const [room, setRoom] = useState({
    //     current: ''
    //     })
    let coordArray = []

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
        roomMap.forEach(el => {
            coordArray.push({x: el.x, y: el.y})
        })
        axiosWithAuth()
            .get("adv/init/")
            .then(response => {
                const res = response.data
                console.log(response.data)
                setCurrentRoom({
                    current: response.data.currentroom
                })
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    return (
        <>
            {roomMap.forEach(el => {
            coordArray.push({x: el.x, y: el.y, symbol: "square"})
        })}
            <VictoryChart
            theme={VictoryTheme.material}
            domain={{ x: [0, 20], y: [0, 20] }}
            >
            <VictoryScatter
                style={{ data: { fill: "#c43a31" } }}
                size={5}
                data={coordArray}
            />
            </VictoryChart>
            <Map>
            
                {roomMap.map(rooms => {
                    
                    return (
                        
                        <Room n={rooms.n_to} s={rooms.s_to} e={rooms.e_to} w={rooms.w_to} current = {currentRoom.current} id = {rooms.id}>
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
    border: 1px solid black;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
`
const Room = styled.div`
    width: 2rem;
    height: 2rem;
    margin: 0 1rem;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    color: #000;
    font-weight: bold;
    font-size: 1.5rem;
    border-top: ${props => props.n !== 0 ? 'none' : '2px solid black'};
    border-bottom: ${props => props.s !== 0 ? 'none' : '2px solid black'};
    border-left: ${props => props.w !== 0 ? 'none' : '2px solid black'};
    border-right: ${props => props.e !== 0 ? 'none' : '2px solid black'};
    background-color: ${props => props.current === props.id ? 'grey' : 'transparent'};
`
export default MapPrototype;

