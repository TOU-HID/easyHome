import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

// components
import Search from './Search';
import Dropdown from './Dropdown';
import LogoutDropdown from './LogoutDropdown';

function NavigationBar() {
  const { loggedInUsers, isAuthenticated } = useSelector((state) => state.user);
  return (
    <div className="flex justify-between px-[6vw] pt-5 pb-5 border-b-2">
      <div className="logo">
        <Link to="/">
          <img
            src="assets/icons/eh.png"
            className="w-36 h-11 mt-2 ml-4 scale-150"
          ></img>
        </Link>
      </div>
      <div className="search">
        <Search />
      </div>
      <div className="Login border-2 py-2 px-3 h-10 rounded-full mt-2 shadow-lg">
        {isAuthenticated ? <LogoutDropdown /> : <Dropdown />}
      </div>
    </div>
  );
}

export default NavigationBar;
