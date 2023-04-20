import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { UNSAFE_DataRouterStateContext, useNavigate } from 'react-router-dom';
import RentedPropertyCard from './RentedPropertyCard';
import Barchart from '../Figures/Barchart';
import moment from 'moment';
import DoughnutJs from '../Figures/DoughnutJs';
function DashBoard() {
  const { loggedInUsers } = useSelector((state) => state.user);
  const { houseList } = useSelector((state) => state.house);
  const [monthname, setMonthname] = useState('january');
  const nevigate = useNavigate();

  const labels = houseList
    .filter((house) => {
      return house.postby === loggedInUsers[0]._id;
    })
    .filter((house) => {
      return house.isbooked === true;
    })
    .filter(
      (house) =>
        moment(house.availableform).format('MMMM').toLowerCase() ===
        monthname.toLowerCase()
    )
    .map((house) => house.housename);
  const chartData = {
    labels,
    datasets: [
      {
        label: 'Monthly Income',
        data: houseList
          .filter((house) => {
            return house.postby === loggedInUsers[0]._id;
          })
          .filter((house) => {
            return house.isbooked === true;
          })
          .map((house) => house.rent),
        // backgroundColor: 'rgba(255, 99, 132, 0.5)',

        backgroundColor: [
          'rgba(53, 162, 235, 0.8)',
          'rgba(25, 99, 132, 0.5)',

          'rgba(53, 162, 75, 0.5)',
          // '#C1311C',
          // '#B36C00',
          // '#3676D1',
        ],
      },
    ],
  };

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
    <div className="flex gap-10 ml-20 mt-5">
      {/* <div>{monthname}</div> */}
      {/* Left Side */}
      <div className=" w-72 min-h-[83vh] rounded-xl bg-[#f4c8c8] pl-5 ">
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

      {/* // Right side */}
      <div className="flex flex-col gap-5 mt-3">
        <div className="flex flex-col gap-3 mt-4 mb-4">
          <div className="font-bold text-3xl"> Property Dashboard</div>
          <div className=" text-xl">
            {' '}
            Welcome {loggedInUsers[0].userName.toUpperCase() + ' !'}
          </div>
        </div>
        <div className="flex gap-5">
          <div className="card bg-[#dfdfe1] w-[40vw] h-[50vh] bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="relative">
                <div className="mt-5">
                  <Barchart chartData={chartData} />
                </div>
                <div className="absolute ml-[28vw]  bottom-[35vh] ">
                  <select
                    className="select w-[9vw] select-sm select-secondary max-w-xs "
                    onChange={(e) => setMonthname(e.target.value)}
                  >
                    <option disabled selected>
                      Select Month
                    </option>
                    <option>January</option>
                    <option>Februaey</option>
                    <option>March</option>
                    <option>April</option>
                    <option>May</option>
                    <option>June</option>
                    <option>July</option>
                    <option>August</option>
                    <option>September</option>
                    <option>October</option>
                    <option>November</option>
                    <option>December</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="card bg-red-100 w-[25vw] h-[50vh] bg-base-100 shadow-xl">
            <div className="card-body">
              <DoughnutJs />
            </div>
          </div>
        </div>
        {/* For rent For sell  */}
        {houseList
          .filter((house) => {
            return house.postby === loggedInUsers[0]._id;
          })

          .filter((house) => {
            return house.isbooked === true;
          })
          .map((house, i) => {
            return (
              <div key={i}>
                <RentedPropertyCard house={house} />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default DashBoard;
