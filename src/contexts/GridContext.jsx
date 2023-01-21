import { createContext, useState } from "react"

const GridContext = createContext()

export function GridProvider({children}){
    const [grid, setGrid] = useState({width: 1, height: 1})
    const [rover, setRover] = useState({x: 0, y: 0, direction: "N"})
    const [movement, setMovement] = useState("")

    return(
        <GridContext.Provider value={{grid, setGrid}}>
            {children}
        </GridContext.Provider>
    )
}

export default GridContext