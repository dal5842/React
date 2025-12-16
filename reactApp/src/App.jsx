import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Resume from "./pages/Resume";
import TechGuide from "./pages/TechGuide";

function App() {
    return (
        <Router>
            <Navbar />

            <main id="main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="/tech-guide" element={<TechGuide />} />
                </Routes>
            </main>
        </Router>
    );
}

export default App;