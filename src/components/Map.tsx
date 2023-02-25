interface Tile {
    x: number;
    y: number;
    text: string;
    img: string;
}

interface MapProps {
    mapSize: number;
    tiles: Tile[]
}

export function MapComponent ( props : MapProps ) {

    const buildTile = (tile: Tile) => {
        const { x, y, text, img } = tile;
        return <div className="tile" style={{ left: x*props.mapSize, top: y*props.mapSize}}>
            <img src={img}/>
        </div>
    }

    const tiles = props.tiles.map(buildTile);

    return <div className="MapContainer">
        {tiles}
    </div>

}
