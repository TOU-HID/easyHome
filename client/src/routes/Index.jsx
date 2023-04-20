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
import DateRange from '../components/DateRange';
import OwnProductDetails from '../components/Admin/OwnProductDetails';
import ProtectedOwneProterties from './ProtectedOwneProterties';
import DailyPostForm from '../components/Products/DailyPostForm';
import Footer from './../components/Footer';
import PostOptions from '../components/Products/PostOptions';

import DailyBasisUserProfile from '../pages/DailyBasisUserProfile';
import DailybasisProductDetailsPage from './../pages/DailybasisProductDetailsPage';

function Index() {
  return (
    <BrowserRouter>
      <DateRange />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/profile" element={<UserProfile />} />

        {/* // Need to be prtected */}
        <Route
          path="/dailyBasisHomes"
          element={
            <Protected>
              <DailyBasisUserProfile />
            </Protected>
          }
        />
        <Route
          path="/dailyBasisHomesDetails/:id"
          element={
            <Protected>
              <DailybasisProductDetailsPage />
            </Protected>
          }
        />

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
        <Route
          path="/postDaily"
          element={
            <PortectedPost>
              <DailyPostForm />
            </PortectedPost>
          }
        />
        <Route
          path="/profile/ownerProperties"
          element={
            <ProtectedOwneProterties>
              <OwnProductDetails />
            </ProtectedOwneProterties>
          }
        />

        <Route
          path="/selectPost"
          element={
            <ProtectedOwneProterties>
              <PostOptions />
            </ProtectedOwneProterties>
          }
        />
        <Route path="/*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Index;
