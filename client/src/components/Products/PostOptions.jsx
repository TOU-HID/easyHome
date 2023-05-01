import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import moment from "moment";
import { addHouse } from "../../features/houses/houseSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavigationBar from "../Navigation/NavigationBar";
import Leftsidebar from "../Admin/Leftsidebar";

function PostOptions() {
  const [loading, setLoading] = useState(false);

  const nevigate = useNavigate();

  const handleDailyClick = () => {
    nevigate("/postDaily");
  };
  const handleMonthlyClick = () => {
    nevigate("/post");
  };

  return (
    <div>
      <NavigationBar />
      <div className="flex gap-10 ml-0 mt-0">
        {/* Left Sidebar */}
        <div className="flex gap-10 ml-0 mt-0">
          <Leftsidebar />
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
                  className="btn btn-ghost btn-sm  text-black mt-4 hover:bg-rose-600"
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
                  className="btn btn-ghost btn-sm  text-black mt-3 hover:bg-rose-600"
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
