import React from "react";
import "./PitCard.css";
import { Link } from "react-router-dom";

const PitCard = ({
  date,
  driver_number,
  pit_duration,
  lap_number,
  meeting_key,
  session_key,
}) => {
  return (
    <Link
      to={{
        pathname: "/pit",
      }}
      className="pit--card__container"
    >
      <ul>
        <li>F1 driver with number: {driver_number}</li>
        <li>Session key: {session_key}</li>
        <li>Meeting key: {meeting_key}</li>
        <li>Time spent in the pit: {pit_duration}s</li>
        <li>Date: {date}</li>
        <li>Lap number: {lap_number}</li>
      </ul>
    </Link>
  );
};

export default PitCard;
