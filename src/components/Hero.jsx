import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import gsap, { Bounce } from "gsap";
import FallingBart from "../img/falling-bart.png";
import "../css/hero.css";

export const Hero = () => {
  useEffect(() => {
    var tl = gsap.timeline();

    tl.from(".hero-title", {
      scale: 0,
    });

    tl.from(".bart", 2, {
      y: -2000,
    });

    gsap.from("button", 1.5, { delay: 2, scale: 0, ease: Bounce.easeOut });
  }, []);

  return (
    <div className="hero">
      <img className="bart" src={FallingBart} alt="falling bart" />
      <div className="hero-text">
        <h1 className="hero-title">The Simpsons</h1>
        <Link to="/search">
          <button style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
            SEARCH QUOTES
          </button>
        </Link>
      </div>
    </div>
  );
};
