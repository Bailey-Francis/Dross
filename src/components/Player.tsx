export interface Player{
    position:number[]
}


export function PlayerComponent ( props : Player) {
    return <div className="player" style={{left:props.position[0], top:props.position[1]}}>
            x:{props.position[0]},y:{props.position[1]} 
        </div>
}