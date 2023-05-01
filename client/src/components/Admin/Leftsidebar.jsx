import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function Leftsidebar() {
  const nevigate = useNavigate();
  const { loggedInUsers } = useSelector((state) => state.user);
  const handleDashboardClick = () => {
    nevigate("/profile");
  };
  const handleMonthlyPropertyClick = () => {
    nevigate("/profile/ownerPropertiesMonthly");
  };
  const handleDailyPropertyClick = () => {
    nevigate("/profile/ownerPropertiesDaily");
  };
  const handlePostClick = () => {
    nevigate("/selectpost");
  };
  return (
    <div className="w-70 min-h-[83vh] bg-[#FCF5F5] shadow-lg ">
      {/* <div className="text-xl font-semibold justify-center flex mr-7 mt-8">
        EASY HOME
      </div> */}
      <div className="mt-10">
        <div className="flex flex-col justify-center items-center mb-2">
          <div className="avatar mb-3">
            <div className="w-24 rounded-full borde-8  border-white">
              <img src="https://res.cloudinary.com/dru7kzv3i/image/upload/v1682870115/ogldsfd3hnazfmj2ejs3.png" />
            </div>
          </div>
          <div className="text-lg"> welcome</div>
          <div className="text-lg font-semibold">
            {loggedInUsers[0].userName}
          </div>
        </div>
        <div className="mt-10 ml-6 mr-6 flex flex-col gap-8 text-[#0500c] items-center">
          <div className="flex justify-center">
            <button
              className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:bg-rose-300 rounded-lg text-xl font-semibold w-60 hover:text-white items-center justify-start p-1"
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
              className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:bg-rose-300 rounded-lg text-xl font-semibold w-60 hover:text-white items-center justify-start p-1"
              onClick={handleDailyPropertyClick}
            >
              <div className="flex gap-2 items-center">
                <i className="fa-solid fa-house"></i>
                <span>Daily</span>
              </div>
            </button>
          </div>

          {/* Monthly Properies */}
          <div>
            <button
              className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:bg-rose-300 rounded-lg text-xl font-semibold w-60 hover:text-white items-center justify-start p-1"
              onClick={handleMonthlyPropertyClick}
            >
              <div className="flex gap-2 items-center">
                <i className="fa-solid fa-house"></i>
                <span>Monthly</span>
              </div>
            </button>
          </div>

          <div>
            <button
              className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:bg-rose-300 rounded-lg text-xl font-semibold w-60 hover:text-white items-center justify-start p-1"
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
    </div>
  );
}

export default Leftsidebar;
