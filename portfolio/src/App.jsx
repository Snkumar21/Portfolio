import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [showContent, setShowContent] = useState(false);
  const speechRef = useRef(null);

  useEffect(() => {
    const speakWelcome = () => {
      const speech = new SpeechSynthesisUtterance();

      speech.text =
        "Namaste. Welcome to my digital universe. I am Nitish Kumar Singh, a software developer, creator and builder.";

      speech.volume = 1;
      speech.rate = 0.9;
      speech.pitch = 1;

      speechRef.current = speech;

      window.speechSynthesis.speak(speech);

      speech.onend = () => {
        setTimeout(() => {
          setShowContent(true);
        }, 1000);
      };
    };

    setTimeout(() => {
      speakWelcome();
    }, 1500);

    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  return (
    <div className="app">
      {!showContent ? (
        <div className="intro-screen">
          <div className="circle"></div>

          <h1 className="namaste">🙏 Namaste</h1>

          <p className="loading-text">Initializing Portfolio...</p>

          <div className="wave">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      ) : (
        <div className="main-content">
          <nav className="navbar">
            <h2>Nitish.dev</h2>

            <ul>
              <li>Home</li>
              <li>Projects</li>
              <li>Skills</li>
              <li>Contact</li>
            </ul>
          </nav>

          <section className="hero">
            <div className="hero-left">
              <h1>
                Hi, I'm <span>Nitish Kumar Singh</span>
              </h1>

              <h3>Software Developer • Creator • Problem Solver</h3>

              <p>
                I build futuristic web experiences with React, Node.js,
                MongoDB and creative UI animations.
              </p>

              <button>Explore My Work</button>
            </div>

            <div className="hero-right">
              <div className="glow-card">
                <h2>AI Portfolio</h2>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}

export default App;