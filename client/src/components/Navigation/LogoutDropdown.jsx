import React from 'react';
import Swal from 'sweetalert2';
import {
  setIsAuthenticated,
  setLoggedInUsers,
} from '../../features/users/userSlice';
import { useDispatch } from 'react-redux';
import { Link, Navigate, useNavigate } from 'react-router-dom';

function LogoutDropdown() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleProfileNavigation = () => {
    navigate('/profile');
  };
  function handleLogout() {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Logout',
    }).then((result) => {
      if (result.isConfirmed) {
        // Handle logout options
        removeToken();
        handleAuth();
        navigate('/');

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Logout Successful',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  }
  function removeToken() {
    localStorage.removeItem('accessToken');
  }
  function handleAuth() {
    dispatch(setIsAuthenticated(false));
    dispatch(setLoggedInUsers([]));
  }
  return (
    <div>
      <div className="dropdown dropdown-end">
        <button className=" flex gap-3 justify-center align-middle">
          <i
            className="fa-solid fa-bars fa-lg"
            style={{ color: '#161717' }}
          ></i>

          <i
            className="fa-solid fa-circle-user fa-2xl"
            style={{ color: '#161717' }}
          ></i>
        </button>

        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 mb-2"
        >
          <li>
            <button
              className="active:scale-y-90 transition-transform flex hover:bg-zinc-200"
              onClick={handleProfileNavigation}
            >
              Profile
            </button>
          </li>
          <li>
            <button
              className="  active:scale-y-90 transition-transform flex hover:bg-zinc-200"
              onClick={handleLogout}
            >
              Log Out
            </button>
          </li>
        </ul>
      </div>

      {/* MODAL */}
      {/* <div>
        <Login />
      </div>
      <div>
        <Signup />
      </div> */}
    </div>
  );
}

export default LogoutDropdown;
