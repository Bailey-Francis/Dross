interface Tile {
    x: number;
    y: number;
    text: string;
    color: string;
}

interface MapProps {
    mapSize: number;
    tiles: Tile[]
}

export function MapComponent ( props : MapProps ) {

    const buildTile = (tile: Tile) => {
        const { x, y, text, color } = tile;
        return <div className="tile" style={{ left: x*props.mapSize, top: y*props.mapSize, backgroundColor: color }}>
            {text}
        </div>
    }

    const tiles = props.tiles.map(buildTile);

    return <div className="MapContainer">
        {tiles}
    </div>

}