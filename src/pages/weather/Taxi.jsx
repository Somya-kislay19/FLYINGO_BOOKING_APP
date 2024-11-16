import React, { useState, useEffect } from "react";
import "./taxi.css"

const AirportDBPage = () => {
  const [airports, setAirports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

const API_KEY="0736efa0805060dc2fffa5a1567c87ced1957d7e8b21b1fd3210439973667f962986c944c24c1433c8825f94c86cd3c2"


  useEffect(() => {
    const fetchAirports = async () => {
      try {
        const response = await fetch(`https://airportdb.io/api/v1/airports?apikey=${API_KEY}`);
        if (!response.ok) {
          throw new Error("Failed to fetch airport data");
        }
        const data = await response.json();
        setAirports(data.airports); 
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAirports();
  }, [API_KEY]);

  const handleBooking = (airport) => {
    alert(`Booking initiated for ${airport.name}`);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Airport List</h1>
      <table border="1" style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>City</th>
            <th>Country</th>
            <th>IATA Code</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {airports.map((airport) => (
            <tr key={airport.id}>
              <td>{airport.name}</td>
              <td>{airport.city}</td>
              <td>{airport.country}</td>
              <td>{airport.iata_code}</td>
              <td>
                <button onClick={() => handleBooking(airport)}>Book</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AirportDBPage;
