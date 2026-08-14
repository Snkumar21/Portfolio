import {
    FaYoutube,
    FaTrophy,
    FaHandshake,
    FaCode,
    FaBrain,
    FaRocket,
    FaGraduationCap,
    FaCalendarAlt,
    FaBuilding
} from "react-icons/fa";

import profileLogo from "../assets/Img/Profile/me 4.png";

function About() {
    return (
        <section className="about" id="about">
            {/* ================= HEADER ================= */}
            <div className="about-header">
                <span className="about-label">
                    ABOUT ME
                </span>

                <h2>
                    Turning Ideas Into
                    <span> Digital Solutions.</span>
                </h2>

                <p>
                    I'm Nitish Kumar Singh, a Software Developer focused
                    on building practical web applications, AI-powered
                    tools, automation solutions, and technology-driven
                    products.
                </p>
            </div>

            {/* ================= MAIN ABOUT ================= */}
            <div className="about-main">
                {/* PROFILE */}
                <div className="about-profile">
                    <div className="profile-glow"></div>
                    <div className="profile-image-wrapper">
                        <img
                            src={profileLogo}
                            alt="Nitish Kumar Singh"
                            className="about-img"
                        />
                    </div>
                    <div className="profile-badge">
                        <span className="status-dot"></span>
                        Open to Opportunities
                    </div>
                </div>

                {/* INFORMATION */}
                <div className="about-info">
                    <div className="about-title-row">
                        <div>
                            <span className="small-label">
                                WHO I AM
                            </span>
                            <h3>
                                Software Developer
                            </h3>
                        </div>

                        <a
                            href="https://www.youtube.com/@technexus19"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="youtube-button"
                            aria-label="YouTube Channel"
                        >
                            <FaYoutube />
                        </a>
                    </div>

                    <p className="about-description">
                        A passionate Software Developer with a strong
                        foundation in programming, data structures,
                        algorithms, and modern software development.
                        I enjoy creating efficient, scalable, and
                        user-focused solutions that solve real-world
                        problems.
                    </p>

                    <p className="about-description">
                        I'm constantly exploring new technologies,
                        AI/ML concepts, and modern development practices
                        to improve the way I build software.
                    </p>

                    {/* FOUNDER */}
                    <div className="founder-card">
                        <div className="founder-icon">
                            <FaRocket />
                        </div>

                        <div>
                            <span>
                                Founder
                            </span>

                            <h4>
                                Nexus Techworks
                            </h4>

                            <p>
                                Building innovative digital solutions,
                                software products, and technology-driven
                                services.
                            </p>
                        </div>
                    </div>

                    {/* DETAILS */}
                    <div className="about-details">
                        <div className="detail-item">
                            <div className="detail-icon">
                                <FaCalendarAlt />
                            </div>

                            <div>
                                <span>
                                    Date of Birth
                                </span>

                                <strong>
                                    30 Sep 2002
                                </strong>
                            </div>
                        </div>

                        <div className="detail-item">
                            <div className="detail-icon">
                                <FaBuilding />
                            </div>

                            <div>
                                <span>
                                    Focus
                                </span>

                                <strong>
                                    Software & AI Solutions
                                </strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ================= QUICK STATS ================= */}
            <div className="about-stats">
                <div className="stat-card">
                    <div className="stat-icon">
                        <FaTrophy />
                    </div>

                    <div>
                        <strong>
                            1X
                        </strong>

                        <span>
                            Hackathon Winner
                        </span>
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-icon">
                        <FaCode />
                    </div>

                    <div>
                        <strong>
                            Full-Stack
                        </strong>

                        <span>
                            Development
                        </span>
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-icon">
                        <FaBrain />
                    </div>

                    <div>
                        <strong>
                            AI / ML
                        </strong>

                        <span>
                            Technology Focus
                        </span>
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-icon">
                        <FaGraduationCap />
                    </div>

                    <div>
                        <strong>
                            MCA
                        </strong>

                        <span>
                            AI / ML
                        </span>
                    </div>
                </div>
            </div>

            {/* ================= EDUCATION ================= */}
            <div className="about-section-card">
                <div className="section-card-header">
                    <div className="section-card-icon">
                        <FaGraduationCap />
                    </div>

                    <div>
                        <span>
                            ACADEMIC JOURNEY
                        </span>

                        <h3>
                            Education
                        </h3>
                    </div>
                </div>

                <div className="education-list">
                    <div className="education-item">
                        <span className="education-number">
                            01
                        </span>

                        <div>
                            <h4>
                                Master of Computer Applications
                                (MCA) in AI/ML
                            </h4>

                            <p>
                                Ajeenkya D Y Patil University
                            </p>
                        </div>
                    </div>

                    <div className="education-item">
                        <span className="education-number">
                            02
                        </span>

                        <div>
                            <h4>
                                Bachelor of Business Administration
                                (BBA) in Computer Applications
                            </h4>

                            <p>
                                Savitribai Phule Pune University
                            </p>
                        </div>
                    </div>

                    <div className="education-item">
                        <span className="education-number">
                            03
                        </span>

                        <div>
                            <h4>
                                Higher Secondary Education (12th)
                            </h4>

                            <p>
                                CBSE
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* ================= HONORS ================= */}
            <div className="about-section-card">
                <div className="section-card-header">
                    <div className="section-card-icon">
                        <FaTrophy />
                    </div>

                    <div>
                        <span>
                            ACHIEVEMENTS
                        </span>

                        <h3>
                            Honors & Awards
                        </h3>
                    </div>
                </div>

                <div className="achievement-grid">
                    <div className="achievement-card">
                        <span className="achievement-number">
                            01
                        </span>

                        <h4>
                            Hackathon Winner
                        </h4>

                        <p>
                            1X Hackathon Winner – Built a Smart
                            Gamified Learning Management System.
                        </p>
                    </div>

                    <div className="achievement-card">
                        <span className="achievement-number">
                            02
                        </span>

                        <h4>
                            CCPL Champion
                        </h4>

                        <p>
                            2X Champion in Christ College
                            Premier League.
                        </p>
                    </div>

                    <div className="achievement-card">
                        <span className="achievement-number">
                            03
                        </span>

                        <h4>
                            Code De Basanti
                        </h4>

                        <p>
                            Secured Runner-up position in
                            Code De Basanti.
                        </p>
                    </div>

                    <div className="achievement-card">
                        <span className="achievement-number">
                            04
                        </span>

                        <h4>
                            Frame By Frame
                        </h4>

                        <p>
                            Winner of the Frame By Frame event.
                        </p>
                    </div>
                </div>
            </div>

            {/* ================= INVOLVEMENT ================= */}
            <div className="about-section-card">
                <div className="section-card-header">
                    <div className="section-card-icon">
                        <FaHandshake />
                    </div>

                    <div>
                        <span>
                            COMMUNITY
                        </span>

                        <h3>
                            Volunteering & Involvement
                        </h3>
                    </div>
                </div>

                <div className="involvement-grid">
                    <div className="involvement-card">
                        <div className="involvement-icon">
                            <FaYoutube />
                        </div>

                        <h4>
                            YouTube Channel Manager
                        </h4>

                        <p>
                            Tutorials and walkthroughs reaching
                            1,000+ learners.
                        </p>
                    </div>

                    <div className="involvement-card">
                        <div className="involvement-icon">
                            <FaBrain />
                        </div>

                        <h4>
                            Tech Community Mentor
                        </h4>

                        <p>
                            Helping peers with coding, project
                            building, and AI fundamentals.
                        </p>
                    </div>

                    <div className="involvement-card">
                        <div className="involvement-icon">
                            <FaHandshake />
                        </div>

                        <h4>
                            Campus Representative
                        </h4>

                        <p>
                            Coordinated technology events
                            and Hackathon.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default About;