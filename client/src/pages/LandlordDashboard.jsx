import React, { useEffect } from 'react';

import { retriveAllHouses } from '../features/houses/houseSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import DashBoard from '../components/Admin/DashBoard';

function LandlordDashboard() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(retriveAllHouses());
  }, []);

  const { houseList } = useSelector((state) => state.house);
  return (
    <div>
      {houseList.length > 0 ? (
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
