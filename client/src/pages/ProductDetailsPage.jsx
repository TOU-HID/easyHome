import React from 'react';
import ProductDetails from '../components/Products/ProductDetails';
import ProductCarousel from '../components/Products/ProductCarousel';
import Map from '../components/Products/Map';
import { useSelector } from 'react-redux';

function ProductDetailsPage() {
  const { loggedInUsers } = useSelector((state) => state.user);
  return (
    <div>
      <div> hey you are {loggedInUsers[0].userName}</div>
      <ProductCarousel />
      <ProductDetails />
      <Map />

      {/* Comments */}
    </div>
  );
}

export default ProductDetailsPage;
