import React from "react";
import "../css/nav.css";

export const Nav = () => {
  const handleClick = (e) => {
    e.preventDefault();
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  };

  return (
    <React.Fragment>
      <div className="topnav" id="myTopnav">
        <a href="/" className="active">
          Home
        </a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="/search">Search</a>
        <a href="/#" className="icon" onClick={handleClick}>
          <i className="fa fa-bars"></i>
        </a>
      </div>
    </React.Fragment>
  );
};
