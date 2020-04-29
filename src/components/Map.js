import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import MapRooms from './MapRooms';


const Map = () => {
    const [roomMap, setRoomMap] = useState([])

    useEffect(() => {
        axiosWithAuth()
            .get("/adv/map")
            .then(response => {
                setRoomMap(response.data.title)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    // <rect x="0" y="0" rx="20" ry="20" width="15" height="15"/>

    const circle = () => {
        return (               
            <rect x="0" y="0" rx="20" ry="20" width="15" height="15"/>
        )
    }

    return(
        <div>
            {/* <svg id='map'>                 */}
                {/* <rect x="0" y="0" rx="20" ry="20" width="15" height="15"/> */}

                {roomMap.map(i => {
                    return (
                        <div style={{border: '1px solid red', height: "30px"}}>
                            
                        </div>
                    )
                })}
               

                {/* {roomMap.map(i => {
                        console.log(roomMap)

                        

                        if (i.e_to > 0) {
                            console.log(i.title,'it\'s a  direction', i.e_to)
                            circle()                     
                        }
                        else if (i.w_to > 0) {
                            console.log(i.title,'it\'s a  direction',i.w_to)
                            circle()                     

                        }
                        else if (i.s_to > 0) {
                            console.log(i.title, 'it\'s a  direction', i.s_to)
                            circle()                     

                        }
                        else if (i.n_to > 0) {
                            console.log(i.title,'it\'s a  direction', i.n_to)
                            circle()                     

                        }       
                                
                })} */}
            {/* <svg id='map'>                
            <rect x="0" y="0" rx="20" ry="20" width="15" height="15"/>
            </svg> */}
            {/* </svg>  */}
        </div>
    )
}

export default Map;
