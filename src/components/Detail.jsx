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

      <div className="text-center my-6 py-5">
        <p className="text-medium pt-10 text-gray-500">{formattedDate}</p>
        <div className="d-flex justify-content-center align-items-center">
          <img
            className="w-50"
            src={weatherData.currentImage}
            alt="Current weather"
          />
          <p className="fs-3 text-3xl">
            {weatherData.tempC}
            <sup className="top-0.5 text-xs fs-10">°C</sup>
          </p>
        </div>
        <p className="fs-3 text-2xl"><strong>{weatherData.currentCondition}</strong></p>
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
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  };
  return date.toLocaleString("en-US", options);
}

function WeatherInfo({ label, value }) {
  return (
    <div class="col-sm-6">
      <p className="text-gray-500">{label}</p>
      <p>{value}</p>
    </div>
  );
}

export default Detail;