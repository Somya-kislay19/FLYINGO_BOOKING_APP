import React, { useState } from "react";
import "./we.css"; // Link to the CSS file

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("");
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    setError(""); // Clear previous errors
    if (!city.trim()) {
      setError("Please enter a city name");
      return;
    }
    try {
      const API_KEY = "634524179037696037483168f5933553"; // Replace with your Weatherstack API key
      const url = `http://api.weatherstack.com/current?access_key=${API_KEY}&query=${city}`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Failed to fetch weather data");
      }

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error.info || "City not found");
      }

      setWeatherData({
        temperature: data.current.temperature,
        location: data.location.name,
        country: data.location.country,
        weatherDescription: data.current.weather_descriptions[0],
        windSpeed: data.current.wind_speed,
        humidity: data.current.humidity,
        weatherIcon: data.current.weather_icons[0],
      });
    } catch (error) {
      setWeatherData(null);
      setError(error.message);
    }
  };

  return (
    <div className="weather-container">
      <h1 className="app-title">Weather App</h1>
      <div className="search-bar">
        <input
          type="text"
          className="search-input"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
        />
        <button className="search-button" onClick={fetchWeather}>
          Search
        </button>
      </div>
      {error && <p className="error-message">{error}</p>}
      {weatherData && (
        <div className="weather-info">
          <h2 className="location">{weatherData.location}, {weatherData.country}</h2>
          <img src={weatherData.weatherIcon} alt="Weather Icon" className="weather-icon" />
          <p className="temperature">{weatherData.temperature}°C</p>
          <p className="weather-description">{weatherData.weatherDescription}</p>
          <div className="additional-info">
            <p>Humidity: {weatherData.humidity}%</p>
            <p>Wind Speed: {weatherData.windSpeed} km/h</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherApp
