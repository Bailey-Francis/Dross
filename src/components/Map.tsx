interface Tile {
    x: number;
    y: number;
    render: () => JSX.Element;
}

interface MapProps {
    mapSize: number;
    tiles: Tile[]
}

export function MapComponent ( props : MapProps ) {

    const buildTile = (tile: Tile) => {
        const { x, y, render } = tile;
        return <div className="tile" style={{ left: x*props.mapSize, top: y*props.mapSize }}>
            {render()}
        </div>
    }

    const tiles = props.tiles.map(buildTile);

    return <div className="MapContainer">
        {tiles}
    </div>

}