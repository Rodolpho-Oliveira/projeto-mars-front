import { createContext, useState } from "react"

const GridContext = createContext()

export function GridProvider({children}){
    const [grid, setGrid] = useState({width: 1, height: 1})
    const [rover, setRover] = useState({x: 0, y: 0, direction: "N"})
    const [movement, setMovement] = useState("")
    const [pages, setPages] = useState(1)

    return(
        <GridContext.Provider value={{grid, setGrid, pages, setPages, rover, setRover, movement, setMovement}}>
            {children}
        </GridContext.Provider>
    )
}

export default GridContext