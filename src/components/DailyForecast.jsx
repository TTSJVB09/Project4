import React, { useContext } from "react";
import { WeatherContext } from "../services/weatherService";

function DaylyForecast() {
  const { weatherForecastData } = useContext(WeatherContext);

  const formatDate = (inputDate) => {
    const date = new Date(inputDate);
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const day = date.getDate();
    const monthIndex = date.getMonth();
    const monthName = monthNames[monthIndex];

    return `${monthName} ${day}`;
  };


  return (
    <div className="row justify-content-center text-center">
      {weatherForecastData.slice(0, 3).map((forecast, index) => (
        <div
          key={index}
          className="col py-4 px-4 rounded-lg bg-light shadow-sm mx-2 my-2"
          style={{ cursor: "pointer" }}
        >
          <p className="fs-5">{index === 0 ? "Today" : formatDate(forecast.date)}</p>
          <img
            className="w-25 mx-auto mt-2"
            src={forecast.dailyIcon}
            alt="Weather Icon"
          />
          <p className="fw-bold">Humidity</p>
          <p>{forecast.dailyHumidity}%</p>
        </div>
      ))}
    </div>
  );
}

export default DaylyForecast;