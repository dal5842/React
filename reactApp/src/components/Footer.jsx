import React from "react";
import styled from "styled-components";

const Foot = styled.footer`
  background-color: ${({ theme }) => theme.navBg};
  color: ${({ theme }) => theme.text};
  padding: 1em 2em;
  text-align: center;
  margin-top: 2em;
`;

export default function Footer() {
    return (
        <Foot>
            <p>© {new Date().getFullYear()} Preserved Beauty Taxidermy — All rights reserved.</p>
            <p>
                <a href="mailto:contact@preservedbeauty.com">Email us</a> |
                <a href="https://instagram.com/" style={{ marginLeft: "0.5em" }}>Instagram</a>
            </p>
        </Foot>
    );
}