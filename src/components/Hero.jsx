import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import gsap, { Bounce } from "gsap";
import FallingBart from "../img/falling-bart.png";
import CutOutBart from "../img/cutout-bart.png";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import "../css/hero.css";

export const Hero = () => {
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
