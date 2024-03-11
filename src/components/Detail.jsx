import React, { useContext } from "react";
import { WeatherContext } from "../services/weatherService";
import Input from "./Input";

function Detail() {
  const { weatherData } = useContext(WeatherContext);
  const formattedDate = formatDate(weatherData.localTime);

  return (
    <div>
      <div className="row justify-content-center align-items-center text-sm my-6">
        <div className="col-4">Your city</div>
        <div className="col-8">
          <Input />
        </div>
      </div>

      <div className="text-center my-6">
        <p className="text-base pt-10 text-gray-500">{formattedDate}</p>
        <div className="d-flex justify-content-center align-items-center">
          <img
            className="w-28"
            src={weatherData.currentImage}
            alt="Current weather"
          />
          <p className="font-medium text-3xl">
            {weatherData.tempC}
            <sup className="top-0.5 text-xs font-medium">°C</sup>
          </p>
        </div>
        <p className="font-medium text-2xl">{weatherData.currentCondition}</p>
      </div>

      <div className="row justify-content-center gap-7 text-center py-4">
        <WeatherInfo
          label="Humidity"
          value={`${weatherData.currentHumidity}%`}
        />
        <WeatherInfo label="Wind speed" value={`${weatherData.wind} km/h`} />
      </div>
    </div>
  );
}

function formatDate(dateString) {
  const date = new Date(dateString);
  const options = {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  return date.toLocaleString("en-US", options);
}

function WeatherInfo({ label, value }) {
  return (
    <div>
      <p className="text-gray-500">{label}</p>
      <p>{value}</p>
    </div>
  );
}

export default Detail;