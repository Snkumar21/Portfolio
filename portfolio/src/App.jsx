import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Featured from "./pages/Featured";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";


function App() {
    return (
        <>
            <Navbar />
            <main>
                <Routes>
                    <Route
                        path="/"
                        element={<Home />}
                    />
                    <Route
                        path="/about"
                        element={<About />}
                    />
                    <Route
                        path="/experience"
                        element={<Experience />}
                    />
                    <Route
                        path="/featured"
                        element={<Featured />}
                    />
                    <Route
                        path="/skills"
                        element={<Skills />}
                    />
                    <Route
                        path="/projects"
                        element={<Projects />}
                    />
                    <Route
                        path="/contact"
                        element={<Contact />}
                    />
                </Routes>
            </main>
            <Footer />
        </>
    );
}

export default App;