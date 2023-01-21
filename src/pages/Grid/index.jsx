import { Slider } from "@mui/material"
import { useContext, useState } from "react"
import GridContext from "../../contexts/GridContext"

export default function GridPage(){
    const { grid, setGrid} = useContext(GridContext)

    return(
        <div>
            <p>Choose map width</p>
            <Slider
                size="normal"
                defaultValue={1}
                max={10}
                min={1}
                aria-label="Small"
                valueLabelDisplay="auto"
                onChange={(e, value) => setGrid({...grid, width: value})}
            />
            <p>Choose map height</p>
            <Slider
                size="normal"
                defaultValue={1}
                max={10}
                min={1}
                aria-label="Small"
                valueLabelDisplay="auto"
                onChange={(e, value) => setGrid({...grid, height: value})}
            />
        </div>
    )
}