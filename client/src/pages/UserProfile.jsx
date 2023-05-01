import React, { useEffect } from 'react';
import Product from '../components/Products/Product';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../features/users/userSlice';
import PostAlert from '../components/PostAlert';
import ProfileOptions from '../components/ProfileOptions';
import Error from './Error';
import NavigationBar from '../components/Navigation/NavigationBar';
import LandlordDashboard from './LandlordDashboard';

function UserProfile() {
  const dispatch = useDispatch();
  const { loggedInUsers } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  return (
    <>
      <NavigationBar />

      {loggedInUsers.length > 0 ? (
        <>
          {loggedInUsers[0].role === 'landlord' ? (
            <>
              <LandlordDashboard />
            </>
          ) : (
            <>
              <div className="mb-10">
                <ProfileOptions userName={loggedInUsers[0].userName} />
              </div>
              <Product />
            </>
          )}
        </>
      ) : (
        <Error />
      )}
    </>
  );
}

export default UserProfile;
