import React, { useContext, useState } from "react";
import { LocationContext } from "../services/locationContext";
import { WeatherContext } from "../services/weatherService";

function Input() {
  const [inputLocation, setInputLocation] = useState("");
  const { changeLocation } = useContext(LocationContext);
  const { weatherData } = useContext(WeatherContext);

  const handleLocationChange = (e) => setInputLocation(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    changeLocation(inputLocation);
    setInputLocation("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="d-flex">
        <input
          value={inputLocation}
          onChange={handleLocationChange}
          type="text"
          placeholder={weatherData.name}
          className="form-control rounded-md mr-2"
          autoFocus
        />
        <button type="submit" className="btn btn-primary d-none"></button>
      </form>
    </div>
  );
}

export default Input;