import React, { useEffect } from 'react';
import Product from '../components/Products/Product';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../features/users/userSlice';

function UserProfile() {
  const { loggedInUsers } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  // dispatch(fetchUser());

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  return (
    <>
      {loggedInUsers.length > 0 ? (
        <div>
          {/* <div className="text-4xl font-bold"> Hello {loggedInUsers[0].email}</div> */}
          <div className="text-4xl font-bold">
            {' '}
            Hello {loggedInUsers[0].email}{' '}
          </div>
          <Product></Product>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}

export default UserProfile;
