import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
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
  }, []);

  return (
    <div className="hero">
      <img className="bart" src={FallingBart} alt="falling bart" />
      <div className="hero-text">
        <h1 className="hero-title">The Simpsons</h1>
        <Link to="/search">
          <button style={{ fontSize: "1.3rem" }}>SEARCH QUOTES</button>
        </Link>
      </div>
    </div>
  );
};
