import { Button, ButtonGroup } from "@mui/material"
import { useContext } from "react"
import styled from "styled-components"
import GridContext from "../../contexts/GridContext"

export default function Movement() {
    const {movement, setMovement, grid, rover, setRover} = useContext(GridContext)

    const move = (direction) => {
        let newRover = {...rover}
        switch(direction){
            case "L":
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
            case "R":
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
            case "M":
                if(newRover.direction === "N"){
                    if(newRover.y <= grid.height - 1){
                        newRover.y++
                    }
                }else if(newRover.direction === "E"){
                    if(newRover.x <= grid.width - 1){
                        newRover.x++
                    }
                }else if(newRover.direction === "S"){
                    if(newRover.y > 1){
                        newRover.y--
                    }
                }else if(newRover.direction === "W"){
                    if(newRover.x > 1){
                        newRover.x--
                    }
                }
                break
        }
        setRover(newRover)
        setMovement(movement + direction)
    }

    const mapGrip = () => {
        let gridMap = []
        let index = 1
        for(let i = 1; i <= grid.height; i++){
            let row = []
            for(let j = 1; j <= grid.width; j++){
                index++
                if(i === rover.y && j === rover.x){
                    row.push(<Grid key={index}><RobotImage alt="robot" width="10" height="10" direction={rover.direction} src="https://cdn-icons-png.flaticon.com/512/5403/5403095.png" /></Grid>)
                }else{
                    row.push(<Grid key={index}>◼</Grid>)
                }
            }
            gridMap.push(<div key={index} style={{display: "flex"}}>{row}</div>)
        }
        return gridMap
    }
    
    return (
        <MoveDiv>
            <MapDiv>
                {mapGrip()}
            </MapDiv>
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                <Button onClick={() => move("L")}>90↩</Button>
                <Button onClick={() => move("M")}>⬆</Button>
                <Button onClick={() => move("R")}>↪90</Button>
            </ButtonGroup>
            <Button variant="outlined" onClick={() => console.log("finish")}>NEXT</Button>
        </MoveDiv>
    )
}


const MoveDiv = styled.div`
    width: 340px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    Button{
        margin: 5px;
    }
`

const MapDiv = styled.div`
    display: flex;
    flex-direction: column-reverse;
`

const RobotImage = styled.img`
    width: 20px;
    height: 20px;
    transform: rotate(${props => props.direction === "N" ? "0deg" : props.direction === "E" ? "90deg" : props.direction === "S" ? "180deg" : "270deg"});
`

const Grid = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 8px;
`