import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="main-nav" aria-label="Main navigation">
            <ul>
                <li>
                    <NavLink to="/" end>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/gallery">Gallery</NavLink>
                </li>
                <li>
                    <NavLink to="/resume">Resume</NavLink>
                </li>
                <li>
                    <NavLink to="/tech-guide">
                        Tech Issue Guide (AI)
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;