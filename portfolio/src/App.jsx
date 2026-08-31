import { useState } from "react";
import {
    Routes,
    Route,
    useNavigate
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import PageTransition from "./components/PageTransition/PageTransition";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Experience from "./pages/Experience/Experience";
import Featured from "./pages/Featured/Featured";
import Skills from "./pages/Skills/Skills";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";

function App() {
    const navigate = useNavigate();

    const [transition, setTransition] = useState({
        phase: "",
        title: ""
    });

    const pageTitles = {
        "/": "HOME",
        "/about": "MY STORY",
        "/experience": "JOURNEY",
        "/featured": "HIGHLIGHTS",
        "/skills": "SKILLS",
        "/projects": "CREATIONS",
        "/contact": "LET'S TALK"
    };


    const navigateWithTransition = (path) => {

        /* Prevent transition if already on page */
        if (window.location.pathname === path) {
            return;
        }

        const title = pageTitles[path] || "EXPLORE";

        /* STEP 1 - Curtain comes up */
        setTransition({
            phase: "enter",
            title
        });

        /* STEP 2 - Screen fully covered */
        setTimeout(() => {
            setTransition({
                phase: "covered",
                title
            });

            /* Change page behind curtain */
            navigate(path);
            window.scrollTo({
                top: 0,
                behavior: "instant"
            });

            /* STEP 3 - Start reveal */
            setTimeout(() => {
                setTransition({
                    phase: "exit",
                    title
                });
            }, 200);

            /* STEP 4 - Remove transition */
            setTimeout(() => {
                setTransition({
                    phase: "",
                    title: ""
                });
            }, 1000);
        }, 750);
    };

    return (
        <>
            <PageTransition
                phase={transition.phase}
                title={transition.title}
            />


            <Navbar
                navigateWithTransition={
                    navigateWithTransition
                }
            />

            <main>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Home
                                navigateWithTransition={
                                    navigateWithTransition
                                }
                            />
                        }
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