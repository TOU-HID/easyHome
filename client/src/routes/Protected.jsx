import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function Protected({ children }) {
  const { isAuthenticated } = useSelector((state) => state.user);
  // check local storage e accessToken ase kina
  // const accessToken = localStorage.getItem('accessToken');
  if (!isAuthenticated) {
    {
      Swal.fire({
        position: 'center',
        icon: 'info',
        text: 'Please login to explore more...',

        showConfirmButton: false,
        timer: 2000,
      });
    }
    return (
      <>
        <Navigate to="/" replace />;
      </>
    );
  } else {
    return children;
  }
}

export default Protected;
