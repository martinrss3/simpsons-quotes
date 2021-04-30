import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import gsap, { Bounce, Power1 } from "gsap";
import FallingBart from "../img/falling-bart.png";
import "../css/hero.css";

export const Hero = () => {
  useEffect(() => {
    var tl = gsap.timeline();

    tl.from(".hero-title", 3, {
      scale: 0,
    });

    tl.from(
      ".bart",
      2.4,
      {
        y: -2500,
        ease: Power1.easeIn,
      },
      "-=0.5"
    );

    gsap.from("button", 1.5, { delay: 2, scale: 0, ease: Bounce.easeOut });
  }, []);

  return (
    <div className="hero">
      <img className="bart" src={FallingBart} alt="falling bart" />
      <div className="hero-text">
        <h1 className="hero-title">The Simpsons</h1>
        <Link to="/search">
          <button className="button-search">SEARCH QUOTES</button>
        </Link>
      </div>
    </div>
  );
};
