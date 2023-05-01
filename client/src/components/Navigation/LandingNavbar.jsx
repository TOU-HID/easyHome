import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

// components
import Search from "./Search";
import Dropdown from "./Dropdown";
import LogoutDropdown from "./LogoutDropdown";

function LandingNavbar() {
  const { loggedInUsers, isAuthenticated } = useSelector((state) => state.user);
  return (
    <div className="flex justify-between px-[6vw] pt-5 pb-5 bg-[#F4F1EA]">
      <div className="logo">
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dru7kzv3i/image/upload/v1682916521/esyhome-removebg-preview_xbi7k2.jpg"
            className="w-20 h-18 mt-2 ml-4 rounded-full scale-150"
          ></img>
        </Link>
      </div>
      {/* {isProductDetailsPage ? (
        <></>
      ) : (
        <>
          <div className="search">
            <Search />
          </div>
        </>
      )} */}

      <div className="Login border-2 pt-2 pr-1 h-10 pl-4 rounded-full mt-2 shadow-lg  mr-3">
        {isAuthenticated ? <LogoutDropdown /> : <Dropdown />}
      </div>
    </div>
  );
}

export default LandingNavbar;
