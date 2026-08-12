import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <h3>
                    Nitish Kumar Singh
                </h3>

                <p>
                    Software Developer | AI/ML Enthusiast |
                    Full-Stack Developer
                </p>

                <div className="footer-socials">
                    <a
                        href="https://github.com/Snkumar21"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                    >
                        <FaGithub />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/nitish-kumar-singh-0b3974248"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin />
                    </a>

                    <a
                        href="https://www.instagram.com/snkumar_19/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                    >
                        <FaInstagram />
                    </a>
                </div>
            </div>

            <div className="footer-bottom">
                <p>
                    © 2026 Nitish Kumar Singh.
                    All Rights Reserved.
                </p>
            </div>
        </footer>
    );
}
export default Footer;