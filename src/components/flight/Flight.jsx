import React, { useState, useEffect } from 'react';

const FlightDetails = () => {
  const [flightData, setFlightData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiKey = process.env.REACT_APP_FLIGHTAPI_API_KEY;
  const apiUrl = `https://api.flightapi.io/onewaytrip/${apiKey}/HEL/OUL/2024-05-20/1/0/0/Economy/USD/US`;

  useEffect(() => {
    const fetchFlightData = async () => {
      try {
        const response = await fetch(apiUrl);
        if (response.headers.get("content-type")?.includes("application/json")) {
          const data = await response.json();
          setFlightData(data);
        } else {
          throw new Error("Received non-JSON response. Check API key or endpoint parameters.");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFlightData();
  }, [apiUrl]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Flight Details</h1>
      {flightData && flightData.itineraries ? (
        flightData.itineraries.map((itinerary) => (
          <div key={itinerary.id} className="flight-card">
            <h2>Airline: {itinerary.items[0].agent_id}</h2>
            <p>Price: {itinerary.pricing_options[0].price.amount} USD</p>
            <a href={itinerary.items[0].url} target="_blank" rel="noopener noreferrer">Book Now</a>
          </div>
        ))
      ) : (
        <p>No flight data available</p>
      )}
    </div>
  );
};

export default FlightDetails;
