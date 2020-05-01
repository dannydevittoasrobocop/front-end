import React, { useState,  useEffect } from 'react'
import styled from 'styled-components';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import { VictoryScatter, VictoryChart, VictoryTheme, VictoryLabel, VictoryAxis } from 'victory';


const MapPrototype = ({currentRoom, setCurrentRoom}) => {
    console.log(currentRoom)
    // hooks
    const [roomMap, setRoomMap] = useState([])
    // const [room, setRoom] = useState({
    //     current: ''
    //     })
    let coordArray = []
    let idArray = []

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
                setCurrentRoom({
                    current: response.data.currentroom
                })
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    const currentID = () => {
        roomMap.map(i => {
            if(currentRoom.current == i.id){
                console.log("true")
                return true
            }
            else{
                console.log("false")
                return false
            }
        })
    }

    console.log(currentID())

    return (
        <div className='map'>
            {roomMap.forEach(el => {
            coordArray.push({x: el.x, y: el.y, symbol: "square"})
                })
            }
            {roomMap.forEach(el => {
                idArray.push(el.id)
                })
            }
            <VictoryChart
            theme={VictoryTheme.material}
            domain={{ x: [0, 20], y: [0, 20] }}
            
            >
            <VictoryScatter
            
                style={{ data: { fill: "#c43a31" }, labels: { fill: "white", fontSize: 4 } }}
                size={5}
                data={coordArray}
                labels={idArray}
                labelComponent={<VictoryLabel dy={2}/>}
            />
            <VictoryAxis style={
                { axis: {stroke: "none"} }, 
                {axisLabel: {fontSize: 0, padding: 0}},
                {tickLabels: {fontSize: 0, padding: 0}}, 
                {grid: {stroke: "none"}}, 
                {ticks: {stroke: "grey", size: 0}}
                } />
            </VictoryChart>
        </div>
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

