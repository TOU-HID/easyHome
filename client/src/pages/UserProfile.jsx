import React, { useEffect } from 'react';
import Product from '../components/Products/Product';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../features/users/userSlice';
import PostAlert from '../components/PostAlert';
import Error from './Error';
import NavigationBar from '../components/Navigation/NavigationBar';

function UserProfile() {
  const { loggedInUsers } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  // dispatch(fetchUser());

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  return (
    <>
      <NavigationBar />
      {loggedInUsers.length > 0 ? (
        <>
          {loggedInUsers[0].role === 'landlord' ? <PostAlert /> : <PostAlert />}
          <Product />
        </>
      ) : (
        <Error />
      )}
    </>
  );
}

export default UserProfile;
