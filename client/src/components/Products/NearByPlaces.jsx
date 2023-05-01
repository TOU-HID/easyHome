import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const dummySchool = [
  "Sydney International School",
  "Springdale International School",
  "Royal School Dhaka",
];

const dummyHospital = [
  "York Hospital",
  "United Hospital Limited",
  "Evercare Hospital Dhaka",
];

const NearByPlaces = () => {
  const [seachNearby, setSearchNearby] = useState("healthcare");
  const [healthcare, setHealthcare] = useState([]);
  const [education, setEducation] = useState([]);
  const [shop, setShop] = useState([]);
  const [bank, setBank] = useState([]);
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
      fetch(`https://barikoi.xyz/v2/api/search/nearby/category/NDY2Njo0Q1NGM05IS00w/0.5/5?longitude=${locationFromApi.lng}&latitude=${locationFromApi.lat}&ptype=Healthcare`)
        .then(response => response.json())
        .catch(error => console.error('Error:', error))
        .then(response => {
          console.log('healthcare:', response)
          setHealthcare(response.places)
        })
      fetch(`https://barikoi.xyz/v2/api/search/nearby/category/NDY2Njo0Q1NGM05IS00w/0.5/5?longitude=${locationFromApi.lng}&latitude=${locationFromApi.lat}&ptype=Education`)
        .then(response => response.json())
        .catch(error => console.error('Error:', error))
        .then(response => {
          console.log('Education:', response)
          setEducation(response.places)
        })
      fetch(`https://barikoi.xyz/v2/api/search/nearby/category/NDY2Njo0Q1NGM05IS00w/0.5/5?longitude=${locationFromApi.lng}&latitude=${locationFromApi.lat}&ptype=Shop`)
        .then(response => response.json())
        .catch(error => console.error('Error:', error))
        .then(response => {
          console.log('shop:', response)
          setShop(response.places)
        })
      fetch(`https://barikoi.xyz/v2/api/search/nearby/category/NDY2Njo0Q1NGM05IS00w/0.5/5?longitude=${locationFromApi.lng}&latitude=${locationFromApi.lat}&ptype=Bank`)
        .then(response => response.json())
        .catch(error => console.error('Error:', error))
        .then(response => {
          console.log('bank:', response)
          setBank(response.places)
        })
    });
  }, [address]);
  console.log(education);

  const handleSearchNearby = (e) => {
    setSearchNearby(e.target.id);
  };

  return (
    <div className="flex flex-col">
      <div className="text-3xl font-bold text-rose-500 text-center mb-3">Nearby places</div>
      <div className="flex justify-center tabs tabs-boxed bg-[#FAF7F5]">
        <button
          className={`tab ${seachNearby === "healthcare" ? "tab-active" : null}`}
          id="healthcare"
          onClick={handleSearchNearby}
        >
          Nearby Healthcare
        </button>
        <button
          className={`tab ${seachNearby === "education" ? "tab-active" : null}`}
          id="education"
          onClick={handleSearchNearby}
        >
          Nearby Education
        </button>
        <button
          className={`tab ${seachNearby === "shop" ? "tab-active" : null}`}
          id="shop"
          onClick={handleSearchNearby}
        >
          Nearby Shop
        </button>
        <button
          className={`tab ${seachNearby === "bank" ? "tab-active" : null}`}
          id="bank"
          onClick={handleSearchNearby}
        >
          Nearby Bank
        </button>
        <button
          className={`tab ${seachNearby === "value" ? "tab-active" : null}`}
          id="value"
          onClick={handleSearchNearby}
        >
          Nearby Value
        </button>
      </div>
      <div className="flex justify-center">
        {seachNearby === "education" ? (
          <ul className="list-disc w-80 m-2 ml-6">
            {education?.map((edu) => {
              return (
                <li>
                  <div className="text-lg font-semibold text-rose-500">{edu.name}</div>
                  <div>
                    <span className="text-md font-semibold">Distance:</span> {(edu.distance_in_meters / 1000).toFixed(2)}{" "}
                    km{" "}
                  </div>
                </li>
              );
            })}
          </ul>
        ) : seachNearby === "healthcare" ? (
          <ul className="list-disc w-80 m-2 ml-6">
            {healthcare?.map((hc) => {
              return (
                <li>
                  <div className="text-lg font-semibold text-rose-500">{hc.name}</div>
                  <div>
                    <span className="text-md font-semibold">Distance:</span> {(hc.distance_in_meters / 1000).toFixed(2)}{" "}
                    km{" "}
                  </div>
                </li>
              );
            })}
          </ul>
        ) : seachNearby === "shop" ?
          (
            <ul className="list-disc w-80 m-2 ml-6">
              {shop?.map((hc) => {
                return (
                  <li>
                    <div className="text-lg font-semibold text-rose-500">{hc.name}</div>
                    <div>
                      <span className="text-md font-semibold">Distance:</span> {(hc.distance_in_meters / 1000).toFixed(2)}{" "}
                      km{" "}
                    </div>
                  </li>
                )
              })}
            </ul>
          ) :
          (
            <ul className="list-disc w-80 m-2 ml-6">
              {bank?.map((hc) => {
                return (
                  <li>
                    <div className="text-lg font-semibold text-rose-500">{hc.name}</div>
                    <div>
                      <span className="text-md font-semibold">Distance:</span> {(hc.distance_in_meters / 1000).toFixed(2)}{" "}
                      km{" "}
                    </div>
                  </li>
                )
              })}
            </ul>
          )
        }
      </div>
    </div>
  );
};

export default NearByPlaces;
