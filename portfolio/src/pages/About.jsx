import { FaYoutube, FaTrophy, FaHandshake } from "react-icons/fa";
import profileLogo from "../assets/Img/Profile/about img.jpg";

function About() {
    return (
        <section className="about" id="about">
            <h2>🔍 About Me </h2>
            <p className="about-intro">
                Hello! I’m Nitish Kumar Singh, a Software Developer
                focused on building practical web applications,
                AI-powered tools, and automation-driven solutions.
                I enjoy combining software engineering, AI/ML,
                and modern UI development to turn ideas into
                useful products.
            </p>

            {/* ABOUT CONTENT */}
            <div className="content">
                {/* About Image */}
                <div className="about-image-container">
                    <img
                        src={profileLogo}
                        alt="Nitish Kumar Singh"
                        className="about-img"
                    />
                </div>

                {/* About Text */}
                <div className="content-text">
                    <h3>
                        Software Developer
                        <a
                            href="https://www.youtube.com/@technexus19"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Nitish Kumar Singh YouTube Channel"
                        >
                            <FaYoutube className="youtube-icon" />
                        </a>
                    </h3>

                    <p>
                        A passionate Software Developer with a strong
                        foundation in programming languages, data
                        structures, algorithms, and modern software
                        development.
                        I enjoy creating efficient, scalable, and
                        user-focused software solutions. I am always
                        eager to learn new technologies and stay updated
                        with the latest trends in the technology industry.
                    </p>

                    {/* Founder */}
                    <p className="about-highlight">
                        Founder:
                        <span>
                            Nexus Techworks
                        </span>
                    </p>

                    <p className="about-founder-text">
                        I am also the Founder of{" "}
                        <strong>
                            Nexus Techworks
                        </strong>
                        , a technology startup focused on building
                        innovative digital solutions, software products,
                        and technology-driven services.
                    </p>

                    {/* Date of Birth */}
                    <p className="about-detail">
                        <strong>
                            Date Of Birth:
                        </strong>
                        <span>
                            30 Sep 2002
                        </span>
                    </p>

                    {/* Education */}
                    <div className="education">
                        <h4>
                            🎓 Education
                        </h4>

                        <ul>
                            <li>
                                Master of Computer Applications
                                (MCA) in AI/ML –
                                Ajeenkya D Y Patil University
                            </li>

                            <li>
                                Bachelor of Business Administration
                                (BBA) in Computer Applications –
                                Savitribai Phule Pune University
                            </li>

                            <li>
                                Higher Secondary Education (12th) –
                                CBSE
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* HONORS & AWARDS */}
            <div className="about-section">
                <h3>
                    <FaTrophy />
                    Honors & Awards
                </h3>

                <ul>
                    <li>
                        <strong>
                            Hackathon Wins:
                        </strong>
                        {" "}1X – Built a Smart Gamified
                        Learning Management System.
                    </li>

                    <li>
                        2X times Champions in Christ College
                        Premier League.
                    </li>

                    <li>
                        Runner-up in Code De Basanti.
                    </li>

                    <li>
                        Winner of Frame By Frame Event.
                    </li>
                </ul>
            </div>

            {/* VOLUNTEERING */}
            <div className="about-section">
                <h3>
                    <FaHandshake />
                    Volunteering & Involvement
                </h3>

                <ul>
                    <li>
                        <strong>
                            YouTube Channel Manager
                        </strong>
                        {" "}– Tutorials and walkthroughs
                        reaching 1,000+ learners.
                    </li>

                    <li>
                        <strong>
                            Tech Community Mentor
                        </strong>
                        {" "}– Helping peers with coding,
                        project building, and AI fundamentals.
                    </li>

                    <li>
                        <strong>
                            Campus Representative
                        </strong>
                        {" "}– Coordinated technology events
                        and Hackathon.
                    </li>
                </ul>
            </div>
        </section>
    );
}
export default About;