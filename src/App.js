import React from "react";
import { WeatherServiceProvider } from "./services/weatherService";
import { LocationProvider } from "./services/locationContext";
import Detail from "./components/Detail";
import TemperatureChart from "./components/TemperatureChart";
import DailyForecast from "./components/DailyForecast";
import HourlyForecast from "./components/HourlyForecast";

function App() {
  return (
    <LocationProvider>
      <WeatherServiceProvider>
        <div className="container-md mx-auto mt-4 py-5 px-5 bg-gradient bg-white shadow-xl shadow-gray-400 w-75">
          <div className="row">
            <div className="col-md-4">
              <Detail />
            </div>
            <div className="col-md-8">
              <div className="">
                <div >
                  <TemperatureChart />
                </div>
                <div >
                  <HourlyForecast />
                </div>
                <div >
                  <DailyForecast />
                </div>
              </div>
            </div>
          </div>
        </div>
      </WeatherServiceProvider>
    </LocationProvider>
  );
}

export default App;