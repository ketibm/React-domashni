import React from "react";
import "./RaceControlCard.css";
import { Link } from "react-router-dom";

const RaceControlCard = ({
  category,
  date,
  driver_number,
  flag,
  lap_number,
  meeting_key,
  message,
  scope,
  session_key,
}) => {
  return (
    <Link
      to={{
        pathname: "/race",
      }}
      className="race--card__container"
    >
      <ul>
        <li>The category of the event is: {category}</li>
        <li>Date: {date}</li>
        <li>F1 driver with number: {driver_number}</li>
        <li>Type of flag: {flag}</li>
        <li>Lap number: {lap_number}</li>
        <li>Meeting key: {meeting_key}</li>
        <li>{message}</li>
        <li>The scope of the event is: {scope}</li>
        <li>Session key: {session_key}</li>
      </ul>
    </Link>
  );
};

export default RaceControlCard;
