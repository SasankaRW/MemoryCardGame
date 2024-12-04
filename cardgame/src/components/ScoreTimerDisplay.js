import React from "react";
import "./ScoreTimerDisplay.css";

const ScoreTimerDisplay = ({ matches, mismatches, timeRemaining }) => (
  <div className="score-timer">
    <p>Matches: {matches}</p>
    <p>Mismatches: {mismatches}</p>
    <p>Time Remaining: {timeRemaining}s</p>
  </div>
);

export default ScoreTimerDisplay;
