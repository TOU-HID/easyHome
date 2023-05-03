import React from "react";
import Swal from "sweetalert2";
import {
  setIsAuthenticated,
  setLoggedInUsers,
} from "../../features/users/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { persistor } from "../../app/store";
function LogoutDropdown() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleProfileNavigation = () => {
    navigate("/profile");
  };
  function handleLogout() {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Logout",
    }).then((result) => {
      if (result.isConfirmed) {
        // Handle logout options
        removeToken();
        handleAuth();
        navigate("/");

        Swal.fire({
          position: "center",
          icon: "success",
          title: "Logout Successful",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  }
  function removeToken() {
    localStorage.removeItem("accessToken");
    // localStorage.removeItem('persist:root');
    persistor.pause();
    persistor.flush().then(() => {
      return persistor.purge();
    });
  }
  function handleAuth() {
    dispatch(setIsAuthenticated(false));
    dispatch(setLoggedInUsers([]));
  }
  return (
    <div className="">
      {/* <div className="dropdown dropdown-end"> */}
      <div className="flex gap-6">
        <i
          onClick={handleProfileNavigation}
          className="fa-solid fa-circle-user fa-2xl text-4xl text-rose-500 cursor-pointer"
        ></i>

        <i
          onClick={handleLogout}
          className="fa-solid fa-arrow-right-from-bracket fa-2xl text-4xl text-rose-500 cursor-pointer"
        ></i>
      </div>
    </div>
  );
}

export default LogoutDropdown;
