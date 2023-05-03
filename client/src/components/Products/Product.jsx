import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { retriveAllHouses } from '../../features/houses/houseSlice';
import { retriveAllDailyHouses } from '../../features/dailyHouse/dailyHouseSlice';
import DailyBasisProductCard from './DailyBasisProductCard';

function Product({ showAll, dailyBasis }) {
  const dispatch = useDispatch();
  const [monthlyHouses, setMonthlyHouses] = useState([])
  const [dailyHouses, setDailyHouses] = useState([])
  const { houseList } = useSelector((state) => state.house);
  const { dailyHouseList } = useSelector((state) => state.dailyHouse);
  const { type, location, date, price, rooms } = useSelector((state) => state.filter);
  // console.log(date);
  // console.log('monthly', houseList);
  // console.log('daily', dailyHouseList);

  useEffect(() => {
    dispatch(retriveAllHouses());
    dispatch(retriveAllDailyHouses());
  }, []);

  useEffect(() => {
    let tempList = []
    if (type === 'monthly') {
      if (location && price?.maxPrice && rooms) {
        tempList = houseList.filter(house =>
          house.area.toLowerCase().match(location.toLowerCase()) &&
          // house.rent.toString() === price.minPrice &&
          house.rent.toString() <= price.maxPrice &&
          house.bedroom === rooms
        )
        setMonthlyHouses(tempList)
      }
      else if (location && !price.minPrice && rooms) {
        tempList = houseList.filter(house =>
          house.area === location &&
          house.bedroom === rooms
        )
        setMonthlyHouses(tempList)
      } else if (!location && !price.minPrice && rooms) {
        tempList = houseList.filter(house =>
          house.bedroom === rooms
        )
        setMonthlyHouses(tempList)
      }
      else {
        setMonthlyHouses(houseList)
      }
    } else {
      if (location && !price?.maxPrice && !rooms) {
        tempList = dailyHouseList.filter(house =>
          house.area.toLowerCase().match(location.toLowerCase())
        )
        setDailyHouses(tempList)
      } else if (location && price?.maxPrice && rooms) {
        tempList = dailyHouseList.filter(house =>
          house.area.toLowerCase().match(location.toLowerCase()) &&
          house.rentperday.toString() <= price.maxPrice &&
          house.bedroom === rooms
        )
        setDailyHouses(tempList)
      } else {
        setDailyHouses(dailyHouseList)
      }
    }
  }, [dispatch, type, location, date, price, rooms, houseList])

  return (
    <>
      {type === 'daily' ? (
        <div>
          <div className="flex gap-10 flex-wrap justify-start mt-[3vh] mb-[5vh] ml-[5vw]">
            {dailyHouses
              .filter((house) => house.isavailable === true)
              .map((house, i) => {
                return <DailyBasisProductCard key={i} house={house} />;
              })}
          </div>
        </div>
      ) : (
        <div>
          <div className="flex gap-10 flex-wrap justify-start mt-[3vh] mb-[5vh] ml-[5vw]">
            {monthlyHouses
              .filter((house) => house.isavailable === true)
              .map((house, i) => {
                return <ProductCard key={i} house={house} />;
              })}
          </div>
        </div>
      )}
    </>
  );
}

export default Product;
