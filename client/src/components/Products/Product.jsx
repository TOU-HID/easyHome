import React, { useEffect } from 'react';
import ProductCard from './ProductCard';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { retriveAllHouses } from '../../features/houses/houseSlice';

function Product() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { houseList } = useSelector((state) => state.house);
  useEffect(() => {
    dispatch(retriveAllHouses());
  }, []);

  // console.log(houseList);

  const productList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <>
      <div className="flex gap-10 flex-wrap justify-start mt-[3vh]  mb-[5vh] ml-[5vw]">
        {houseList.map((house, i) => {
          return <ProductCard key={i} house={house} />;
        })}
      </div>
    </>
  );
}

export default Product;
