import { useState } from "react";
import { MapComponent } from "./components/Map";

function PageWrapper( props : { children: React.ReactNode } ) {
    return <div className="page-wrapper">
        <div> Welcome to DROSS</div>
        {props.children}
    </div>
}

export default function App()  {

    let [playerPosition, setPlayerPosition] = useState([0,0])

    function determineMovement(key:string){
        if(key=="w"){
            setPlayerPosition([playerPosition[0],playerPosition[1]-1])
        }
        if(key=="d"){
            setPlayerPosition([playerPosition[0]+1,playerPosition[1]])
        }
        if(key=="a"){
            setPlayerPosition([playerPosition[0]-1,playerPosition[1]])
        }
        if(key=="s"){
            setPlayerPosition([playerPosition[0],playerPosition[1]+1])
        }
    }

    return <PageWrapper>
        <div tabIndex={0} onKeyDown={e => determineMovement(e.key)}>
            <MapComponent 
                mapSize={50}
                tiles={[
                    { x: 0, y: 0, text: "Grass", color: "green" },
                    { x: playerPosition[0], y: playerPosition[1], text: "Player", color: "blue" },
                ]}
            />
        </div>
    </PageWrapper>
}
