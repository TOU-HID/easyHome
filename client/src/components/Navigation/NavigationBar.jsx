import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

// components
import Search from './Search';
import Dropdown from './Dropdown';
import LogoutDropdown from './LogoutDropdown';

function NavigationBar({ isProductDetailsPage }) {
  const { loggedInUsers, isAuthenticated } = useSelector((state) => state.user);
  return (
    <div className="flex justify-between px-[6vw] pt-5 pb-5 border-b-2">
      <div className="logo">
        <Link to="/">
          <img
            src="https://drive.google.com/uc?export=view&id=1ORoweE298lbyRjAYvcygsE-0OA4QMwKH"
            className="w-36 h-11 mt-2 ml-4 scale-150"
          ></img>
        </Link>
      </div>
      {isProductDetailsPage ? (
        <></>
      ) : (
        <>
          <div className="search">
            <Search />
          </div>
        </>
      )}

      <div className="Login border-2 pt-2 pr-1 h-10 pl-4 rounded-full mt-2 shadow-lg  mr-3">
        {isAuthenticated ? <LogoutDropdown /> : <Dropdown />}
      </div>
    </div>
  );
}

export default NavigationBar;
