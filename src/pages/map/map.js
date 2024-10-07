import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import './map.css';
import 'mapbox-gl/dist/mapbox-gl.css'; 
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'; 

// Replace this with your own Mapbox access token
mapboxgl.accessToken = 'pk.eyJ1Ijoid2ViZGV2c2ltcGxpZmllZCIsImEiOiJja2d1c2x2djAwODE1MnltaGNzeHljcWN4In0.4u6YymF-wOIYpDoUTMcNOQ';

const MapC = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map', 
      style: 'mapbox://styles/mapbox/streets-v11', 
      center: [77.5946, 12.9716],
      zoom: 12,
    });

    
    map.addControl(new mapboxgl.NavigationControl());

    
    const directions = new MapboxDirections({
      accessToken: mapboxgl.accessToken,
      unit: 'metric',
      profile: 'mapbox/driving',
    });

    map.addControl(directions, 'top-left');

    
    return () => map.remove();
  }, []);

  return <div id="map" style={{ height: '100vh', width: '100vw' }}></div>;
};

export default MapC;
