import React, { useState, useEffect } from "react";

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [latitude, setLatitude] = useState(28.6139); // Default for New Delhi
  const [longitude, setLongitude] = useState(77.209);

  const fetchWeatherData = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
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

  useEffect(() => {
    fetchWeatherData();
  }, [latitude, longitude]);

  const handleCityChange = (lat, lon) => {
    setLatitude(lat);
    setLongitude(lon);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Weather App</h1>
      <p>Enter coordinates to fetch weather data:</p>
      <input
        type="number"
        placeholder="Latitude"
        value={latitude}
        onChange={(e) => setLatitude(e.target.value)}
        style={{ marginRight: "10px", padding: "5px" }}
      />
      <input
        type="number"
        placeholder="Longitude"
        value={longitude}
        onChange={(e) => setLongitude(e.target.value)}
        style={{ marginRight: "10px", padding: "5px" }}
      />
      <button onClick={fetchWeatherData} style={{ padding: "5px 10px" }}>
        Fetch Weather
      </button>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p style={{ color: "red" }}>Error: {error}</p>
      ) : (
        weatherData && (
          <div style={{ marginTop: "20px" }}>
            <h2>Current Weather</h2>
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
