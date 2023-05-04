import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import MapTest from "../components/MapTest/MapTest";
import NavigationBar from '../components/Navigation/NavigationBar';
import { retriveSelectedDailyHouses } from './../features/dailyHouse/dailyHouseSlice';
import DailyBasisProductDetails from '../components/Products/DailyBasisProductDetails';
import DailyProducrCarousel from '../components/Products/DailyProducrCarousel';
import DailyBasisHouseMap from './../components/Products/DailyBasisHouseMap';

function DailybasisProductDetailsPage() {
  const dispatch = useDispatch();
  const { dailySelectedHouse } = useSelector((state) => state.dailyHouse);
  const [nearbyPlaces, setNearbyPlaces] = useState([]);

  const { id } = useParams();
  // console.log(id);

  useEffect(() => {
    dispatch(retriveSelectedDailyHouses(id));
  }, []);
  // console.log(dailySelectedHouse);

  const storePlacesHandler = (places) => {
    console.log(places);
    setNearbyPlaces(places);
  };

  return (
    <div>
      <NavigationBar isProductDetailsPage={true} />
      {dailySelectedHouse.length > 0 ? (
        <>
          <DailyProducrCarousel />
          <DailyBasisProductDetails storePlacesHandler={storePlacesHandler} />
          {/* <DailyBasisHouseMap /> */}
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

export default DailybasisProductDetailsPage;
