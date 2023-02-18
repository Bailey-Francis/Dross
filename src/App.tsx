import { useState } from "react";
import { determineLocation, Player, addPlayer, getStartingMap } from "./map";

function PageWrapper( props : { children: React.ReactNode } ) {
    return <div className="page-wrapper">
        <div> Welcome to DROSS</div>
        {props.children}
    </div>
}

let player:Player = {
    x:0,
    y:0,
}

function InputBox() {
    const [inputState, setInputState] = useState('')
    return <div>
        <div>{inputState}</div>
        <input 
            type="text"
            value={inputState}
            onChange={e => setInputState(e.target.value)}
        />
    </div>
}

export default function App()  {

    let [mapState, setMapState] = useState([...getStartingMap()])

    function determineMovement(key:string){
        let this_tile:number[] = [player.x, player.y]
        let next_tile:number[] = this_tile
        if(key=="w" && player.y>0){
            next_tile = [player.x,player.y-1]
        }
        if(key=="d" && player.x<mapState[player.y].length-2){
            next_tile = [player.x+1,player.y]
        }
        if(key=="a" && player.x>0){
            next_tile = [player.x-1,player.y]
        }
        if(key=="s" && player.y<mapState.length-1){
            next_tile = [player.x,player.y+1]
        }
        if(mapState[next_tile[1]][next_tile[0]]=="o"){
            setMapState(getStartingMap())
            setMapState(addPlayer(next_tile))
            player.x=next_tile[0]; player.y=next_tile[1]
        }
    }

    function DrawMap() {
        return<div className="map">
        <div>{mapState[0]}</div>
        <div>{mapState[1]}</div>
        <div>{mapState[2]}</div>
        <div>{mapState[3]}</div>
        <div>{mapState[4]}</div>
        </div>
    }

    return <PageWrapper>
        <div tabIndex={0} onKeyDown={e => determineMovement(e.key)}>
            <DrawMap />
        </div>
    </PageWrapper>
}
