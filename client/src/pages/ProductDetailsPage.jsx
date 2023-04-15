import React, { useEffect } from 'react';
import ProductDetails from '../components/Products/ProductDetails';
import ProductCarousel from '../components/Products/ProductCarousel';
import Map from '../components/Products/Map';
import { useDispatch, useSelector } from 'react-redux';
import { retriveSelectedHouses } from './../features/houses/houseSlice';
import { fetchUserByid } from '../features/users/userSlice';
import { useParams } from 'react-router-dom';
function ProductDetailsPage() {
  const dispatch = useDispatch();
  const { selectedHouse } = useSelector((state) => state.house);

  const { id } = useParams();

  useEffect(() => {
    dispatch(retriveSelectedHouses(id));
    // console.log(selectedHouse[0].postby);
  }, []);
  return (
    <div>
      {selectedHouse.length > 0 ? (
        <>
          <ProductCarousel />
          <ProductDetails />
          <Map />
        </>
      ) : (
        <></>
      )}
      {/* {console.log(selectedHouse)} */}
      {/* <ProductCarousel selectedHouse={selectedHouse} /> */}
      {/* <ProductDetails /> */}
      {/* <Map /> */}
    </div>
  );
}

export default ProductDetailsPage;
