import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Slider } from "@mui/material"
import { useContext } from "react"
import GridContext from "../../contexts/GridContext"

export default function Robot() {
    const {grid, setPages, setRover, rover} = useContext(GridContext)
    return(
        <div>
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
                    defaultValue="North"
                    name="radio-buttons-group"
                    
                >
                    <FormControlLabel value="North" control={<Radio />} label="North" />
                    <FormControlLabel value="East" control={<Radio />} label="East" />
                    <FormControlLabel value="South" control={<Radio />} label="South" />
                    <FormControlLabel value="West" control={<Radio />} label="West" />
                </RadioGroup>
            </FormControl>
            <Button onClick={() => setPages(3)} variant="contained">NEXT</Button>
        </div>
    )
}