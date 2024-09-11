import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        border: none;
        outline: none;
    }

    body {
        background-color: #282828;
    }

    ul {
        list-style: none;
    }

    a {
        text-decoration: none;
    }

    img {
        width: 100%;
    }
`