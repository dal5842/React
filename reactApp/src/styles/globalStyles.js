// src/styles/globalStyles.js
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    /* Reset / standard global rules */
    *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        margin: 0;
        padding: 0;
        font-family: 'Georgia', serif;
        background-color: ${({ theme }) => theme.bodyBg};
        color: ${({ theme }) => theme.text};
    }

    a {
        text-decoration: none;
        color: ${({ theme }) => theme.text};
    }

    img {
        max-width: 100%;
        display: block;
    }

    /* Add more global styles if needed */
`;