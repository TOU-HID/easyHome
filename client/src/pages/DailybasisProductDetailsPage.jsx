import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import NavigationBar from '../components/Navigation/NavigationBar';
import { retriveSelectedDailyHouses } from './../features/dailyHouse/dailyHouseSlice';
import DailyBasisProductDetails from '../components/Products/DailyBasisProductDetails';
import DailyProducrCarousel from '../components/Products/DailyProducrCarousel';
import DailyBasisHouseMap from './../components/Products/DailyBasisHouseMap';

function DailybasisProductDetailsPage() {
  const dispatch = useDispatch();
  const { dailySelectedHouse } = useSelector((state) => state.dailyHouse);

  const { id } = useParams();
  // console.log(id);

  useEffect(() => {
    dispatch(retriveSelectedDailyHouses(id));
  }, []);
  // console.log(dailySelectedHouse);

  return (
    <div>
      <NavigationBar isProductDetailsPage={true} />
      {dailySelectedHouse.length > 0 ? (
        <>
          <DailyProducrCarousel />
          <DailyBasisProductDetails />
          <DailyBasisHouseMap />
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default DailybasisProductDetailsPage;
