import React, { useRef, useEffect, useState } from "react";
import Map from "react-map-gl";
import { Marker } from "react-map-gl";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1Ijoic2FpbW9uc2lkZGlxdWUiLCJhIjoiY2xoNHc0MDkxMXRubzNsb3hpYXNnaWY0dCJ9.yVTz4-c9UoOaZvdPUOkCmQ";

const MapTest = () => {
  const [viewport, setViewport] = useState({
    latitude: 23.684994,
    longitude: 90.356331,
    width: "200%",
    height: "100%",
    zoom: 6,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setViewport({
        ...viewport,
        // latitude: 23.684994,
        // longitude: 90.356331,
      });
    });
  }, []);

  const handleViewportChange = (viewport) => {
    setViewport(viewport);
  };

  const setUserLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setViewport({
        ...viewport,
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        zoom: 12,
      });
    });
  };

  return (
    <div className="h-96">
      <Map
        initialViewState={viewport}
        mapboxApiAccessToken={mapboxgl.accessToken}
        mapStyle="mapbox://styles/saimonsiddique/clh4vr8pp00oz01prgnhwae8v"
        onViewportChange={handleViewportChange}
      >
        <Marker latitude={viewport.latitude} longitude={viewport.longitude}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="currentColor"
            class="bi bi-geo-alt-fill"
            viewBox="0 0 16 16"
          >
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
          </svg>
        </Marker>
      </Map>
      {/* <button className="btn btn-circle" onClick={setUserLocation}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button> */}
    </div>
  );
};

export default MapTest;
