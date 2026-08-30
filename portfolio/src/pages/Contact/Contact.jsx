import {
    FaEnvelope,
    FaPhone,
    FaLocationDot,
    FaCode,
    FaPaperPlane,
    FaLinkedinIn,
    FaGithub,
    FaInstagram,
} from "react-icons/fa6";
import "./Contact.css";

function Contact() {
    return (
        <section className="contact" id="contact">
            {/* Contact Header */}
            <h2>🤝 Let's Connect</h2>
            <p className="contact-intro">
                Have a project idea, job opportunity, collaboration,
                or simply want to discuss technology? I'd love to hear
                from you. Feel free to send me a message and I'll get
                back to you.
            </p>

            <div className="contact-content">
                {/* Contact Form */}
                <div className="contact-form">
                    <h3>📩 Send Me a Message</h3>
                    <p>
                        Fill out the form below and share your requirements,
                        ideas, or questions with me.
                    </p>
                    <form
                        action="https://formspree.io/f/xvgvbanr"
                        method="POST"
                    >
                        <div className="form-row">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                required
                            />
                        </div>
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Your Phone Number"
                        />
                        <textarea
                            name="message"
                            placeholder="Tell me about your project, opportunity, or message..."
                            rows="7"
                            required
                        ></textarea>
                        <button type="submit">
                            Send Message
                            <FaPaperPlane />
                        </button>
                    </form>
                </div>

                {/* Contact Information */}
                <div className="contact-info">
                    <h3>📍 Get In Touch</h3>
                    <p>
                        I'm open to software development opportunities,
                        freelance projects, collaborations, and interesting
                        technology discussions.
                    </p>

                    {/* Contact Details */}
                    <div className="contact-details">
                        {/* Email */}
                        <div className="contact-item">
                            <FaEnvelope />
                            <div>
                                <h4>Email</h4>
                                <p>
                                    <a href="mailto:snkumar6926@gmail.com">
                                        snkumar6926@gmail.com
                                    </a>
                                </p>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="contact-item">
                            <FaPhone />
                            <div>
                                <h4>Phone</h4>
                                <p>
                                    <a href="tel:+919373937166">
                                        +91 937 393 7166
                                    </a>
                                </p>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="contact-item">
                            <FaLocationDot />
                            <div>
                                <h4>Location</h4>
                                <p>
                                    Maharashtra, India
                                </p>
                            </div>
                        </div>

                        {/* Available For */}
                        <div className="contact-item">
                            <FaCode />
                            <div>
                                <h4>Available For</h4>
                                <p>
                                    Software Development • AI/ML •
                                    Full-Stack • Automation
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Availability */}
                    <div className="availability">
                        <h4>🚀 Open to Opportunities</h4>
                        <p>
                            Currently interested in software development,
                            AI/ML, full-stack development, and technology
                            opportunities where I can learn, contribute,
                            and build impactful solutions.
                        </p>
                    </div>

                    {/* Social Links */}
                    <div className="social-icons">
                        <a
                            href="https://www.linkedin.com/in/nitish-kumar-singh-0b3974248"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedinIn />
                        </a>

                        <a
                            href="https://github.com/Snkumar21"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                        >
                            <FaGithub />
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
            </div>
        </section>
    );
}
export default Contact;