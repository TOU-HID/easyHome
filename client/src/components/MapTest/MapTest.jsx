import React, { useRef, useEffect, useState } from "react";
import Map from "react-map-gl";
import { Marker } from "react-map-gl";
import mapboxgl from "mapbox-gl";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

mapboxgl.accessToken =
  "pk.eyJ1Ijoic2FpbW9uc2lkZGlxdWUiLCJhIjoiY2xoNHc0MDkxMXRubzNsb3hpYXNnaWY0dCJ9.yVTz4-c9UoOaZvdPUOkCmQ";

const MapTest = ({ nearbyPlaces }) => {
  const [viewport, setViewport] = useState({
    latitude: 23.684994,
    longitude: 90.356331,
    width: "200%",
    height: "100%",
    zoom: 12,
  });
  const [location, setLocation] = useState({});
  const { selectedHouse } = useSelector((state) => state.house);
  const area = selectedHouse[0].area;
  const city = selectedHouse[0].city;
  const address = area.toLowerCase() + "," + city.toLowerCase();

  const getUserByID = async (address) => {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyBLaMKfxHm0rw9SowPtFgnHxlOj9r8VcV8`
    );
    // console.log(response.data);
    return response.data;
  };

  useEffect(() => {
    getUserByID(address).then((res) => {
      let locationFromApi = res.results[0].geometry.location;
      setLocation(locationFromApi);
    });
  }, [address]);

  useEffect(() => {}, []);
  console.log(location);

  return (
    <div className="h-96">
      <Map
        initialViewState={viewport}
        mapboxApiAccessToken={mapboxgl.accessToken}
        mapStyle="mapbox://styles/saimonsiddique/clh4vr8pp00oz01prgnhwae8v"
      >
        {location?.lat ? (
          <>
            <Marker latitude={location?.lat} longitude={location?.lng}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                fill="#000000"
                class="bi bi-geo-alt-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
              </svg>
            </Marker>
            {nearbyPlaces.map((place, i) => (
              <Marker
                key={i}
                latitude={place.latitude}
                longitude={place.longitude}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  fill="#E11D48"
                  class="bi bi-geo-alt-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                </svg>
              </Marker>
            ))}
          </>
        ) : null}
      </Map>
    </div>
  );
};

export default MapTest;
