import { createGlobalStyle } from 'styled-components'
 
const GlobalStyle = createGlobalStyle`
    *{
        font-family: 'Space Grotesk';
    }
    body {
        font-family: 'Space Grotesk';
        box-sizing: border-box;
        background-color: #E5E5E5;
    }
    a {
        text-decoration: none;
    }
    input {
        font-family: 'Space Grotesk';
        font-size: 20px;
        color: #000000;
        width: 90vw;
        height: 58px;
        border-radius: 5px;
    }
`

export default GlobalStyle