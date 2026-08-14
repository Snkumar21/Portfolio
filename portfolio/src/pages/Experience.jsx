import {
    FaHeadset,
    FaCode,
    FaLaptopCode,
    FaBriefcase
} from "react-icons/fa";

function Experience() {
    return (
        <section
            id="experience"
            className="experience"
        >
            {/* EXPERIENCE HEADER */}
            <h2>
                💼 Experience
            </h2>

            <p className="experience-intro">
                A snapshot of my professional experience,
                internships, and hands-on software
                development journey.
            </p>

            {/* EXPERIENCE TIMELINE */}
            <div className="timeline">

                {/* NEXUS TECHWORKS */}
                <div className="timeline-item">
                    <div className="timeline-icon">
                        <FaBriefcase />
                    </div>

                    <div className="timeline-content">
                        <h3>
                            Founder & Software Developer
                            <span>
                                @ Nexus Techworks
                            </span>
                        </h3>

                        <p className="timeline-duration">
                            Jan 2024 - Present
                            {" | "}
                            India
                        </p>

                        <ul>
                            <li>
                                Founded and developed Nexus Techworks
                                with a focus on software development,
                                digital solutions, and technology-driven
                                products.
                            </li>

                            <li>
                                Designed and developed modern web
                                applications using React.js, Node.js,
                                MongoDB, and other modern technologies.
                            </li>

                            <li>
                                Worked on AI-powered solutions,
                                automation, educational platforms,
                                and full-stack applications.
                            </li>

                            <li>
                                Focused on learning, teaching, and
                                building practical technology solutions
                                for students and users.
                            </li>
                        </ul>
                    </div>
                </div>


                {/* AMAZON */}
                <div className="timeline-item">
                    <div className="timeline-icon">
                        <FaHeadset />
                    </div>

                    <div className="timeline-content">
                        <h3>
                            VCS Associate
                            <span>
                                @ Amazon
                            </span>
                        </h3>

                        <p className="timeline-duration">
                            Jun 2026 - Aug 2026
                            {" | "}
                            Pune, India
                        </p>

                        <ul>
                            <li>
                                Handled customer queries by
                                understanding issues and providing
                                accurate, solution-focused support.
                            </li>

                            <li>
                                Applied structured problem-solving,
                                communication, and process knowledge
                                to resolve customer concerns efficiently.
                            </li>
                        </ul>
                    </div>
                </div>

                {/* TRON SOFTECH */}
                <div className="timeline-item">
                    <div className="timeline-icon">
                        <FaCode />
                    </div>

                    <div className="timeline-content">
                        <h3>
                            Software Developer Intern
                            <span>
                                @ Tron Softech
                            </span>
                        </h3>

                        <p className="timeline-duration">
                            Jun 2025 - Aug 2025
                            {" | "}
                            Pune, India
                        </p>

                        <ul>
                            <li>
                                Developed web applications using
                                React.js, Node.js, MongoDB, and
                                modern frontend technologies.
                            </li>

                            <li>
                                Worked on AI-powered learning tools
                                and full-stack application modules.
                            </li>

                            <li>
                                Collaborated on practical software
                                solutions with a focus on usability
                                and scalability.
                            </li>
                        </ul>
                    </div>
                </div>

                {/* TRON SOFTECH */}
                <div className="timeline-item">
                    <div className="timeline-icon">
                        <FaCode />
                    </div>

                    <div className="timeline-content">
                        <h3>
                            Web Development Intern
                            <span>
                                @ UptoSkills
                            </span>
                        </h3>

                        <p className="timeline-duration">
                            May 2025 - Aug 2025
                            {" | "}
                            Pune, India
                        </p>

                        <ul>
                            <li>
                                Developed web applications using
                                React.js, Node.js, MongoDB, and
                                modern frontend technologies.
                            </li>

                            <li>
                                Worked on AI-powered learning tools
                                and full-stack application modules.
                            </li>

                            <li>
                                Collaborated on practical software
                                solutions with a focus on usability
                                and scalability.
                            </li>
                        </ul>
                    </div>
                </div>

                {/* BHARAT INTERN */}
                <div className="timeline-item">
                    <div className="timeline-icon">
                        <FaLaptopCode />
                    </div>

                    <div className="timeline-content">
                        <h3>
                            Web Developer Intern
                            <span>
                                @ Bharat Intern
                            </span>
                        </h3>

                        <p className="timeline-duration">
                            Dec 2023 - Jan 2024
                            {" | "}
                            Remote
                        </p>

                        <ul>
                            <li>
                                Built responsive web-development
                                projects using HTML, CSS, and
                                JavaScript.
                            </li>

                            <li>
                                Practiced frontend development,
                                debugging, and implementation of
                                user-focused interfaces.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Experience;