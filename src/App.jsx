import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./components/Login"
import SignUp from "./components/SignUp"
import Grid from "./components/Grid"
import { GridProvider } from "./contexts/GridContext"

function App() {

  return (
    <div className="App"> 
      <GridProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignUp/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/menu" element={<Grid/>}/>
          </Routes>
        </BrowserRouter>
      </GridProvider>
    </div>
  )
}

export default App
