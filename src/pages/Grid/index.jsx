import { Slider, Button } from "@mui/material"
import { useContext, useState } from "react"
import styled from "styled-components"
import GridContext from "../../contexts/GridContext"

export default function GridPage(){
    const { grid, setGrid, setPages} = useContext(GridContext)

    return(
        <GridDiv>
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
            <Button onClick={() => setPages(2)} variant="contained">NEXT</Button>
        </GridDiv>
    )
}

const GridDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 340px;
`