import React, { useEffect } from 'react';

import { retriveAllHouses } from '../features/houses/houseSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import DashBoard from '../components/Admin/DashBoard';
import { retriveAllDailyHouses } from '../features/dailyHouse/dailyHouseSlice';

function LandlordDashboard() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(retriveAllHouses());
    dispatch(retriveAllDailyHouses());
  }, []);

  // NEED TO DISPATCH
  // get DailyAllHOuse
  // Monthly get All house

  const { houseList } = useSelector((state) => state.house);
  const { dailyHouseList } = useSelector((state) => state.dailyHouse);
  return (
    <div>
      {houseList.length && dailyHouseList.length > 0 ? (
        <div>
          <div>
            <DashBoard />
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default LandlordDashboard;
