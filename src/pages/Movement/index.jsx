import { Button, ButtonGroup } from "@mui/material"
import { useContext } from "react"
import styled from "styled-components"
import GridContext from "../../contexts/GridContext"

export default function Movement() {
    const {movement, setMovement, grid, rover, setRover} = useContext(GridContext)
    
    const mapGrip = () => {
        let gridMap = []
        for(let i = 0; i < grid.height; i++){
            let row = []
            for(let j = 0; j < grid.width; j++){
                row.push(<Grid>◼</Grid>)
            }
            gridMap.push(<div style={{display: "flex"}}>{row}</div>)
        }
        return gridMap
    }

    const move = (direction) => {
        let newRover = {...rover}
        switch(direction){
            case "90↩":
                if(newRover.direction === "N"){
                    newRover.direction = "W"
                }else if(newRover.direction === "W"){
                    newRover.direction = "S"
                }else if(newRover.direction === "S"){
                    newRover.direction = "E"
                }else if(newRover.direction === "E"){
                    newRover.direction = "N"
                }
                break
            case "↪90":
                if(newRover.direction === "N"){
                    newRover.direction = "E"
                }else if(newRover.direction === "E"){
                    newRover.direction = "S"
                }else if(newRover.direction === "S"){
                    newRover.direction = "W"
                }else if(newRover.direction === "W"){
                    newRover.direction = "N"
                }
                break
            case "⬆":
                if(newRover.direction === "N"){
                    if(newRover.y < grid.height - 1){
                        newRover.y++
                    }
                }else if(newRover.direction === "E"){
                    if(newRover.x < grid.width - 1){
                        newRover.x++
                    }
                }else if(newRover.direction === "S"){
                    if(newRover.y > 0){
                        newRover.y--
                    }
                }else if(newRover.direction === "W"){
                    if(newRover.x > 0){
                        newRover.x--
                    }
                }
                break
        }
        setRover(newRover)
        setMovement(movement + direction)
        console.log(newRover)
    }
    
    return (
        <div>
            <div>
                {mapGrip()}
            </div>
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                <Button onClick={() => move("90↩")}>90↩</Button>
                <Button onClick={() => move("⬆")}>⬆</Button>
                <Button onClick={() => move("↪90")}>↪90</Button>
            </ButtonGroup>
        </div>
    )
}

const robotImage = styled.img`
    width: 50px;
    height: 50px;
    position: absolute;
    top: 0;
    left: 0;
`

const Grid = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`