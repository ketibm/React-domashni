import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./App.css";
import "./homework.css";

function Homework() {
  const [data, setData] = useState({
    name: "",
    lastName: "",
    phoneNumber: "",
    yearOfBirth: "",
  });

  const [flag, setFlag] = useState(false);
  const [date, setDate] = useState();

  useEffect(() => {
    if (flag) {
      const isEmpty = Object.values(data).some((value) => value === "");
      if (isEmpty) {
        alert("Alert: All fields are required!");
      }
    }
  }, [data, flag]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(data).some((value) => value === "")) {
      alert("Alert: All fields are required!");
    } else {
      setFlag(true);
    }
  };

  const handleChange = (value, inputName) => {
    setData({ ...data, [inputName]: value.target.value });
  };

  const handleDateChange = (date) => {
    setDate(date);
    const year = date.getFullYear();
    setData({ ...data, yearOfBirth: year.toString() });
  };

  return (
    <div>
      {flag ? (
        <div className="card">
          <div className="header">
            <img
              src="https://icons.veryicon.com/png/o/miscellaneous/micro-credit/personal-data-27.png"
              weight="40px"
              height="20px"
            />
            <h2>User data</h2>
          </div>
          <p>Name: {data.name}</p>
          <p>Last Name: {data.lastName}</p>
          <p>Phone Number: {data.phoneNumber}</p>
          <p>Year of Birth: {data.yearOfBirth}</p>
        </div>
      ) : (
        <form>
          <input
            onChange={(e) => handleChange(e, "name")}
            value={data.name}
            type="text"
            placeholder="Name"
          />
          <br />
          <input
            onChange={(e) => handleChange(e, "lastName")}
            value={data.lastName}
            type="text"
            placeholder="Last Name"
          />
          <br />
          <input
            onChange={(e) => handleChange(e, "phoneNumber")}
            value={data.phoneNumber}
            type="number"
            placeholder="Phone Number"
          />
          <br />
          <DatePicker
            selected={date}
            onChange={handleDateChange}
            dateFormat="yyyy"
            showYearPicker
            placeholderText="Year of Birth"
          />
          <br />
          <button onClick={(e) => handleSubmit(e)}>Submit</button>
        </form>
      )}
    </div>
  );
}

export default Homework;
