import { useEffect, useState } from "react"

interface enemyProps {
    startPos:number[]
    speed:number
    mapOffset:number[]
}


export function EnemyComponent ( props: enemyProps) {

    const [enemyPosition, setEnemyPosition] = useState(props.startPos)
    const [enemyDir, setEnemyDir] = useState('up')

    useEffect(() => {
        if(enemyPosition[1]<=100){
            setEnemyDir('down')
        }
        if(enemyPosition[1]>=600){
            setEnemyDir('up')
        }
        function moveEnemy( dir:string){
            if(dir=='up'){
                setTimeout(() =>{setEnemyPosition([enemyPosition[0],enemyPosition[1]-1])}, props.speed)                
            }
            if(dir=='down'){
                setTimeout(() =>{setEnemyPosition([enemyPosition[0],enemyPosition[1]+1])}, (props.speed*-1)+5)
            }
        }
        if(enemyPosition[1]==350 && enemyDir=='up'){
            setTimeout(() => {moveEnemy(enemyDir)}, 1000)
        }
        else{
        moveEnemy(enemyDir)
        }
    })

    return <div className="enemy" style={{left:enemyPosition[0]+props.mapOffset[0], top:enemyPosition[1]+props.mapOffset[1]}}>
    x:{enemyPosition[0]},y:{enemyPosition[1]} 
</div>
}