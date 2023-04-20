import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import NavigationBar from '../Navigation/NavigationBar';
import EachProductCard from './EachProductCard';
import { useSelector } from 'react-redux';

function OwnProductDetails({ elem }) {
  const { houseList } = useSelector((state) => state.house);
  const { loggedInUsers } = useSelector((state) => state.user);

  const nevigate = useNavigate();
  const handleDashboardClick = () => {
    nevigate('/profile');
  };
  const handlePropertyClick = () => {
    nevigate('/profile/ownerProperties');
  };
  const handlePostClick = () => {
    nevigate('/selectpost');
  };

  return (
    <div>
      <NavigationBar />
      <div className="flex gap-10 ml-20 mt-5">
        {/* Left Side */}
        <div className=" w-80 min-h-[83vh] rounded-xl bg-[#f4c8c8] pl-5 ">
          <div className="text-2xl font-semibold justify-center flex mr-7 mt-8">
            EASY HOME
          </div>
          <div className="mt-10 flex flex-col gap-5  text-[#0500c] ">
            <div>
              <button
                className="btn btn-ghost text-lg w-60 hover:bg-rose-500 hover:text-white"
                onClick={handleDashboardClick}
              >
                <div className="flex gap-2 items-center">
                  <i className="fa-solid fa-briefcase"></i>
                  <span>Dashboard</span>
                </div>
              </button>
            </div>
            <div>
              <button
                className="btn btn-ghost text-lg w-60 hover:bg-rose-500 hover:text-white"
                onClick={handlePropertyClick}
              >
                <div className="flex gap-2 items-center">
                  <i className="fa-solid fa-house"></i>
                  <span>Properties</span>
                </div>
              </button>
            </div>
            <div>
              <button
                className="btn btn-ghost text-lg w-60 hover:bg-rose-500 hover:text-white"
                onClick={handlePostClick}
              >
                <div className="flex gap-2 items-center">
                  <i className="fa-solid fa-address-card"></i>
                  <span>Add listing</span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* // Right side  top*/}
        <div className="flex flex-col gap-5 mt-3">
          <div className="flex flex-col gap-3 mt-4 mb-4">
            <div className="font-bold text-3xl"> Property Dashboard</div>
            <div className=" text-xl">
              {' '}
              Welcome {loggedInUsers[0].userName.toUpperCase()}
            </div>
          </div>

          {/* Each property cart */}

          {houseList
            .filter((house) => {
              return house.postby === loggedInUsers[0]._id;
            })
            .filter((house) => {
              return house.isbooked === false;
            })

            .map((house, i) => {
              return (
                <>
                  <EachProductCard
                    house={house}
                    availablity={house.isavailable}
                  />
                </>
              );
            })}
          {/* <EachProductCard />
          <EachProductCard /> */}
        </div>
      </div>
    </div>
  );
}

export default OwnProductDetails;
