const starting_map:string[][] = [
    ['o','o','o','o','o','o','o','o','o','o','o','o','o','o','o','o','o','o','o','o','o','o','o','o','o','\n'],
    ['o','o','l','o','o','\n'],
    ['o','o','o','o','o','\n'],
    ['o','o','o','o','o','\n'],
    ['o','o','o','o','o','\n'],
]

export interface Player {
    x:number; y:number
}

export function getStartingMap(){
    const returning_starting_map:string[][] = [...starting_map]
    return returning_starting_map
}

export function determineLocation(map:string[][]){
    let location:number[] = []
    for(let y:number = 0; y<map.length;y++){
        for(let x:number = 0; x<map[y].length; x++){
            if(map[y][x]=='x'){
                location.push(x);location.push(y)
            }
        }
    }
    return location
}


export function addPlayer(toTile:number[]){
    let reference_map:string[][] = [...starting_map]
    //alert (reference_map.toString())
    let x1:number = toTile[0]; let y1:number = toTile[1]
    reference_map[y1][x1] = 'x'
    for (let y:number = 0; y<reference_map.length; y++){
        for (let x:number = 0; x<reference_map[y].length; x++){
            if (reference_map[y][x]=='x' && (x!=x1 || y!=y1)){
                reference_map[y][x] = 'o'
            }
        }
    }
    return reference_map
}


////





