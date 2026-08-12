import {
    FaExternalLinkAlt,
    FaGithub,
    FaGraduationCap,
    FaCloudSun,
    FaUtensils,
    FaUniversity,
    FaPaw,
    FaLeaf,
    FaHome,
    FaTableTennis,
    FaExclamationCircle,
    FaRobot,
    FaGamepad
} from "react-icons/fa";

import hubverse from "../assets/Img/Project/HubVerse.png";
import netflix from "../assets/Img/Project/NetFlix Clone.png";
import weather from "../assets/Img/Project/weather application.png";
import recipe from "../assets/Img/Project/Recipe Book.png";
import banking from "../assets/Img/Project/banking system.png";
import petManagement from "../assets/Img/Project/pet management system.png";
import ayurveda from "../assets/Img/Project/ayurveda mentor.png";
import rentoring from "../assets/Img/Project/rentoring system.png";
import pingPong from "../assets/Img/Project/ping pong game.png";
import grievance from "../assets/Img/Project/grivence system.png";
import ericLearn from "../assets/Img/Project/eric-learn.png";
import gamingLms from "../assets/Img/Project/gaming learning management system.png";

function Projects() {
    const projects = [
        {
            image: hubverse,
            title: "HubVerse - Education Hub",
            description:
                "A learning management platform designed to help users improve their skills through structured learning resources and educational content.",
            icon: <FaGraduationCap />,
            technologies: "React.js • Node.js • MongoDB",
            link: "https://hub-verse.vercel.app/"
        },

        {
            image: netflix,
            title: "Netflix Clone",
            description:
                "A visually engaging frontend replica of Netflix built with a responsive user interface and modern web technologies.",
            icon: <FaGamepad />,
            technologies: "HTML • CSS • JavaScript",
            link: "https://netflix-clone-website-psi.vercel.app/"
        },

        {
            image: weather,
            title: "Weather Application",
            description:
                "A real-time weather application that uses APIs to display temperature, weather conditions, and location-based information.",
            icon: <FaCloudSun />,
            technologies: "HTML • CSS • JavaScript • Weather API",
            link: "https://weather-application-three-kappa.vercel.app/"
        },

        {
            image: recipe,
            title: "Recipe Book",
            description:
                "A frontend recipe catalog featuring a clean interface for exploring recipes with a simple and user-friendly experience.",
            icon: <FaUtensils />,
            technologies: "HTML • CSS • JavaScript",
            link: "https://recepie-book-two.vercel.app/"
        },

        {
            image: banking,
            title: "Banking Management System",
            description:
                "A web-based banking application featuring user login, transaction records, and database integration for managing banking operations.",
            icon: <FaUniversity />,
            technologies: "Java • MySQL • Web Development",
            link: "https://banky-web-application.vercel.app/"
        },

        {
            image: petManagement,
            title: "Pet Shop Management System",
            description:
                "A management system for handling pet information, services, registrations, and other pet-shop related operations.",
            icon: <FaPaw />,
            technologies: "Node.js • MySQL • JavaScript",
            link: "https://the-ultimate-pet-shop.vercel.app/"
        },

        {
            image: ayurveda,
            title: "Ayurveda Mentor System",
            description:
                "A full-stack Ayurveda platform where users can explore Ayurvedic products, wellness tips, and consultation-related features.",
            icon: <FaLeaf />,
            technologies: "React.js • Node.js • MongoDB",
            link: "https://ayurveda-website-five.vercel.app/"
        },

        {
            image: rentoring,
            title: "Rentoring Management System",
            description:
                "A rental management platform for managing rental services, availability, and bookings.",
            icon: <FaHome />,
            technologies: "Node.js • MySQL • JavaScript",
            link: "https://rentor-website.vercel.app/"
        },

        {
            image: pingPong,
            title: "Ping Pong Game",
            description:
                "A browser-based classic Ping Pong game featuring paddle movement, scoring, and game logic.",
            icon: <FaTableTennis />,
            technologies: "HTML • CSS • JavaScript",
            link: "https://ping-pong-game-three-zeta.vercel.app/"
        },

        {
            image: grievance,
            title: "Grievance Management System",
            description:
                "A student grievance portal that allows users to submit and manage issues through an organized web-based system.",
            icon: <FaExclamationCircle />,
            technologies: "HTML • CSS • JavaScript • Email Authentication",
            link: "https://grievance-web-application.vercel.app/"
        },

        {
            image: ericLearn,
            title: "ERIC Learn",
            description:
                "An AI-powered educational platform featuring Text AI, Visual AI, Audio AI, and Quiz AI modules.",
            icon: <FaRobot />,
            technologies: "JavaScript • OpenAI API • AI",
            link: "https://eric-learn.vercel.app/index.html"
        },

        {
            image: gamingLms,
            title: "Gaming Learning Management System",
            description:
                "A gamified learning management platform that enables students and teachers to interact through challenges, activities, and learning modules.",
            icon: <FaGamepad />,
            technologies: "React.js • Node.js • MongoDB • Gamification",
            link: null
        }
    ];

    const handleProjectClick = (project) => {
        if (!project.link) {
            alert(
                "Project details will be available soon. Stay tuned!"
            );
            return;
        }
        window.open(
            project.link,
            "_blank",
            "noopener,noreferrer"
        );
    };

    return (
        <section
            id="projects"
            className="projects"
        >
            {/* PROJECT HEADER */}
            <h2>
                🪄 Projects
            </h2>

            <p className="projects-intro">
                A collection of software applications,
                web platforms, AI-powered solutions,
                and development projects I have built
                throughout my journey.
            </p>

            {/* PROJECT LIST */}
            <div className="project-list">
                {projects.map((project, index) => (
                    <div
                        className="project-card"
                        key={index}
                    >
                        {/* Project Image */}
                        <div className="project-image">
                            <img
                                src={project.image}
                                alt={project.title}
                            />
                        </div>

                        {/* Project Content */}
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

                            {/* Project Button */}
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
                ))}
            </div>
        </section>
    );
}
export default Projects;