import React, { useEffect, useState } from "react";
import "./RacePage.css";
import RaceControlCard from "../components/RaceControlCard";

const RacePage = () => {
  const [race, setRace] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchF1Race = async () => {
      try {
        const f1Race = await fetch("https://api.openf1.org/v1/race_control", {
          method: "GET",
        });
        const f1RaceData = await f1Race.json();
        const newF1RaceControlData = f1RaceData?.slice(0, 21);

        setRace(newF1RaceControlData);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchF1Race();
  }, []);

  if (loading)
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Loading...
      </div>
    );

  console.log(race);

  return (
    <div className="race--page__container">
      <div className="drivers--page__img--banner" />
      <div className="race--page__header">
        <h1>Race Control</h1>
        <p>
          Provides information about race control (racing incidents, flags,
          safety car, ...).
        </p>
      </div>
      <div className="race--page__content">
        {race.map((race, i) => (
          <RaceControlCard
            key={i}
            category={race.category}
            date={race.date}
            driver_number={race.driver_number}
            flag={race.flag}
            lap_number={race.lap_number}
            meeting_key={race.meeting_key}
            message={race.message}
            scope={race.scope}
            session_key={race.session_key}
          />
        ))}
      </div>
    </div>
  );
};

export default RacePage;
