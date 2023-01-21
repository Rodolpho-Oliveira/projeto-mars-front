import GridPage from "../../pages/Grid"
import styled from "styled-components"
import GridContext from "../../contexts/GridContext"

export default function Grid(){
    return(
        <GridDiv>
            <div>
                <img src="https://cdn-icons-png.flaticon.com/512/5403/5403095.png" alt="logo"/>
                <h1>Mars Rover</h1>
            </div>
            <div>
                <h2>Explore Mars</h2>
                <p>Choose your map and rover position to explore Mars</p>
                <GridPage />
            </div>
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
    overflow: hidden;
    h1{
        font-size: 50px;
        font-weight: 700;
        margin: 20px 0px;
        color: #451804;
    }
    img{
        width: 200px;
        height: 200px;
    }
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 20px;
    }
    `
