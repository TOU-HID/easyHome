import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const NearByPlaces = ({ storePlacesHandler }) => {
  const [seachNearby, setSearchNearby] = useState("Healthcare");
  const [nearbyPlaces, setNearbyPlaces] = useState([]);
  const [location, setLocation] = useState({});
  const { selectedHouse } = useSelector((state) => state.house);

  const area = selectedHouse[0].area;
  const city = selectedHouse[0].city;
  const address = area.toLowerCase() + "," + city.toLowerCase();

  const getUserByID = async (address) => {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyBLaMKfxHm0rw9SowPtFgnHxlOj9r8VcV8`
    );
    return response.data;
  };

  useEffect(() => {
    getUserByID(address).then((res) => {
      let locationFromApi = res.results[0].geometry.location;
      setLocation(locationFromApi);
      fetch(
        `https://barikoi.xyz/v2/api/search/nearby/category/NDY5OTo5T1VLUDVSMjJL/0.5/5?longitude=${locationFromApi.lng}&latitude=${locationFromApi.lat}&ptype=Healthcare`
      )
        .then((response) => response.json())
        .catch((error) => console.error("Error:", error))
        .then((response) => {
          console.log("Healthcare:", response);
          storePlacesHandler(response.places);
          setNearbyPlaces(response.places);
        });
    });
  }, [address]);

  const handleSearchNearby = (e) => {
    setSearchNearby(e.target.id);
    fetch(
      `https://barikoi.xyz/v2/api/search/nearby/category/NDY5OTo5T1VLUDVSMjJL/0.5/5?longitude=${location.lng}&latitude=${location.lat}&ptype=${e.target.id}`
    )
      .then((response) => response.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => {
        console.log(`${e.target.id}`, response);
        storePlacesHandler(response.places);
        setNearbyPlaces(response.places);
      });
  };

  return (
    <div className="flex flex-col">
      <div className="text-3xl font-bold text-rose-500 text-center mb-3">
        Nearby places
      </div>
      <div className="flex justify-center tabs tabs-boxed bg-[#FAF7F5]">
        <button
          className={`tab ${seachNearby === "Healthcare" ? "tab-active" : null
            }`}
          id="Healthcare"
          onClick={handleSearchNearby}
        >
          Healthcare
        </button>
        <button
          className={`tab ${seachNearby === "Education" ? "tab-active" : null}`}
          id="Education"
          onClick={handleSearchNearby}
        >
          Education
        </button>
        <button
          className={`tab ${seachNearby === "Shop" ? "tab-active" : null}`}
          id="Shop"
          onClick={handleSearchNearby}
        >
          Shop
        </button>
        <button
          className={`tab ${seachNearby === "Bank" ? "tab-active" : null}`}
          id="Bank"
          onClick={handleSearchNearby}
        >
          Bank
        </button>
        <button
          className={`tab ${seachNearby === "Food" ? "tab-active" : null}`}
          id="Food"
          onClick={handleSearchNearby}
        >
          Food
        </button>
      </div>
      {nearbyPlaces.length > 0 ?
        <div className="grid grid-cols-2 mx-[10vh]">
          <ul className="list-disc w-80 m-2 ml-6">
            {nearbyPlaces?.slice(1).map((item, i) => {
              return (
                <li key={i}>
                  <div className="text-lg font-semibold text-rose-500">{item.name}</div>
                  <div>
                    <span className="text-md font-semibold">Distance:</span> {(item.distance_in_meters / 1000).toFixed(2)}{" "}
                    km{" "}
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="flex justify-center items-center">
            <div>
              <div className="text-center font-bold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-rose-500 to-rose-300">Nearest {seachNearby}</div>
              <div className="text-lg font-semibold text-rose-500">{nearbyPlaces[0]?.name}</div>
              <div className="text-center">
                <span className="text-md font-semibold">Distance:</span> {(nearbyPlaces[0]?.distance_in_meters / 1000).toFixed(2)}{" "}
                km{" "}
              </div>
            </div>
          </div>
        </div>
        :
        null
      }
    </div>
  );
};

export default NearByPlaces;
