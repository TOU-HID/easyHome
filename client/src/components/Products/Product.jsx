import React, { useEffect } from 'react';
import ProductCard from './ProductCard';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { retriveAllHouses } from '../../features/houses/houseSlice';
import { retriveAllDailyHouses } from '../../features/dailyHouse/dailyHouseSlice';
import DailyBasisProductCard from './DailyBasisProductCard';
function Product({ showAll, dailyBasis }) {
  // const dailyBasis = true;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { houseList } = useSelector((state) => state.house);
  const { dailyHouseList } = useSelector((state) => state.dailyHouse);
  useEffect(() => {
    dispatch(retriveAllHouses());
    dispatch(retriveAllDailyHouses());
  }, []);

  // console.log(houseList);

  return (
    <>
      {dailyBasis ? (
        <div>
          {!showAll ? (
            <>
              <div className="flex gap-10 flex-wrap justify-start mt-[3vh]  mb-[5vh] ml-[5vw] ">
                {dailyHouseList
                  .filter((house) => house.isavailable === true)
                  .slice(0, 4)
                  .map((house, i) => {
                    return <DailyBasisProductCard key={i} house={house} />;
                  })}
              </div>
            </>
          ) : (
            <>
              <div className="flex gap-10 flex-wrap justify-start mt-[3vh]  mb-[5vh] ml-[5vw]">
                {dailyHouseList
                  .filter((house) => house.isavailable === true)
                  .map((house, i) => {
                    return <DailyBasisProductCard key={i} house={house} />;
                  })}
              </div>
            </>
          )}
        </div>
      ) : (
        <div>
          {!showAll ? (
            <>
              <div className="flex gap-10 flex-wrap justify-start mt-[3vh]  mb-[5vh] ml-[5vw] ">
                {houseList
                  .filter((house) => house.isavailable === true)
                  .slice(0, 4)
                  .map((house, i) => {
                    return <ProductCard key={i} house={house} />;
                  })}
              </div>
            </>
          ) : (
            <>
              <div className="flex gap-10 flex-wrap justify-start mt-[3vh]  mb-[5vh] ml-[5vw]">
                {houseList
                  .filter((house) => house.isavailable === true)
                  .map((house, i) => {
                    return <ProductCard key={i} house={house} />;
                  })}
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}

export default Product;
