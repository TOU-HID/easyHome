import React, { useRef, useEffect, useState } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import mapboxgl from "mapbox-gl";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

mapboxgl.accessToken =
  "pk.eyJ1Ijoic2FpbW9uc2lkZGlxdWUiLCJhIjoiY2xoNHc0MDkxMXRubzNsb3hpYXNnaWY0dCJ9.yVTz4-c9UoOaZvdPUOkCmQ";

const MapTest = ({ nearbyPlaces }) => {
  const [location, setLocation] = useState({});
  const { selectedHouse } = useSelector((state) => state.house);
  const area = selectedHouse[0].area;
  const city = selectedHouse[0].city;
  const address = area.toLowerCase() + "," + city.toLowerCase();
  const [showPopup, setShowPopUp] = useState([false, false, false, false, false]);

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

  return (
    <div className="h-96">
      {location?.lat ? (
        <Map
          initialViewState={{
            latitude: location?.lat,
            longitude: location?.lng,
            width: "200%",
            height: "100%",
            zoom: 17,
          }}
          mapboxApiAccessToken={mapboxgl.accessToken}
          mapStyle="mapbox://styles/saimonsiddique/clh4vr8pp00oz01prgnhwae8v"
        >
          {location?.lat ? (
            <>
              <Marker latitude={location?.lat} longitude={location?.lng}>
                {showPopup && (
                  <Popup
                    longitude={location?.lng}
                    latitude={location?.lat}
                    anchor="top-right"
                    onClose={() => setShowPopUp(!showPopup)}
                  >
                    {area}
                  </Popup>
                )}
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
                  {showPopup && (
                    <Popup
                      longitude={place?.longitude}
                      latitude={place?.latitude}
                      anchor="top-right"
                    // onClose={() => setShowPopUp(!showPopup)}
                    >
                      {place.name}
                    </Popup>
                  )}
                  <i
                    onClick={() => setShowPopUp(!showPopup)}
                    className={`fa-solid fa-house-medical text-xl text-blue-700 ${place.pType === "Healthcare" ? "" : "hidden"
                      }`}
                  ></i>
                  <i
                    onClick={() => setShowPopUp(!showPopup)}
                    className={`fa-solid fa-utensils text-xl text-green-600 ${place.pType === "Food" ? "" : "hidden"
                      }`}
                  ></i>
                  <i
                    onClick={() => setShowPopUp(!showPopup)}
                    className={`fa-solid fa-cart-shopping text-xl text-yellow-900 ${place.pType === "Shop" ? "" : "hidden"
                      }`}
                  ></i>
                  <i
                    onClick={() => setShowPopUp(!showPopup)}
                    className={`fa-solid fa-user-graduate text-xl text-rose-600 ${place.pType === "Education" ? "" : "hidden"
                      }`}
                  ></i>
                  <i
                    onClick={() => setShowPopUp(!showPopup)}
                    className={`fa-solid fa-building-columns text-xl text-black ${place.pType === "Bank" ? "" : "hidden"
                      }`}
                  ></i>
                </Marker>
              ))}
            </>
          ) : null}
        </Map>
      ) : null}
    </div>
  );
};

export default MapTest;
