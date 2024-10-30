import React, { useEffect, useState } from 'react';
import "./we.css";
import clear_icon from "../../assests/sky.jpg";
const We = () => {
const [weatherData, setWeatherData] = useState(false);

const allicons = {
    "01d":clear_icon
}


    const search = async (city) =>{
        try{
            const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.REACT_APP_API_KEY}`;


            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            
            setWeatherData({
                humidity : data.main.humidity,
                windSpeed : data.wind.speed,
                temperature : Math.floor(data.main.temp),
                location: data.name
            })
        } catch (error) {

        }
    }

    useEffect(()=>{
        search("London");
    },[])
  return (
    <div className="weather-page">
      <div className="header">
        <h1>Weather Forecast</h1>
      </div>

      <div className="weather">
        <div className="search-bar">
          <input type="text" placeholder="Search city" className="search-input" />
          <button className="search-btn">Search</button>
        </div>

        <div className="weather-details">
          <img src={require('./sky.jpg')} alt="weather icon" className="weather-icon" />
          <div className="temp-location">
            <p className="temperature">16°C</p>
            <p className="location">London</p>
          </div>
        </div>

        <div className="extra-info">
          <div className="info-item">
            <p>Humidity</p>
            <p>78%</p>
          </div>
          <div className="info-item">
            <p>Wind</p>
            <p>5 km/h</p>
          </div>
          <div className="info-item">
            <p>Sunrise</p>
            <p>6:45 AM</p>
          </div>
          <div className="info-item">
            <p>Sunset</p>
            <p>5:52 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default We;
