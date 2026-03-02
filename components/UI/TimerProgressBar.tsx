import React, { useState, useEffect, useRef } from "react";
import "./TimerProgressBar.css"; // Create this file for styling

const TimerProgressBar = ({
  durationInSeconds,
}: {
  durationInSeconds: number;
}) => {
  const [timeLeft, setTimeLeft] = useState(durationInSeconds);
  const [progress, setProgress] = useState(100);
  const timerRef = useRef();

  useEffect(() => {
    // Start the timer
    timerRef.current = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    // Cleanup function to clear the interval when the component unmounts or duration changes
    return () => {
      clearInterval(timerRef.current);
    };
  }, [durationInSeconds]);

  useEffect(() => {
    // Update progress when time changes
    const newProgress = (timeLeft / durationInSeconds) * 100;
    setProgress(newProgress);

    // Stop the timer when it reaches zero
    if (timeLeft <= 0) {
      clearInterval(timerRef.current);
      setTimeLeft(0);
      setProgress(0);
    }
  }, [timeLeft, durationInSeconds]);

  return (
    <div className="timer-bar-container">
      <div
        className="timer-bar-progress"
        style={{ width: `${progress}%` }}
      ></div>
      <div className="timer-bar-label">{timeLeft} seconds remaining</div>
    </div>
  );
};

export default TimerProgressBar;
