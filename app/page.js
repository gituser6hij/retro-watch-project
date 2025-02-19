"use client";

import { useEffect, useState } from "react";
import "./styles.css"; // Import the CSS file

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [time, setTime] = useState(new Date());

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

  return (
    <main className="container">
      <div className="clock-container">
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
      <div className="dots">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </main>
  );
}
