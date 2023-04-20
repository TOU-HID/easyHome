import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import moment from 'moment';
import { addHouse } from '../../features/houses/houseSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavigationBar from '../Navigation/NavigationBar';

function PostOptions() {
  const [loading, setLoading] = useState(false);

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
  const handleDailyClick = () => {
    nevigate('/postDaily');
  };
  const handleMonthlyClick = () => {
    nevigate('/post');
  };

  return (
    <div>
      <NavigationBar />
      <div className="flex mt-5 gap-10 ">
        {/* Left Sidebar */}
        <div className=" ml-16 w-[30vw] min-h-[85vh] rounded-xl bg-[#f4c8c8] pl-4  ">
          <div className="text-2xl font-semibold justify-center flex mr-8 mt-8">
            EASY HOME
          </div>
          <div className="mt-10 flex flex-col gap-5  text-[#0500c]">
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
        {/* Form Container */}
        <div className="container flex gap-16 mt-[10vh] ml-[6vw]">
          {/* daily */}
          <div className="card w-96 h-52 bg-base-100 shadow-xl bg-[#dfdfe1]">
            <div className="card-body flex flex-col gap-2 mt-[3vh] ">
              <div className="card-title flex justify-center text-2xl font-semibold">
                Daily Listing
              </div>

              <div className="card-actions justify-center">
                <button
                  className="btn btn-ghost bg-rose-500 text-white mt-3 hover:bg-rose-600"
                  onClick={handleDailyClick}
                >
                  Press here
                </button>
              </div>
            </div>
          </div>

          {/* monthly */}
          <div className="card w-96 h-52 bg-base-100 shadow-xl  bg-red-100">
            <div className="card-body flex flex-col gap-2 mt-[3vh]">
              <div className="card-title flex justify-center text-2xl font-semibold">
                Monthly Listing
              </div>

              <div className="card-actions justify-center">
                <button
                  className="btn btn-ghost bg-rose-500 text-white mt-3 hover:bg-rose-600"
                  onClick={handleMonthlyClick}
                >
                  Press here
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostOptions;
