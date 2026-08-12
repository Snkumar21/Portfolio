import React from "react";
import CCPLChampions from "../assets/Img/Achievement/CCPL Champions.jpg";
import IOTProjectDisplay from "../assets/Img/Achievement/IOT Project Display.jpg";
import WinnerOfCodeDeBasanti from "../assets/Img/Achievement/Winner of Code De Basanti.jpg";
import LastDayOfBBACA from "../assets/Img/Achievement/Last Day of BBA-CA.jpg";
import ADYPUFreshersDay from "../assets/Img/Achievement/ADYPU Freshers Day.jpg";
import EducathonRun from "../assets/Img/Achievement/Educathon Run.jpg";
import ADPYUConvocation from "../assets/Img/Achievement/9th ADPYU Convocation.jpg";
import HackthonWinner from "../assets/Img/Achievement/Hackthon Winner.jpg";
import ProfileBuildingCommunication from "../assets/Img/Achievement/Profile Building Communication.jpg";
import FreshersParty from "../assets/Img/Achievement/Freshers Party.jpg";
import FarewellParty from "../assets/Img/Achievement/Farewell Party.JPG";
import Amazon from "../assets/Img/Achievement/Amazon.jpg";

function Featured() {
    const featuredMoments = [
        {
            image: Amazon,
            title: "🚀 A Small Gift, A Big Motivation! 💙",
            description:
                "This role has taught me the importance of patience, empathy, and delivering the best possible customer experience. While every challenge comes with its own learning curve, it's these experiences that help us grow both personally and professionally.",
            link: "https://lnkd.in/p/gV2afNWa"
        },
        {
            image: FarewellParty,
            title: "A Heartfelt Goodbye to an Unforgettable Chapter",
            description:
                "As I complete my Post Graduation in Computer Applications (MCA) from Ajeenkya D Y Patil University, School of Engineering - Sunstone, I find myself filled with gratitude, memories, and emotions.",
            link: "https://lnkd.in/p/gz_rz382"
        },
        {
            image: FreshersParty,
            title: "🎉 Successfully Led the Technical Team for the Freshers Party 2025!",
            description:
                "Excited to share that I recently had the opportunity to serve as the Head of the Technical Team for our college’s Freshers Party at ADYPU School of Engineering Sunstone.",
            link: "https://lnkd.in/p/gXPhmGWA"
        },
        {
            image: ProfileBuildingCommunication,
            title: "Spoke at Profile Building Communication",
            description:
                "Exploring the detailing about Resume and Cover letter benefit to batchmates.",
            link: "https://www.linkedin.com/posts/nitish-kumar-singh-0b3974248_talks-adypu-profileabrbuilding-activity-7330546726656806912-ovgr"
        },
        {
            image: HackthonWinner,
            title: "🏆 Hackverse Champion",
            description:
                "Secured 1st place in 48-hour Hackathon on EdTech innovation.",
            link: "https://www.linkedin.com/posts/nitish-kumar-singh-0b3974248_hackverse-hackathonwinner-innovation-activity-7323623688203845632-aZhN"
        },
        {
            image: ADPYUConvocation,
            title: "9th ADPYU Convocation",
            description:
                "Honored to have been a part of the 9th Convocation of Ajeenkya D Y Patil University as a volunteer! 🎓✨",
            link: "https://www.linkedin.com/posts/nitish-kumar-singh-0b3974248_adypu-convocation-volunteeringexperience-activity-7293150977002500096-_cyi"
        },
        {
            image: EducathonRun,
            title: "Educathon Run 🏃‍♂️",
            description:
                "Participated in Educathon Run, a 5-Km race to raise awareness for education.",
            link: "https://www.linkedin.com/posts/nitish-kumar-singh-0b3974248_sunstone-educathon-run-activity-7269742172466257923-1PDp"
        },
        {
            image: ADYPUFreshersDay,
            title: "Freshers Day at ADYPU",
            description:
                "Exploring new environment and making new friends.",
            link: ""
        },
        {
            image: LastDayOfBBACA,
            title: "Last Day of BBA-CA",
            description:
                "It was incredible feeling to complete my BBA-CA degree.",
            link: "https://www.linkedin.com/posts/nitish-kumar-singh-0b3974248_christcollegepune-christies-bca-activity-7190059829346918400-43zE"
        },
        {
            image: WinnerOfCodeDeBasanti,
            title: "Runner-up of Code De Basanti",
            description:
                "Honored to have been a part of the such incredible event.",
            link: "https://www.linkedin.com/posts/nitish-kumar-singh-0b3974248_technotsav-christcollegepune-techenthusiasts-activity-7164611117900668928-JGC-"
        },
        {
            image: IOTProjectDisplay,
            title: "IOT Project Display",
            description:
                "IOT Project Display at Christ College, Pune.",
            link: "https://www.linkedin.com/posts/nitish-kumar-singh-0b3974248_iotinnovation-linkedinindia-christcollegepune-activity-7154131712237580288-0Hsp"
        },
        {
            image: CCPLChampions,
            title: "CCPL Champions 2023",
            description:
                "Secured 1st place in Christ College Premier League.",
            link: "https://www.linkedin.com/posts/nitish-kumar-singh-0b3974248_hey-linkedin-connections-i-am-very-excited-activity-7181381365324517376-4ySt"
        }
    ];

    return (
        <section
            className="featured"
            id="featured"
        >
            {/* FEATURED HEADER */}
            <h2>
                🎞️ Featured Moments
            </h2>

            <p className="featured-intro">
                Events, milestones, achievements,
                and memorable highlights from my journey.
            </p>

            {/* FEATURED GALLERY */}
            <div className="featured-gallery">
                {featuredMoments.map((moment, index) => (
                    <div
                        className="featured-item"
                        key={index}
                    >
                        {/* Image */}
                        <img
                            src={moment.image}
                            alt={moment.title}
                        />

                        {/* Overlay */}
                        <div className="featured-overlay">
                            <h3>
                                {moment.title}
                            </h3>

                            <p>
                                {moment.description}
                            </p>

                            {moment.link && (
                                <a
                                    href={moment.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Know More →
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
export default Featured;