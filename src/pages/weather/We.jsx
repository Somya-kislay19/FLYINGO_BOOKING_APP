import React, { useState, useEffect } from "react";
import "./we.css"

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [city, setCity] = useState("");
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const fetchWeatherData = async (lat, lon) => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch weather data");
      }
      const data = await response.json();
      setWeatherData(data.current_weather);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchCoordinates = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
          city
        )}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch location data");
      }
      const data = await response.json();
      if (data.results && data.results.length > 0) {
        const { latitude, longitude } = data.results[0];
        setLatitude(latitude);
        setLongitude(longitude);
        fetchWeatherData(latitude, longitude);
      } else {
        throw new Error("City not found");
      }
    } catch (err) {
      setError(err.message);
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Weather App</h1>
      <p>Enter a city name to fetch weather data:</p>
      <input
        type="text"
        placeholder="City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={{ marginRight: "10px", padding: "5px" }}
      />
      <button onClick={fetchCoordinates} style={{ padding: "5px 10px" }}>
        Fetch Weather
      </button>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p style={{ color: "red" }}>Error: {error}</p>
      ) : (
        weatherData && (
          <div style={{ marginTop: "20px" }}>
            <h2>Current Weather in {city}</h2>
            <p>Temperature: {weatherData.temperature}°C</p>
            <p>Windspeed: {weatherData.windspeed} km/h</p>
            <p>Wind Direction: {weatherData.winddirection}°</p>
            <p>Weather Code: {weatherData.weathercode}</p>
          </div>
        )
      )}
    </div>
  );
};

export default WeatherApp;
