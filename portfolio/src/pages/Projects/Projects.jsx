import { useState } from "react";
import {
    FaGraduationCap,
    FaGamepad,
    FaCloudSun,
    FaHome,
    FaExclamationCircle,
    FaUniversity,
    FaRobot,
    FaBriefcase,
    FaBuilding,
    FaExternalLinkAlt,
    FaVideo,
    FaImage,
    FaPalette,
    FaPlay,
    FaEye
} from "react-icons/fa";

import "./Projects.css";

import hubverse from "../../assets/Img/Project/Website Img/HubVerse.png";
import netflix from "../../assets/Img/Project/Website Img/NetFlix Clone.png";
import weather from "../../assets/Img/Project/Website Img/weather application.png";
import rentoring from "../../assets/Img/Project/Website Img/rentoring system.png";
import grievance from "../../assets/Img/Project/Website Img/grivence system.png";
import banking from "../../assets/Img/Project/Website Img/banking system.png";
import gamingLms from "../../assets/Img/Project/Website Img/gaming learning management system.png";
import ericChatBotV3 from "../../assets/Img/Project/Website Img/Eric chat bot v-3.png";

import nexusArena from "../../assets/Img/Project/Website Img/Nexus Arena.png";
import nexusTechworks from "../../assets/Img/Project/Website Img/Nexus Techworks.png";
import PrathameshBD from "../../assets/Img/Project/Website Img/Prathamesh Builders and Developers.png";

import MauliSolar from "../../assets/Img/Project/Designs/Mauli Solar Solution.png";
import DBHITECH from "../../assets/Img/Project/Designs/DB HI-Tech Solar Energy PVT LTD.png";
import epicMaut from "../../assets/Img/Project/Designs/Epic Maut.png";
import shoes from "../../assets/Img/Project/Designs/Shoes.png";

function Projects() {
    const [showAllProjects, setShowAllProjects] = useState(false);
    const [showAllCreative, setShowAllCreative] = useState(false);

    // =====================================================
    // SOFTWARE PROJECTS
    // =====================================================
    const projects = [
        
        // -------------------------------------------------
        // ACTIVE PROJECTS
        // -------------------------------------------------
        {
            image: nexusTechworks,
            title: "Nexus Techworks - Web Application",
            description:
                "A technology-focused web application representing Nexus Techworks and its initiatives in learning, teaching, digital solutions, and technology-driven development.",
            icon: <FaBriefcase />,
            date: "Jul 2026 – Present",
            lastUpdated: "GitHub: Aug 2026",
            technologies: "React.js • JavaScript • CSS",
            link: "https://github.com/Snkumar21/Nexus-Technoworks",
            active: true
        },

        {
            image: PrathameshBD,
            title: "Prathamesh Builders & Developers",
            description:
                "A premium digital experience designed to reflect the company's values, trust, and excellence in construction. The website focuses on storytelling, achievements, and building confidence among future customers and investors.",
            icon: <FaBuilding />,
            date: "Jul 2026 – Present",
            lastUpdated: "GitHub: Jul 22, 2026",
            technologies: "React.js • JavaScript • CSS",
            link: "https://github.com/Snkumar21/Prathamesh-Builders-and-Developers---Portfolio-Application.git",
            active: true
        },

        {
            image: nexusArena,
            title: "Nexus Arena - Education Platform",
            description:
                "A centralized education platform designed to simplify online learning by aggregating and comparing courses from multiple learning platforms based on ratings, reviews, pricing, certification value, and popularity.",
            icon: <FaGraduationCap />,
            date: "Feb 2026 – Present",
            lastUpdated: "GitHub: Apr 2026",
            technologies: "React.js • Node.js • MongoDB • Firebase",
            link: "https://github.com/Snkumar21/Nexus-Arena",
            active: true
        },

        // -------------------------------------------------
        // COMPLETED / OTHER PROJECTS
        // -------------------------------------------------
        {
            image: ericChatBotV3,
            title: "ERIC Chat Bot - Version 3.0",
            description:
                "An upgraded AI-powered chatbot focused on logical thinking, improved stability, and better overall performance.",
            icon: <FaRobot />,
            date: "Sep 2025 – Nov 2025",
            lastUpdated: "GitHub: Nov 2025",
            technologies: "HTML • CSS • JavaScript • MongoDB",
            link: "https://github.com/Snkumar21/ERIC-CHAT-BOT-3.0",
            active: false
        },

        {
            image: gamingLms,
            title: "Gaming Learning Management System",
            description:
                "A gamified learning management platform that enables students and teachers to interact through challenges, activities, and learning modules.",
            icon: <FaGamepad />,
            date: "2025",
            lastUpdated: "Project Archive",
            technologies: "HTML • CSS • JavaScript",
            link: null,
            active: false
        },

        {
            image: banking,
            title: "Banking Management System",
            description:
                "A web-based banking application featuring user login, transaction records, and database integration.",
            icon: <FaUniversity />,
            date: "Feb 2025 – Mar 2025",
            lastUpdated: "GitHub: Mar 2026",
            technologies: "Java • MySQL • Web Development",
            link: "https://banky-web-application.vercel.app/",
            active: false
        },

        {
            image: grievance,
            title: "Grievance Management System",
            description:
                "A student grievance portal that allows users to submit and manage issues through an organized web-based system.",
            icon: <FaExclamationCircle />,
            date: "Dec 2024 – Mar 2025",
            lastUpdated: "GitHub: Apr 2025",
            technologies: "HTML • CSS • JavaScript • Email Authentication",
            link: "https://grievance-web-application.vercel.app/",
            active: false
        },

        {
            image: rentoring,
            title: "Rentoring Management System",
            description:
                "A rental management platform for managing rental services, availability, and bookings.",
            icon: <FaHome />,
            date: "Jul 2024 – Sep 2024",
            lastUpdated: "GitHub: Jun 2025",
            technologies: "Node.js • MySQL • JavaScript",
            link: "https://rentor-website.vercel.app/",
            active: false
        },

        {
            image: weather,
            title: "Weather Application",
            description:
                "A real-time weather application that uses APIs to display temperature, weather conditions, and location-based information.",
            icon: <FaCloudSun />,
            date: "Dec 2023 – Jan 2024",
            lastUpdated: "GitHub: May 2025",
            technologies: "HTML • CSS • JavaScript • Weather API",
            link: "https://weather-application-three-kappa.vercel.app/",
            active: false
        },

        {
            image: netflix,
            title: "Netflix Clone",
            description:
                "A visually engaging frontend replica of Netflix built with a responsive user interface and modern web technologies.",
            icon: <FaGamepad />,
            date: "Dec 2023",
            lastUpdated: "GitHub: Jun 2025",
            technologies: "HTML • CSS • JavaScript",
            link: "https://netflix-clone-website-psi.vercel.app/",
            active: false
        },

        {
            image: hubverse,
            title: "HubVerse - Education Hub",
            description:
                "A learning management platform designed to help users improve their skills through structured learning resources and educational content.",
            icon: <FaGraduationCap />,
            date: "Jul 2023 – Nov 2023",
            lastUpdated: "GitHub: Jun 2025",
            technologies: "React.js • Node.js • MongoDB",
            link: "https://hub-verse.vercel.app/",
            active: false
        }
    ];

    // =====================================================
    // CREATIVE WORK / MEDIA
    // =====================================================
    const creativeWorks = [

        // -------------------------------------------------
        // CURRENT / ACTIVE
        // -------------------------------------------------
        {
            image: nexusTechworks,
            title: "Nexus Techworks - Brand & Digital Content",
            type: "Branding",
            description:
                "Digital content created for Nexus Techworks including social media creatives, promotional designs, branding materials, and technology-focused content.",
            icon: <FaPalette />,
            date: "Jul 2026 – Present",
            link: null,
            active: true
        },

        {
            image: PrathameshBD,
            title: "Prathamesh Builders & Developers - Creative Work",
            type: "Design",
            description:
                "UI/UX concepts, visual content, branding elements, and digital design work created for the Prathamesh Builders & Developers project.",
            icon: <FaImage />,
            date: "Jul 2026 – Present",
            link: null,
            active: true
        },

        // -------------------------------------------------
        // OTHER CREATIVE WORK
        // -------------------------------------------------
        {
            image: nexusArena,
            title: "Nexus Arena - Promotional Content",
            type: "Digital Content",
            description:
                "Promotional and educational content created around Nexus Arena and online learning.",
            icon: <FaImage />,
            date: "2026",
            link: "https://github.com/Snkumar21/Nexus-Arena",
            active: false
        },

        {
            image: ericChatBotV3,
            title: "ERIC AI - Content & Visuals",
            type: "AI Content",
            description:
                "Visual and promotional content created for the ERIC AI project and its development journey.",
            icon: <FaVideo />,
            date: "2025 – 2026",
            link: "https://github.com/Snkumar21/ERIC-CHAT-BOT-3.0",
            active: false
        },

        {
            image: MauliSolar,
            title: "Mauli Solar Solution  - Logo Design",
            type: "Design & Creativity",
            description:
                "Promotional and educational content created around Nexus Arena and online learning.",
            icon: <FaImage />,
            date: "2026",
            link: "https://www.instagram.com/mauli_solar_solutions/",
            active: false
        },

        {
            image: DBHITECH,
            title: "DB HI-Tech Solar Energy PVT LTD - Logo Design",
            type: "Design & Creativity",
            description:
                "Promotional and educational content created around Nexus Arena and online learning.",
            icon: <FaImage />,
            date: "2026",
            link: "https://www.instagram.com/hitechsolar.in/",
            active: false
        },

        {
            image: epicMaut,
            title: "EPIC MAUT - Design & Creativity",
            type: "Design & Creativity",
            description:
                "Promotional and educational content created around Nexus Arena and online learning.",
            icon: <FaImage />,
            date: "2026",
            link: null,
            active: false
        },

        {
            image: shoes,
            title: "Shoes - Design & Creativity",
            type: "Design & Creativity",
            description:
                "Promotional and educational content created around Nexus Arena and online learning.",
            icon: <FaImage />,
            date: "2026",
            link: null,
            active: false
        }
    ];

    // =====================================================
    // HANDLERS
    // =====================================================
    const handleProjectClick = (item) => {
        if (!item.link) {
            alert("This project/content is currently unavailable.");
            return;
        }
        window.open(
            item.link,
            "_blank",
            "noopener,noreferrer"
        );
    };

    // =====================================================
    // FILTER DATA
    // =====================================================
    const activeProjects = projects.filter(
        project => project.active
    );
    const otherProjects = projects.filter(
        project => !project.active
    );
    const activeCreative = creativeWorks.filter(
        item => item.active
    );
    const otherCreative = creativeWorks.filter(
        item => !item.active
    );

    const visibleProjects = showAllProjects
        ? otherProjects
        : otherProjects.slice(0, 3);
    const visibleCreative = showAllCreative
        ? otherCreative
        : otherCreative.slice(0, 3);

    // =====================================================
    // CARD COMPONENT
    // =====================================================
    const ProjectCard = ({ project }) => {
        return (
            <div className="project-card">
                {/* IMAGE */}
                <div className="project-image">
                    <img
                        src={project.image}
                        alt={project.title}
                    />

                    {project.active && (
                        <span className="active-badge">
                            ● Active
                        </span>
                    )}
                </div>

                {/* CONTENT */}
                <div className="project-content">
                    <div className="project-icon">
                        {project.icon}
                    </div>

                    <h3>
                        {project.title}
                    </h3>

                    <p>
                        {project.description}
                    </p>

                    <span className="project-tech">
                        {project.technologies}
                    </span>

                    <div className="project-meta">
                        <span>
                            📅 {project.date}
                        </span>

                        <span>
                            🔄 {project.lastUpdated}
                        </span>
                    </div>

                    <button
                        type="button"
                        className="view-project"
                        onClick={() =>
                            handleProjectClick(project)
                        }
                    >
                        <FaExternalLinkAlt />
                        <span>
                            {project.link
                                ? "View Project"
                                : "Coming Soon"
                            }
                        </span>
                    </button>
                </div>
            </div>
        );
    };

    // =====================================================
    // CREATIVE CARD
    // =====================================================
    const CreativeCard = ({ item }) => {
        return (
            <div className="project-card creative-card">
                <div className="project-image">
                    <img
                        src={item.image}
                        alt={item.title}
                    />

                    {item.active && (
                        <span className="active-badge">
                            ● Active
                        </span>
                    )}
                </div>

                <div className="project-content">
                    <div className="project-icon">
                        {item.icon}
                    </div>

                    <small className="creative-type">
                        {item.type}
                    </small>

                    <h3>
                        {item.title}
                    </h3>

                    <p>
                        {item.description}
                    </p>

                    <div className="project-meta">
                        <span>
                            📅 {item.date}
                        </span>
                    </div>

                    <button
                        type="button"
                        className="view-project"
                        onClick={() =>
                            handleProjectClick(item)
                        }
                    >
                        <FaEye />
                        <span>
                            {item.link
                                ? "View Content"
                                : "Coming Soon"
                            }
                        </span>
                    </button>
                </div>
            </div>
        );
    };

    // =====================================================
    // JSX
    // =====================================================
    return (
        <section
            id="projects"
            className="projects"
        >
            {/* =================================================
                HEADER
            ================================================= */}
            <h2>
                🪄 Projects & Creative Work
            </h2>

            <p className="projects-intro">
                A collection of software applications,
                AI-powered solutions, digital products,
                creative work, designs, videos, reels,
                and technology-driven projects.
            </p>

            {/* =================================================
                ACTIVE PROJECTS
            ================================================= */}
            <div className="project-section-header">
                <h3>
                    🚀 Active Projects
                </h3>

                <p>
                    Currently active projects and products
                    that I am building and developing.
                </p>
            </div>

            <div className="project-list">
                {activeProjects.map(
                    (project, index) => (
                        <ProjectCard
                            project={project}
                            key={index}
                        />
                    )
                )}
            </div>

            {/* =================================================
                OTHER PROJECTS
            ================================================= */}
            <div className="project-section-header">
                <h3>
                    💻 Other Projects
                </h3>

                <p>
                    Previously completed and experimental
                    projects from my development journey.
                </p>
            </div>

            <div className="project-list">
                {visibleProjects.map(
                    (project, index) => (
                        <ProjectCard
                            project={project}
                            key={index}
                        />
                    )
                )}
            </div>

            {otherProjects.length > 3 && (
                <div className="view-more-container">
                    <button
                        className="view-more-btn"
                        onClick={() =>
                            setShowAllProjects(
                                !showAllProjects
                            )
                        }
                    >
                        {showAllProjects
                            ? "View Less"
                            : "View More"
                        }
                    </button>
                </div>
            )}

            {/* =================================================
                CREATIVE WORK
            ================================================= */}
            <div className="creative-section">
                <div className="project-section-header">
                    <h3>
                        🎨 Creative Work & Media
                    </h3>

                    <p>
                        Reels, videos, posters, banners,
                        social media designs, branding,
                        graphics, and other creative work.
                    </p>
                </div>

                {/* ACTIVE CREATIVE */}
                <div className="creative-subheading">
                    <h4>
                        🔥 Current / Active Content
                    </h4>
                </div>

                <div className="project-list">
                    {activeCreative.map(
                        (item, index) => (
                            <CreativeCard
                                item={item}
                                key={index}
                            />
                        )
                    )}
                </div>

                {/* OTHER CREATIVE */}
                <div className="creative-subheading">
                    <h4>
                        📂 More Creative Work
                    </h4>
                </div>

                <div className="project-list">
                    {visibleCreative.map(
                        (item, index) => (
                            <CreativeCard
                                item={item}
                                key={index}
                            />
                        )
                    )}
                </div>

                {otherCreative.length > 3 && (
                    <div className="view-more-container">
                        <button
                            className="view-more-btn"
                            onClick={() =>
                                setShowAllCreative(
                                    !showAllCreative
                                )
                            }
                        >
                            {showAllCreative
                                ? "View Less"
                                : "View More"
                            }
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
export default Projects;