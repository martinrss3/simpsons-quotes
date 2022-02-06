import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import gsap, { Bounce } from "gsap";
import FallingBart from "../img/falling-bart.png";
import CutOutBart from "../img/cutout-bart.png";
import Cloud1 from "../img/clouds/cloud1.svg";
import Cloud2 from "../img/clouds/cloud2.svg";
import Cloud3 from "../img/clouds/cloud3.svg";
import Cloud4 from "../img/clouds/cloud4.svg";
import Cloud5 from "../img/clouds/cloud5.svg";
import Cloud6 from "../img/clouds/cloud6.svg";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import "../css/hero.css";

export const Hero = () => {
  useEffect(() => {
    gsap.to(".cloud-1", 30, {
      x: -3000,
      ease: "none",
      repeat: -1,
    });

    gsap.to(".cloud-2", 45, {
      x: 3000,
      ease: "none",
      repeat: -1,
    });

    gsap.to(".cloud-3", 60, {
      x: -3000,
      ease: "none",
      repeat: -1,
    });

    gsap.to(".cloud-4", 40, {
      x: 3000,
      ease: "none",
      repeat: -1,
      delay: 1,
    });

    gsap.to(".cloud-5", 45, {
      x: -3000,
      ease: "none",
      repeat: -1,
    });

    gsap.to(".cloud-6", 29, {
      x: 3000,
      ease: "none",
      repeat: -1,
      delay: 1,
    });
  }, []);

  useEffect(() => {
    var tl = gsap.timeline();

    tl.from(".hero-title", 3, {
      scale: 0,
    });

    tl.from(
      ".bart",
      1.5,
      {
        y: -3500,
        ease: "none",
      },
      "-=0.5"
    );

    tl.from(".cut-out-bart", 1, {
      x: 1000,
      ease: Bounce.easeOut,
      delay: 1,
    });
  }, []);

  return (
    <div className="hero">
      <div className="hero-top-content">
        <div className="hero-navbar">
          <Nav />
        </div>
        <div className="clouds-wrapper">
          <img className="cloud-1" src={Cloud1} alt="cloud" />
          <img className="cloud-2" src={Cloud2} alt="cloud" />
          <img className="cloud-3" src={Cloud3} alt="cloud" />
          <img className="cloud-4" src={Cloud4} alt="cloud" />
          <img className="cloud-5" src={Cloud5} alt="cloud" />
          <img className="cloud-6" src={Cloud6} alt="cloud" />
        </div>
        <img className="bart" src={FallingBart} alt="falling bart" />
        <Link to="/search">
          <img className="cut-out-bart" src={CutOutBart} alt="cut out bart" />
        </Link>
        <div className="hero-text">
          <h1 className="hero-title">The Simpsons</h1>
        </div>
      </div>
      <div className="hero-footer">
        <Footer />
      </div>
    </div>
  );
};
