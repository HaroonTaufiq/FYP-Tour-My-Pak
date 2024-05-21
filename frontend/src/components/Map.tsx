import React, { useRef, useEffect, useState } from 'react';
import * as maptilersdk from '@maptiler/sdk';
import "@maptiler/sdk/dist/maptiler-sdk.css";


export default function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const islamabad = { lng: 73.0714, lat: 33.7182 }; // Replace with your exact coordinates
  const [zoom] = useState(17);
  maptilersdk.config.apiKey = 'rrXqr7lyn4zNkJl7314z'; // Replace with your actual API key

  useEffect(() => {
    if (map.current) return; // Stops map from initializing more than once

    map.current = new maptilersdk.Map({
      container: mapContainer.current,
      style: maptilersdk.MapStyle.STREETS, // Choose a map style (streets, satellite, etc.)
      center: [islamabad.lng, islamabad.lat],
      zoom: zoom,
    });

    new maptilersdk.Marker({ color: "#FF0000" }) // Adjust marker color as desired
      .setLngLat([islamabad.lng, islamabad.lat])
      .addTo(map.current);
  }, [islamabad.lng, islamabad.lat, zoom]);

  return (
    <div className="map-wrap">
      <div ref={mapContainer} className="map" />
    </div>
  );
}``
