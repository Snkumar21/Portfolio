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
    FaCogs
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

import angular from "../assets/Img/Skills_Icon/Angular.png";
import cLanguage from "../assets/Img/Skills_Icon/C.png";
import vscode from "../assets/Img/Skills_Icon/vs code.png";
import render from "../assets/Img/Skills_Icon/render.jpeg";

function Skills() {

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
            name: "Visual Studio Code",
            image: vscode,
            className: "vscode"
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

    return (
        <section id="skills" className="skills">
            <h2>🎯 Skills</h2>

            <p className="skills-intro">
                Technologies, tools, and platforms I use
                to build modern software applications,
                AI-powered solutions, and scalable
                digital products.
            </p>

            <h3>💻 Technical Skills</h3>

            <div className="skill-category">
                <ul className="skills-list">
                    {technicalSkills.map((skill, index) => (
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
            </div>
        </section>
    );
}
export default Skills;