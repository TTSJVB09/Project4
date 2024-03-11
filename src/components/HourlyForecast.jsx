import React, { useContext } from "react";
import { WeatherContext } from "../services/weatherService";

function HourlyForecast() {
  const { weatherData } = useContext(WeatherContext);

  return (
    <div>
      <div className="d-flex flex-row border-top border-bottom overflow-hidden no-scrollbar overscroll-none gap-1 align-items-center text-center justify-content-start overflow-x-auto">
        {weatherData.hourlyForecast.slice(0, 24).map((hour, index) => (
          <div key={index} className="p-3">
            <p>{hour.tempC}°C</p>
            <img src={hour.hourlyIcon} alt="" className="w-10 mx-auto mt-2" />
            <p>{formatTime(hour.time)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function formatTime(inputTime) {
  const [datePart, timePart] = inputTime.split(" ");

  return timePart;
}

export default HourlyForecast;