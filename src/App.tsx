import { useState } from "react";
import { EnemyComponent } from "./components/Enemy";
import { determineNextTile, mapList } from "./components/Locations";
import { MapComponent } from "./components/Map";
import { Player, PlayerComponent } from "./components/Player";

function PageWrapper( props : { children: React.ReactNode } ) {
    return <div className="page-wrapper">
        <div> Welcome to DROSS</div>
        {props.children}
    </div>
}

const playerSpeed:number = 15
const windowScrollSize:number[] = [1500, 700]

export default function App()  {

    let [playerPosition, setPlayerPosition] = useState([200,200])
    let [mapOffset, setMapOffset] = useState([0,0])


    function determineMovement(key:string){
        let nextPos:number[] = playerPosition
        let nextTile:number[] = nextPos
        if(key=='w'){
            nextTile=[playerPosition[0],playerPosition[1]-playerSpeed]
            nextPos=[playerPosition[0],playerPosition[1]-playerSpeed]
        }
        if(key=='s'){
            nextTile=[playerPosition[0],playerPosition[1]+16+playerSpeed]
            nextPos=[playerPosition[0],playerPosition[1]+playerSpeed]
        }
        if(key=='a'){
            nextTile=[playerPosition[0]-playerSpeed,playerPosition[1]]
            nextPos=[playerPosition[0]-playerSpeed,playerPosition[1]]
        }
        if(key=='d'){
            nextTile=[playerPosition[0]+16+playerSpeed,playerPosition[1]]
            nextPos=[playerPosition[0]+playerSpeed,playerPosition[1]]
        }
        if(determineNextTile(nextTile, mapOffset).walkable==true){
            if(nextPos[0] > windowScrollSize[0]){
                setMapOffset([mapOffset[0]-playerSpeed,mapOffset[1]])
            }
            else if(nextPos[1] > windowScrollSize[1]){
                setMapOffset([mapOffset[0],mapOffset[1]-playerSpeed])
            }
            else if(nextPos[0] < 95){
                setMapOffset([mapOffset[0]+playerSpeed,mapOffset[1]])
            }
            else if(nextPos[1] < 125){
                setMapOffset([mapOffset[0],mapOffset[1]+playerSpeed])
            }
            else{
                setPlayerPosition(nextPos)
            }
        }
    }
    
    //format page
    return <PageWrapper>
        <div tabIndex={0} onKeyDown={e => determineMovement(e.key)}>
            <MapComponent 
            tileDimensions={64}
            map={mapList[0]}
            offset={mapOffset}/>
            <PlayerComponent position={playerPosition}/>
            <EnemyComponent startPos={[300,350]} speed={1} mapOffset={mapOffset}/>
        </div>
    </PageWrapper>
}
