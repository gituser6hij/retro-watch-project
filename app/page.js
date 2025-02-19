"use client";

import { useEffect, useState } from "react";
import "./styles.css"; // Import the CSS file

<link rel="icon" href="/favicon.ico" sizes="any" />

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [time, setTime] = useState(new Date());
  const [currentDesign, setCurrentDesign] = useState(1); // Start with first design

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num) => {
    return num.toString().padStart(2, "0");
  };

  if (!mounted) {
    return (
      <main className="container">
        <div className="clock-container">
          <div className="clock">
            <span className="digit">00</span>:<span className="digit">00</span>:<span className="digit">00</span>
          </div>
          <div className="loading-text">Loading...</div>
        </div>
        <div className="dots">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </main>
    );
  }

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  };

  // Function to change design
  const changeDesign = (newDesign) => {
    setCurrentDesign(newDesign);
  };

  return (
    <main className="container">
      <div className="button-container">
          <button className="fullscreen-button" onClick={toggleFullScreen}>
            {"\u26F6"}
          </button>

          <button className="fullscreen-button" onClick={() => changeDesign(2)}>{'\u{1F552}'}</button>
          <button className="fullscreen-button" onClick={() => changeDesign(3)}>{'\u{1F552}'}</button>
          <button className="fullscreen-button" onClick={() => changeDesign(1)}>{'\u{1F552}'}</button>

        </div>
      <div className={`clock-container design-${currentDesign}`}>
        
        <div className="clock">
          <span className="digit">{formatNumber(time.getHours())}</span>
          <span className="blink">:</span>
          <span className="digit">{formatNumber(time.getMinutes())}</span>
          <span className="blink">:</span>
          <span className="digit">{formatNumber(time.getSeconds())}</span>
        </div>
        <div className="date">
          {time.toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>
      </div>
      {currentDesign === 1 && (
      <>
        <div className="dots">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
        <div className="message">Have a good day!</div>
      </>
    )}
    </main>
  );
}