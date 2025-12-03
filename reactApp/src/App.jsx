import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/themes";
import { GlobalStyles } from "./styles/globalStyles";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Services from "./pages/Services";

export default function App() {
    const [themeName, setThemeName] = useState("dark");
    const theme = themeName === "dark" ? darkTheme : lightTheme;
    const toggleTheme = () => setThemeName(themeName === "dark" ? "light" : "dark");

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Navbar />
            <main style={{ padding: "2em" }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                </Routes>
            </main>
            <Footer />
        </ThemeProvider>
    );
}