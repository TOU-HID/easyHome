import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function ProtectedOwneProterties({ children }) {
  const { isAuthenticated, loggedInUsers } = useSelector((state) => state.user);
  //   console.log(isAuthenticated, loggedInUsers[0].role);
  // check local storage e accessToken ase kina
  // const accessToken = localStorage.getItem('accessToken');

  if (!isAuthenticated) {
    Swal.fire({
      position: 'center',
      icon: 'question',
      text: 'You are not authorized',

      showConfirmButton: false,
      timer: 2000,
    });
    return (
      <>
        <Navigate to="/" replace />;
      </>
    );
  } else {
    if (loggedInUsers[0].role === 'landlord') return children;
    else
      return (
        <div className="text-3xl flex justify-center mt-[30vh]">
          You are not allowed here
        </div>
      );
  }
}

export default ProtectedOwneProterties;
