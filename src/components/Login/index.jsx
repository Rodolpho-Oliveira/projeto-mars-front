import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"

export default function Login(){
    const navigate = useNavigate()
    const [userLogin, setUserLogin] = useState({email: "", password: ""})
    const [error, setError] = useState(false)
    
    return(
        <LoginPage>
            <img src="https://cdn-icons-png.flaticon.com/512/5403/5403095.png" alt="logo"/>
            <h1>MARS ROVER</h1>
            {error ? <ErrorMessage>Review your info!</ErrorMessage> : null}
            <form onSubmit={acessAccount}>
                <InfoInput onChange={(e) => setUserLogin({...userLogin, email: e.target.value})} placeholder="Email" type="email"/>
                <InfoInput onChange={(e) => setUserLogin({...userLogin, password: e.target.value})} placeholder="Password" type="password"/>
                <SubmitButton type="submit" value="Login"/>
            </form>
            <DontHaveAccount>Don't have an account?<LinkPage to="/"> Click here!</LinkPage></DontHaveAccount>
        </LoginPage>
    )
    
    function acessAccount(e){
        e.preventDefault()
        const promise = axios.post(`${import.meta.env.VITE_URL}/signin`, userLogin)
        promise.catch((e) => {
            setError(true)
            console.log(e.response)
        })
        promise.then((response) => {
            localStorage.setItem("token", response.data)
            navigate(`/menu/`)
        })
    }
}

const LoginPage = styled.div` 
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

const ErrorMessage = styled.p`
    color: red;
    font-size: 20px;   
`

const InfoInput = styled.input`
    margin-bottom: 10px;
    width: 300px;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #000000;
    padding-left: 10px;
    font-size: 20px;
    color: #000000;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
`

const SubmitButton = styled.input`
background-color: #c1440e;
    color: #ffffff;
    font-weight: 700;
    border: 1px solid #451804;
    width: 250px;
    height: 40px;
    border-radius: 5px;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    &:active{
        background-color: #ffffff;
        color: #451804;
    }
    
    &:hover{
        background-color: #ffffff;
        color: #451804;
    }
`

const DontHaveAccount = styled.p`
    color: #000000;
    font-size: 20px;
    margin-top: 10px;
`

const LinkPage = styled(Link)`
    text-decoration: none;
    margin-top: 10px;
    font-weight: 700;
`