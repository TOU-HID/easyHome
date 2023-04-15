import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavigationBar from '../components/Navigation/NavigationBar';
import LandingPage from './../pages/LandingPage';
import ProductDetailsPage from '../pages/ProductDetailsPage';
import Error from '../pages/Error';
import UserProfile from '../pages/UserProfile';
import Protected from './Protected';
import CreateProductForm from '../components/Products/CreateProductForm';
import PortectedPost from './PortectedPost';

function Index() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/profile" element={<UserProfile />} />

        <Route
          path="/productDetails/:id"
          element={
            <Protected>
              <ProductDetailsPage />
            </Protected>
          }
        />
        <Route
          path="/post"
          element={
            <PortectedPost>
              <CreateProductForm />
            </PortectedPost>
          }
        />
        <Route path="/*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Index;
