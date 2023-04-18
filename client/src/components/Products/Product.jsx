import React, { useEffect } from 'react';
import ProductCard from './ProductCard';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { retriveAllHouses } from '../../features/houses/houseSlice';

function Product({ showAll }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { houseList } = useSelector((state) => state.house);
  useEffect(() => {
    dispatch(retriveAllHouses());
  }, []);

  // console.log(houseList);

  return (
    <>
      {!showAll ? (
        <>
          <div className="flex gap-10 flex-wrap justify-start mt-[3vh]  mb-[5vh] ml-[5vw] ">
            {houseList
              .filter((house) => house.isavailable === true)
              .slice(0, 3)
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
    </>
  );
}

export default Product;
