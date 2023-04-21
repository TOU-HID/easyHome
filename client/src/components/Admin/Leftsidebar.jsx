import React from 'react';
import { useNavigate } from 'react-router-dom';
function Leftsidebar() {
  const nevigate = useNavigate();
  const handleDashboardClick = () => {
    nevigate('/profile');
  };
  const handleMonthlyPropertyClick = () => {
    nevigate('/profile/ownerPropertiesMonthly');
  };
  const handleDailyPropertyClick = () => {
    nevigate('/profile/ownerPropertiesDaily');
  };
  const handlePostClick = () => {
    nevigate('/selectpost');
  };
  return (
    <div className=" w-[22vw] min-h-[83vh] rounded-xl bg-[#f4c8c8] pl-5 ">
      <div className="text-2xl font-semibold justify-center flex mr-7 mt-8">
        EASY HOME
      </div>
      <div className="mt-10 flex flex-col gap-5  text-[#0500c]  ">
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
        {/* Daily Properies */}
        <div>
          <button
            className="btn btn-ghost text-lg w-60 hover:bg-rose-500 hover:text-white ml-5"
            onClick={handleDailyPropertyClick}
          >
            <div className="flex gap-2 items-center">
              <i className="fa-solid fa-house"></i>
              <span>Daily Properties</span>
            </div>
          </button>
        </div>

        {/* Monthly Properies */}
        <div>
          <button
            className="btn btn-ghost text-lg w-72 hover:bg-rose-500 hover:text-white ml-4"
            onClick={handleMonthlyPropertyClick}
          >
            <div className="flex gap-2 items-center">
              <i className="fa-solid fa-house"></i>
              <span>Monthly Properties</span>
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
  );
}

export default Leftsidebar;
