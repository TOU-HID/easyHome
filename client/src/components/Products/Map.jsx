import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useSelector } from "react-redux";
import axios from "axios";
import ReactMapGL from "react-map-gl";

const containerStyle = {
  width: "175vh",
  height: "400px",
  borderRadius: "1rem",
  boxShadow: "2px 2px 8px #000000",

  //   margin: '40px',
};

const c = ["Dhaka", "Mohakhali", "Gulshan", "Banani"];
const center = [
  {
    lat: 23.7644025,
    lng: 90.389015,
  },

  {
    lat: 23.7794681,
    lng: 90.4046308,
  },

  {
    lat: 39.1895897,
    lng: 66.8633975,
  },
  {
    lat: 23.790321,
    lng: 90.4076959,
  },
];

const onLoad = (marker) => {
  console.log("marker: ", marker);
};

const getUserByID = async (address) => {
  const response = await axios.get(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyBLaMKfxHm0rw9SowPtFgnHxlOj9r8VcV8`
  );
  return response.data;
};

function Map() {
  const { selectedHouse } = useSelector((state) => state.house);
  const area = selectedHouse[0].area;
  const city = selectedHouse[0].city;
  const address = area.toLowerCase() + "," + city.toLowerCase();
  const bangladesh = {
    lat: 23.684994,
    lng: 90.356331,
  };
  const [location, setLocation] = useState();
  // for getting coordinates
  // console.log(address);
  useEffect(() => {
    getUserByID(address).then((res) => {
      let locationFromApi = res.results[0].geometry.location;
      // console.log('INSIDE', locationFromApi);
      setLocation(locationFromApi);
      // location.push(locationFromApi);
    });
  }, [address]);
  return (
    <div className="flex justify-center mt-10 mb-10">
      <LoadScript googleMapsApiKey={process.env.GOOGLE_MAPS_API_KEY}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={bangladesh}
          zoom={12}
        >
          {location !== undefined ? (
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={{ lat: location.lat, lng: location.lng }}
              zoom={14}
            >
              <Marker position={{ lat: location.lat, lng: location.lng }} />
            </GoogleMap>
          ) : (
            <Marker position={{ lat: 23.7794681, lng: 90.4046308 }} />
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default React.memo(Map);
