import React, { useEffect, useState } from "react";
import "./PitPage.css";
import PitCard from "../components/PitCard";

const PitPage = () => {
  const [pit, setPit] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchF1Pit = async () => {
      try {
        const f1Pit = await fetch("https://api.openf1.org/v1/pit", {
          method: "GET",
        });
        const f1PitData = await f1Pit.json();
        const newF1PitData = f1PitData
          ?.slice(0, 21)
          .sort((a, b) => a.pit_duration - b.pit_duration);

        setPit(newF1PitData);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchF1Pit();
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

  console.log(pit);

  return (
    <div className="pit--page__container">
      <div className="drivers--page__img--banner" />
      <div className="pit--page__header">
        <h1>Pit</h1>
        <p>Provides information about cars going through the pit lane.</p>
      </div>
      <div className="pit--page__content">
        {pit.map((pit, i) => (
          <PitCard
            key={i}
            date={pit.date}
            driver_number={pit.driver_number}
            pit_duration={pit.pit_duration}
            lap_number={pit.lap_number}
            meeting_key={pit.meeting_key}
            session_key={pit.session_key}
          />
        ))}
      </div>
    </div>
  );
};

export default PitPage;
