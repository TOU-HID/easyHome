import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Map from "../components/Products/Map";
import ProductDetails from "../components/Products/ProductDetails";
import ProductCarousel from "../components/Products/ProductCarousel";
import { retriveSelectedHouses } from "./../features/houses/houseSlice";
import NavigationBar from "../components/Navigation/NavigationBar";
import axios from "axios";

import { retriveSelectedDailyHouses } from "./../features/dailyHouse/dailyHouseSlice";
import DailyBasisProductDetails from "../components/Products/DailyBasisProductDetails";
import MapTest from "../components/MapTest/MapTest";

function ProductDetailsPage() {
  const dispatch = useDispatch();
  const [location, setLocation] = useState();
  const { selectedHouse } = useSelector((state) => state.house);
  const { dailySelectedHouse } = useSelector((state) => state.dailyHouse);

  const { id } = useParams();
  // const area = selectedHouse[0].area;
  // const city = selectedHouse[0].city;
  // const address = area.toLowerCase() + "," + city.toLowerCase();

  // const getUserByID = async (address) => {
  //   const response = await axios.get(
  //     `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyBLaMKfxHm0rw9SowPtFgnHxlOj9r8VcV8`
  //   );
  //   return response.data;
  // };

  // useEffect(() => {
  //   getUserByID(address).then((res) => {
  //     let locationFromApi = res.results[0].geometry.location;
  //     // console.log('INSIDE', locationFromApi);
  //     setLocation(locationFromApi);
  //     // location.push(locationFromApi);
  //   });
  // }, []);

  useEffect(() => {
    dispatch(retriveSelectedHouses(id));
    // dispatch(retriveSelectedDailyHouses(id));
  }, []);

  console.log(location);

  return (
    <div>
      <NavigationBar isProductDetailsPage={true} />
      {selectedHouse.length > 0 ? (
        <>
          <ProductCarousel />
          <ProductDetails />

          {/* <ProductRating /> */}
          {/* <Map /> */}
          <div className="flex justify-center bg-[#F6F3F1]rounded-xl m-4">
            <div className="w-10/12 shadow-xl rounded border-2 border-gray-400">
              <MapTest />
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default ProductDetailsPage;
