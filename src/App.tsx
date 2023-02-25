import { useState } from "react";
import { MapComponent } from "./components/Map";

var Image = require("C:/Users/HP/Desktop/Code/Dross/src/images/Village.PNG")
var GrassTile = require("C:/Users/HP/Desktop/Code/Dross/src/images/GrassTile.png")
var PlayerTile = require("C:/Users/HP/Desktop/Code/Dross/src/images/PlayerTile.png")
var GunTile = require("C:/Users/HP/Desktop/Code/Dross/src/images/GunTile.png")

function PageWrapper( props : { children: React.ReactNode } ) {
    return <div className="page-wrapper">
        <div> Welcome to DROSS</div>
        {props.children}
    </div>
}

export default function App()  {

    let [playerPosition, setPlayerPosition] = useState([0,0])

    function determineMovement(key:string){
        if((key=="w" || key=='ArrowUp') && playerPosition[1]>0){
            setPlayerPosition([playerPosition[0],playerPosition[1]-1])
        }
        if((key=="d" || key=='ArrowRight') && playerPosition[0]<5){
            setPlayerPosition([playerPosition[0]+1,playerPosition[1]])
        }
        if((key=="a" || key=='ArrowLeft') && playerPosition[0]>0){
            setPlayerPosition([playerPosition[0]-1,playerPosition[1]])
        }
        if((key=="s" || key=='ArrowDown') && playerPosition[1]<5){
            setPlayerPosition([playerPosition[0],playerPosition[1]+1])
        }
    }

    return <PageWrapper>
        <div tabIndex={0} onKeyDown={e => determineMovement(e.key)}>
            <MapComponent 
                mapSize={64}
                tiles={[
                    { x: 0, y: 0, text: "Grass", img: GrassTile },{ x: 1, y: 0, text: "Grass", img: GrassTile },{ x: 2, y: 0, text: "Grass", img: GrassTile },{ x: 3, y: 0, text: "Grass", img: GrassTile },{ x: 4, y: 0, text: "Grass", img: GrassTile },{ x: 5, y: 0, text: "Grass", img: GrassTile },
                    { x: 0, y: 1, text: "Grass", img: GrassTile },{ x: 1, y: 1, text: "Grass", img: GrassTile },{ x: 2, y: 1, text: "Grass", img: GrassTile },{ x: 3, y: 1, text: "Grass", img: GrassTile },{ x: 4, y: 1, text: "Grass", img: GrassTile },{ x: 5, y: 1, text: "Grass", img: GrassTile },
                    { x: 0, y: 2, text: "Grass", img: GrassTile },{ x: 1, y: 2, text: "Grass", img: GrassTile },{ x: 2, y: 2, text: "Grass", img: GrassTile },{ x: 3, y: 2, text: "Grass", img: GrassTile },{ x: 4, y: 2, text: "Grass", img: GrassTile },{ x: 5, y: 2, text: "Grass", img: GrassTile },
                    { x: 0, y: 3, text: "Grass", img: GrassTile },{ x: 1, y: 3, text: "Grass", img: GrassTile },{ x: 2, y: 3, text: "Grass", img: GrassTile },{ x: 3, y: 3, text: "Grass", img: GrassTile },{ x: 4, y: 3, text: "Grass", img: GrassTile },{ x: 5, y: 3, text: "Grass", img: GrassTile },
                    { x: 0, y: 4, text: "Grass", img: GrassTile },{ x: 1, y: 4, text: "Grass", img: GrassTile },{ x: 2, y: 4, text: "Grass", img: GrassTile },{ x: 3, y: 4, text: "Grass", img: GrassTile },{ x: 4, y: 4, text: "Grass", img: GrassTile },{ x: 5, y: 4, text: "Grass", img: GrassTile },
                    { x: 0, y: 5, text: "Grass", img: GrassTile },{ x: 1, y: 5, text: "Grass", img: GrassTile },{ x: 2, y: 5, text: "Grass", img: GrassTile },{ x: 3, y: 5, text: "Grass", img: GrassTile },{ x: 4, y: 5, text: "Grass", img: GrassTile },{ x: 5, y: 5, text: "Grass", img: GrassTile },
                    { x: playerPosition[0], y: playerPosition[1], text: "Player", img: PlayerTile },
                ]}
            />
        </div>
    </PageWrapper>
}
