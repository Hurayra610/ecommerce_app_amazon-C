import React from "react";
import "./css/Headers.css";

function Headers() {
  return (
    <div className="headers">
      <div className="headers__name">
        <a href="#">amazon-C</a>
      </div>
      <div className="search">
        <input type="text" placeholder="Search" className="input" />
        <button type="submit" className="btn">
          Search
        </button>
      </div>
      <div className="headers__options">
        <a href="#">Cart</a>
        <a href="#">Sign In</a>
      </div>
    </div>
  );
}

export default Headers;
