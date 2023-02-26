import { Map, Tile } from "./Locations"

interface MapProps {
    tileDimensions: number
    map: Map
    offset: number[]
}




export function MapComponent ( props : MapProps ) {



    const buildTile = (tile: Tile) => {
        const { x, y, walkable } = tile;
        let color:string = "green"
        if(walkable==false){
            color = 'red'
        }
        return <div className="tile" style={{ left: x*props.tileDimensions+props.offset[0], top: y*props.tileDimensions+props.offset[1], backgroundColor: color}}>
            {x}, {y}
        </div>
    }

    const tiles = props.map.tiles.map(buildTile);

    return <div className="MapContainer">
        {tiles}
    </div>

}
