import React, { useState } from "react";
import Conditions from "./Conditions";
import axios from "axios";

function Weather() {
  const [searchValue, setSearchValue] = useState("");
  const [weather, setWeather] = useState(null);
  const [icon, setIcon] = useState(null);

  function showTemperature(response) {
    setWeather([
      `City: ${response.data.name}`,
      `Temperature: ${Math.round(response.data.main.temp)}°C`,
      `Description: ${response.data.weather[0].description}`,
      `Humidity: ${response.data.main.humidity}%`,
      `Wind: ${Math.round(response.data.wind.speed)} m/s`,
    ]);
    setIcon(
      `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }

  function callApi(city) {
    const key = "782c11d8eafac460882fd8ac43f6aacd";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
    axios.get(url).then(showTemperature);
  }

  function handleSubmit(event) {
    event.preventDefault();
    callApi(searchValue);
    setSearchValue("");
  }

  function searchCity(event) {
    setSearchValue(event.target.value);
  }

  return (
    <div className="search-content">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter a city..."
          value={searchValue}
          onChange={searchCity}
        />
        <input type="submit" value="Search" />
      </form>
      <Conditions weather={weather} icon={icon} />
    </div>
  );
}

export default Weather;
