import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Map from '../components/Products/Map';
import ProductDetails from '../components/Products/ProductDetails';
import ProductCarousel from '../components/Products/ProductCarousel';
import { retriveSelectedHouses } from './../features/houses/houseSlice';
import ProductRating from '../components/Products/ProductRating';
function ProductDetailsPage() {
  const dispatch = useDispatch();
  const { selectedHouse } = useSelector((state) => state.house);

  const { id } = useParams();

  useEffect(() => {
    dispatch(retriveSelectedHouses(id));
  }, []);
  return (
    <div>
      {selectedHouse.length > 0 ? (
        <>
          <ProductCarousel />
          <ProductDetails />
          {/* <ProductRating /> */}
          <Map />
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default ProductDetailsPage;
