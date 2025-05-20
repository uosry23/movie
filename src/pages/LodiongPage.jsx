import React from "react";
import "./Lodiong.css";

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <div className="loading-text">LOADING</div>
      <div className="film-reel">
        <div className="film-circle"></div>
        <div className="film-holes">
          <div className="film-hole"></div>
          <div className="film-hole"></div>
          <div className="film-hole"></div>
          <div className="film-hole"></div>
          <div className="film-hole"></div>
          <div className="film-hole"></div>
          <div className="film-hole"></div>
          <div className="film-hole"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
