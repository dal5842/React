import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background: none;
  border: 2px solid ${({ theme }) => theme.accent};
  color: ${({ theme }) => theme.accent};
  border-radius: 20px;
  cursor: pointer;
  padding: 0.5em 1em;
  font-size: 0.9rem;
`;

export default function ThemeToggle({ toggleTheme, themeName }) {
    return (
        <Button onClick={toggleTheme}>
            Switch to {themeName === "dark" ? "Light" : "Dark"} Mode
        </Button>
    );
}