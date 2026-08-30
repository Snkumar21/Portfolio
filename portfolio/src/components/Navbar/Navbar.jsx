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
import "./Navbar.css";

function Navbar() {
    return (
        <header className="navbar">
            <div className="navbar-logo">
                <h2>
                    Software <span>Developer</span>
                </h2>
            </div>

            <nav className="nav">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? "active" : ""
                    }
                >
                    <FaHome />
                    <span>Home</span>
                </NavLink>

                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        isActive ? "active" : ""
                    }
                >
                    <FaUser />
                    <span>About</span>
                </NavLink>

                <NavLink
                    to="/experience"
                    className={({ isActive }) =>
                        isActive ? "active" : ""
                    }
                >
                    <FaBriefcase />
                    <span>Experience</span>
                </NavLink>

                <NavLink
                    to="/featured"
                    className={({ isActive }) =>
                        isActive ? "active" : ""
                    }
                >
                    <FaImages />
                    <span>Featured</span>
                </NavLink>

                <NavLink
                    to="/skills"
                    className={({ isActive }) =>
                        isActive ? "active" : ""
                    }
                >
                    <FaCode />
                    <span>Skills</span>
                </NavLink>

                <NavLink
                    to="/projects"
                    className={({ isActive }) =>
                        isActive ? "active" : ""
                    }
                >
                    <FaProjectDiagram />
                    <span>Projects</span>
                </NavLink>

                <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                        isActive ? "active" : ""
                    }
                >
                    <FaEnvelope />
                    <span>Contact</span>
                </NavLink>
            </nav>
        </header>
    );
}
export default Navbar;