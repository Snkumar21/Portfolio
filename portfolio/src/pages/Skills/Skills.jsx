import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaJava,
    FaPython,
    FaGithub,
    FaNodeJs,
    FaAndroid,
    FaGitAlt,
    FaDatabase,
    FaRobot,
    FaCogs,
    FaUsers,
    FaProjectDiagram,
    FaComments,
    FaLightbulb,
    FaTasks,
    FaPalette
} from "react-icons/fa";

import {
    SiCplusplus,
    SiMongodb,
    SiFirebase,
    SiVercel,
    SiTailwindcss,
    SiAngular,
    SiExpress,
    SiMysql,
    SiPostman,
    SiNumpy,
    SiPandas,
    SiFigma
} from "react-icons/si";

import "./Skills.css";

import angular from "../../assets/Img/Skills_Icon/Angular.png";
import cLanguage from "../../assets/Img/Skills_Icon/C.png";
import vscode from "../../assets/Img/Skills_Icon/vs code.png";
import render from "../../assets/Img/Skills_Icon/render.jpeg";
import canva from "../../assets/Img/Skills_Icon/canva.png";

function Skills() {

    /* TECHNICAL SKILLS */
    const technicalSkills = [
        {
            name: "HTML5",
            icon: <FaHtml5 />,
            className: "html"
        },

        {
            name: "CSS3",
            icon: <FaCss3Alt />,
            className: "css"
        },

        {
            name: "JavaScript",
            icon: <FaJs />,
            className: "javascript"
        },

        {
            name: "React.js",
            icon: <FaReact />,
            className: "react"
        },

        {
            name: "Java",
            icon: <FaJava />,
            className: "java"
        },

        {
            name: "Python",
            icon: <FaPython />,
            className: "python"
        },

        {
            name: "C++",
            icon: <SiCplusplus />,
            className: "cpp"
        },

        {
            name: "C",
            image: cLanguage,
            className: "c-language"
        },

        {
            name: "Angular",
            image: angular,
            className: "angular"
        },

        {
            name: "Node.js",
            icon: <FaNodeJs />,
            className: "node"
        },

        {
            name: "Express.js",
            icon: <SiExpress />,
            className: "express"
        },

        {
            name: "MySQL",
            icon: <SiMysql />,
            className: "mysql"
        },

        {
            name: "MongoDB",
            icon: <SiMongodb />,
            className: "mongodb"
        },

        {
            name: "Firebase",
            icon: <SiFirebase />,
            className: "firebase"
        },

        {
            name: "DBMS",
            icon: <FaDatabase />,
            className: "dbms"
        },

        {
            name: "AI / ML",
            icon: <FaRobot />,
            className: "ai"
        },

        {
            name: "Automation",
            icon: <FaCogs />,
            className: "automation"
        },

        {
            name: "Tailwind CSS",
            icon: <SiTailwindcss />,
            className: "tailwind"
        },

        {
            name: "Android",
            icon: <FaAndroid />,
            className: "android"
        },

        {
            name: "Pandas",
            icon: <SiPandas />,
            className: "pandas"
        },

        {
            name: "NumPy",
            icon: <SiNumpy />,
            className: "numpy"
        }
    ];

    /* KNOWN APPLICATIONS */
    const applications = [
        {
            name: "Visual Studio Code",
            image: vscode,
            className: "vscode"
        },

        {
            name: "Git",
            icon: <FaGitAlt />,
            className: "git"
        },

        {
            name: "GitHub",
            icon: <FaGithub />,
            className: "github"
        },

        {
            name: "Postman",
            icon: <SiPostman />,
            className: "postman"
        },

        {
            name: "Figma",
            icon: <SiFigma />,
            className: "figma"
        },

        {
            name: "Canva",
            image: canva,
            className: "canva"
        },

        {
            name: "Vercel",
            icon: <SiVercel />,
            className: "vercel"
        },

        {
            name: "Render",
            image: render,
            className: "render"
        }
    ];

    /* MANAGEMENT SKILLS */
    const managementSkills = [
        {
            name: "Project Management",
            icon: <FaProjectDiagram />,
            className: "management"
        },

        {
            name: "Team Collaboration",
            icon: <FaUsers />,
            className: "team"
        },

        {
            name: "Communication",
            icon: <FaComments />,
            className: "communication"
        },

        {
            name: "Problem Solving",
            icon: <FaLightbulb />,
            className: "problem-solving"
        },

        {
            name: "Task Management",
            icon: <FaTasks />,
            className: "task"
        },

        {
            name: "Leadership",
            icon: <FaUsers />,
            className: "leadership"
        }
    ];

    /* DESIGN & CREATIVITY */
    const designSkills = [
        {
            name: "UI/UX Design",
            icon: <FaPalette />,
            className: "uiux"
        },

        {
            name: "Graphic Design",
            icon: <FaPalette />,
            className: "graphic"
        },

        {
            name: "Figma",
            icon: <SiFigma />,
            className: "figma"
        },

        {
            name: "Canva",
            image: canva,
            className: "canva"
        },

        {
            name: "Creative Thinking",
            icon: <FaLightbulb />,
            className: "creative"
        }
    ];

    /* REUSABLE SKILL LIST */
    const renderSkills = (skills) => {
        return (
            <ul className="skills-list">
                {skills.map((skill, index) => (
                    <li
                        key={index}
                        className={skill.className}
                    >
                        {skill.icon && (
                            <span className="skill-icon">
                                {skill.icon}
                            </span>
                        )}
                        {skill.image && (
                            <img
                                src={skill.image}
                                alt={skill.name}
                                className="skill-image"
                            />
                        )}
                        <span className="skill-name">
                            {skill.name}
                        </span>
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <section
            id="skills"
            className="skills"
        >
            {/* HEADER */}
            <h2>
                🎯 Skills
            </h2>

            <p className="skills-intro">
                A combination of technical expertise,
                development tools, management abilities,
                and creative skills that I use to build
                modern digital products and solutions.
            </p>

            {/* TECHNICAL SKILLS */}
            <div className="skills-section">
                <div className="skills-section-header">
                    <span className="skills-section-icon">
                        💻
                    </span>

                    <div>
                        <h3>
                            Technical Skills
                        </h3>

                        <p>
                            Programming languages,
                            frameworks, databases,
                            AI/ML, and development technologies.
                        </p>
                    </div>
                </div>

                <div className="skill-category">
                    {renderSkills(technicalSkills)}
                </div>
            </div>

            {/* APPLICATIONS */}
            <div className="skills-section">
                <div className="skills-section-header">
                    <span className="skills-section-icon">
                        🛠️
                    </span>

                    <div>
                        <h3>
                            Known Applications & Tools
                        </h3>

                        <p>
                            Development environments,
                            collaboration tools, design
                            applications, and deployment platforms.
                        </p>
                    </div>
                </div>

                <div className="skill-category">
                    {renderSkills(applications)}
                </div>
            </div>

            {/* MANAGEMENT */}
            <div className="skills-section">
                <div className="skills-section-header">
                    <span className="skills-section-icon">
                        📊
                    </span>

                    <div>
                        <h3>
                            Management Skills
                        </h3>

                        <p>
                            Skills that help me manage projects,
                            collaborate with teams, and
                            communicate effectively.
                        </p>
                    </div>
                </div>

                <div className="skill-category">
                    {renderSkills(managementSkills)}
                </div>
            </div>

            {/* DESIGN */}
            <div className="skills-section">
                <div className="skills-section-header">
                    <span className="skills-section-icon">
                        🎨
                    </span>

                    <div>
                        <h3>
                            Design & Creativity
                        </h3>

                        <p>
                            Creative and visual skills used to
                            design engaging digital experiences
                            and content.
                        </p>
                    </div>
                </div>

                <div className="skill-category">
                    {renderSkills(designSkills)}
                </div>
            </div>
        </section>
    );
}
export default Skills;