import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Slider } from "@mui/material"
import { useContext } from "react"
import styled from "styled-components"
import GridContext from "../../contexts/GridContext"

export default function Robot() {
    const {grid, setPages, setRover, rover} = useContext(GridContext)
    return(
        <RobotDiv>
            <p>Choose robot horizontal position</p>
            <Slider
                size="normal"
                defaultValue={1}
                max={grid.width}
                min={1}
                aria-label="Small"
                valueLabelDisplay="auto"
                onChange={(e, value) => setRover({...rover, x: value})}
            />
            <p>Choose robot vertical position</p>
            <Slider
                size="normal"
                width="100px"
                defaultValue={1}
                max={grid.height}
                min={1}
                aria-label="Small"
                valueLabelDisplay="auto"
                onChange={(e, value) => setRover({...rover, y: value})}
            />
            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Direction</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="N"
                    name="radio-buttons-group"
                    onChange={(e) => setRover({...rover, direction: e.target.value})}
                    
                >
                    <FormControlLabel value="N" control={<Radio />} label="North" />
                    <FormControlLabel value="E" control={<Radio />} label="East" />
                    <FormControlLabel value="S" control={<Radio />} label="South" />
                    <FormControlLabel value="W" control={<Radio />} label="West" />
                </RadioGroup>
            </FormControl>
            <Button onClick={() => setPages(3)} variant="contained">NEXT</Button>
        </RobotDiv>
    )
}

const RobotDiv = styled.div`
    width: 340px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    Button{
        width: 300px;
    }
`