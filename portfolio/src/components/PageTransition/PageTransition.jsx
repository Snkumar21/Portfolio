import React from "react";
import "./PageTransition.css";

const PageTransition = ({ phase, title }) => {
    return (
        <div className={`page-transition ${phase}`}>

            {/* Decorative background text */}
            <div className="transition-bg-text">
                {title}
            </div>

            {/* Main content */}
            <div className="transition-content">

                <span className="transition-small">
                    EXPLORE
                </span>

                <h1>{title}</h1>

                <div className="transition-line">
                    <span></span>
                </div>

            </div>

            {/* Bottom page number style decoration */}
            <div className="transition-corner">
                NKS / PORTFOLIO
            </div>

        </div>
    );
};

export default PageTransition;