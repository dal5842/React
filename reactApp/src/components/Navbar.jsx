import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import ThemeToggle from "./ThemeToggle";

const Nav = styled.nav`
  background-color: ${({ theme }) => theme.navBg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 2em;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.accent};
  margin: 0;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 1em;
  margin: 0;
  padding: 0;
`;

const StyledLink = styled(NavLink)`
  color: ${({ theme }) => theme.text};
  &.active {
    font-weight: bold;
    border-bottom: 2px solid ${({ theme }) => theme.accent};
  }
  &:hover {
    color: ${({ theme }) => theme.accent};
  }
`;

export default function Navbar() {
    return (
        <Nav>
            <Title>Preserved Beauty Taxidermy</Title>
            <NavList>
                <li><StyledLink to="/" end>Home</StyledLink></li>
                <li><StyledLink to="/gallery">Gallery</StyledLink></li>
                <li><StyledLink to="/about">About</StyledLink></li>
                <li><StyledLink to="/services">Services</StyledLink></li>
            </NavList>
            <ThemeToggle />
        </Nav>
    );
}