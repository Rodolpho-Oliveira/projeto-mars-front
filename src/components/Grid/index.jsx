import GridPage from "../../pages/Grid"
import styled from "styled-components"
import GridContext from "../../contexts/GridContext"
import { useContext } from "react"
import Robot from "../../pages/Robot"
import Movement from "../../pages/Movement"

export default function Grid(){
    const {pages} = useContext(GridContext)
    return(
        <GridDiv>
            <Header>
                <Logo src="https://cdn-icons-png.flaticon.com/512/5403/5403095.png" alt="logo"/>
                <h1>Mars Rover</h1>
            </Header>
            <Message>
                <h2>Explore Mars</h2>
                <p>Choose your mars configuration</p>
                {pages === 1 ? <GridPage /> : pages === 2 ? <Robot /> : pages === 3 ? <Movement/> : null}    
            </Message>
        </GridDiv>
    )
}


const GridDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    h1{
        font-size: 50px;
        font-weight: 700;
        margin: 20px 0px;
        color: #451804;
    }
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 20px;
    }
`

const Logo = styled.img`

    width: 50px;
    height: 50px;
`

const Header = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    position: fixed;
`

const Message = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
    h2{
        font-size: 30px;
        font-weight: 700;
        margin: 20px 0px;
        color: #451804;
    }
    p{
        font-size: 20px;
        font-weight: 400;
        margin: 20px 0px;
        color: #451804;
    }
`

