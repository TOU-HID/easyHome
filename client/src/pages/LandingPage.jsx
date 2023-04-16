import React, { useEffect } from 'react';
import Product from '../components/Products/Product';
import NavigationBar from '../components/Navigation/NavigationBar';

function LandingPage() {
  return (
    <>
      <NavigationBar />
      <Product />
    </>
  );
}

export default LandingPage;
