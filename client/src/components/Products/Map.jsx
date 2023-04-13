import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '173vh',
  height: '400px',
  borderRadius: '1rem',
  boxShadow: '2px 2px 8px #000000',

  //   margin: '40px',
};

const c = ['Dhaka', 'Mohakhali', 'Gulshan', 'Banani'];
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
  console.log('marker: ', marker);
};

function Map() {
  return (
    <div className="flex justify-center mt-10 mb-10">
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center[0]}
          zoom={12}
        >
          <Marker position={center[1]} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default React.memo(Map);
