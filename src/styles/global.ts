import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #100E1D;
        --secundaryColor: #1E213A;
        --text-primary-color: #E7E7EB;
        --text-secundary-color: #88869D;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        font-size: 62.5%;
    }

    body{
        font-family: 'Raleway', sans-serif;
    }
`