import { Button, ButtonGroup, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material"
import axios from "axios"
import { useContext, useState } from "react"
import styled from "styled-components"
import GridContext from "../../contexts/GridContext"

export default function Movement() {
    const {movement, setMovement, grid, rover, setRover, setPages, setGrid} = useContext(GridContext)
    const token = localStorage.getItem("token")
    const [disable, setDisable] = useState(false)
    const [open, setOpen] = useState(false)
    const [submitRover, setSubmitRover] = useState({})

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
                setMovement(movement + direction)
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
                setMovement(movement + direction)
                break
            case "M":
                if(newRover.direction === "N"){
                    if(newRover.y <= grid.height - 1){
                        setMovement(movement + direction)
                        newRover.y++
                    }
                }else if(newRover.direction === "E"){
                    if(newRover.x <= grid.width - 1){
                        setMovement(movement + direction)
                        newRover.x++
                    }
                }else if(newRover.direction === "S"){
                    if(newRover.y > 1){
                        setMovement(movement + direction)
                        newRover.y--
                    }
                }else if(newRover.direction === "W"){
                    if(newRover.x > 1){
                        setMovement(movement + direction)
                        newRover.x--
                    }
                }
                break
        }
        setRover(newRover)
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

    function submit(){
        setDisable(true)
        axios
        .post(import.meta.env.VITE_URL + "/robot", {height: grid.height, length: grid.width, instruction: movement, x: rover.x, y: rover.y, direction: rover.direction}, {headers: {Authorization: `Bearer ${token}`}})
        .then((res) => {
            console.log(res)
            setDisable(false)
            setSubmitRover(res.data)
        })
        .catch((err) => {
            setDisable(false)
            console.log(err)
            if(err.response.data === "Authorization token not found"){
                window.location.href = "/login"
            }
        })
    }

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
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
            <Button variant="outlined" onClick={() => {
                handleClickOpen()
                submit()
                }}>
                FINISH
            </Button>
            <Dialog
                open={open}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >   
                <DialogTitle id="alert-dialog-title">
                {"Create another robot?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Your status: <br/>
                        Landing Position: {submitRover.LandingPosition}<br/>
                        Instruction: {submitRover.Instruction}<br/>
                        Final Position: {submitRover.FinalPosition} 
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => {
                        handleClose
                        localStorage.removeItem("token")
                        window.location.href = "/login"
                        }}>No</Button>
                    <Button onClick={() => {
                        handleClose
                        setMovement("")
                        setRover({x: 1, y: 1, direction: "N"})
                        setGrid({width: 1, height: 1})
                        setPages(1)
                    }} >Yes</Button>
                </DialogActions>
            </Dialog>
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