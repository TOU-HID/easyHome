import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import MapTest from "../components/MapTest/MapTest";
import ProductDetails from "../components/Products/ProductDetails";
import ProductCarousel from "../components/Products/ProductCarousel";
import { retriveSelectedHouses } from "./../features/houses/houseSlice";
import NavigationBar from "../components/Navigation/NavigationBar";

function ProductDetailsPage() {
  const dispatch = useDispatch();
  const { selectedHouse } = useSelector((state) => state.house);
  const [nearbyPlaces, setNearbyPlaces] = useState([]);
  // const { dailySelectedHouse } = useSelector((state) => state.dailyHouse);

  const { id } = useParams();

  useEffect(() => {
    dispatch(retriveSelectedHouses(id));
    // dispatch(retriveSelectedDailyHouses(id));
  }, []);

  const storePlacesHandler = (places) => {
    console.log(places);
    setNearbyPlaces(places);
  };
  // console.log(location);

  return (
    <div>
      <NavigationBar isProductDetailsPage={true} />
      {selectedHouse.length > 0 ? (
        <>
          <ProductCarousel />
          <ProductDetails storePlacesHandler={storePlacesHandler} />

          {/* <ProductRating /> */}
          {/* <Map /> */}
          <div className="flex justify-center bg-[#F6F3F1]rounded-xl m-4">
            <div className="w-10/12 shadow-xl rounded border-2 border-gray-400">
              <MapTest nearbyPlaces={nearbyPlaces} />
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
