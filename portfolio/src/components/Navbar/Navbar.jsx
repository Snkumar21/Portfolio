import { NavLink } from "react-router-dom";
import {
    FaHome,
    FaUser,
    FaBriefcase,
    FaImages,
    FaCode,
    FaProjectDiagram,
    FaEnvelope
} from "react-icons/fa";
import { useLocation } from "react-router-dom";
import Dock from "./Dock";
import "./Navbar.css";

function Navbar({ navigateWithTransition }) {
    const location = useLocation();

    const items = [
        {
            label: "Home",
            path: "/"
        },
        {
            label: "About",
            path: "/about"
        },
        {
            label: "Experience",
            path: "/experience"
        },
        {
            label: "Featured",
            path: "/featured"
        },
        {
            label: "Skills",
            path: "/skills"
        },
        {
            label: "Projects",
            path: "/projects"
        },
        {
            label: "Contact",
            path: "/contact"
        }
    ].map((item) => ({
        ...item,

        active:
            location.pathname === item.path,

        onClick: () => {
            if (location.pathname !== item.path) {
                navigateWithTransition(item.path);
            }
        }
    }));

    return (
        <header className="navbar">
            <div
                className="navbar-logo"
                onClick={() =>
                    navigateWithTransition("/")
                }
            >
                <h2>
                    Software{" "}
                    <span>Developer</span>
                </h2>
            </div>

            {/* DOCK NAVIGATION */}
            <Dock
                items={items}
                panelHeight={58}
                baseItemSize={70}
                magnification={1.07}
                distance={110}
            />

        </header>
    );
}
export default Navbar;