import React from "react";
import { useState } from "react";

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
  const [seachNearby, setSearchNearby] = useState("");

  const handleSearchNearby = (e) => {
    setSearchNearby(e.target.id);
  };

  return (
    <div className="flex flex-col">
      <div className="tabs tabs-boxed bg-[#FAF7F5]">
        <button
          className={`tab ${seachNearby === "hospital" ? "tab-active" : null}`}
          id="hospital"
          onClick={handleSearchNearby}
        >
          Nearby Hospitals
        </button>
        <button
          className={`tab ${seachNearby === "school" ? "tab-active" : null}`}
          id="school"
          onClick={handleSearchNearby}
        >
          Nearby Schools
        </button>
      </div>
      {seachNearby === "school" ? (
        <ul className="list-disc w-80 m-2 ml-6">
          {dummySchool.map((school) => {
            console.log(school);
            return (
              <li>
                <div className="text-lg font-semibold">{school}</div>
                <div>
                  <span className="text-md font-semibold">Distance:</span> {"X"}{" "}
                  mi{" "}
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <ul className="list-disc w-80 m-2 ml-6">
          {dummyHospital.map((school) => {
            console.log(school);
            return (
              <li>
                <div className="text-lg font-semibold">{school}</div>
                <div>
                  <span className="text-md font-semibold">Distance:</span> {"X"}{" "}
                  mi{" "}
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default NearByPlaces;
