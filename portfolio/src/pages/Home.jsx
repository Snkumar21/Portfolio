import { useEffect, useState } from "react";
import { FaRocket, FaArrowRight, FaBuilding} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    const [typedText, setTypedText] = useState("");
    const text = "Hi, I'm Nitish Kumar Singh";

    useEffect(() => {
        let index = 0;
        const typingInterval = setInterval(() => {
            if (index < text.length) {
                setTypedText(
                    text.substring(0, index + 1)
                );
                index++;
            } else {
                clearInterval(typingInterval);
            }
        }, 70);

        return () => {
            clearInterval(typingInterval);
        };
    }, []);

    return (
        <section className="intro">
            {/* Profile Image */}
            <div className="intro-img">
                <img
                    src="/Img/New logo.jpg"
                    alt="Nitish Kumar Singh"
                />
            </div>

            {/* Hero Content */}
            <div className="intro-text">
                <p className="intro-greeting">
                    Hello, I'm
                </p>

                <h1>
                    <span>
                        {typedText}
                    </span>
                </h1>

                <p className="intro-role">
                    Software Developer |
                    AI/ML |
                    Automation |
                    Full-Stack Development
                </p>

                {/* Founder Badge */}
                <div className="founder-badge">
                    <FaRocket />
                    <span>
                        Founder of{" "}
                        <strong>
                            Nexus Techworks
                        </strong>
                    </span>
                </div>

                {/* Description */}
                <p className="intro-description">
                    I build modern software solutions,
                    AI-powered applications, and
                    technology-driven products while
                    growing{" "}
                    <strong>
                        Nexus Techworks
                    </strong>
                    {" "}— my technology startup focused
                    on building innovative digital solutions.
                </p>

                {/* Buttons */}
                <div className="intro-buttons">
                    <button
                        type="button"
                        onClick={() => navigate("/about")}
                    >
                        Explore
                        <FaArrowRight />
                    </button>

                    <button
                        type="button"
                        className="startup-button"
                        onClick={() =>
                            window.open(
                                "https://www.instagram.com/nexustechworks/",
                                "_blank"
                            )
                        }
                    >
                        <FaBuilding />
                        Nexus Techworks
                    </button>
                </div>
            </div>
        </section>
    );
}
export default Home;