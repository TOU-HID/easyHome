import React from 'react';
import moment from 'moment';
function RentedPropertyDaily({ house }) {
  //   console.log(house.bookings[0].bookingForm);
  //   console.log(house.bookings[0].bookingTo);
  //   console.log(house.bookings[0].bookingForm.slice(0, 4));
  //   console.log(house.bookings[0].bookingForm.slice(5, 7));
  //   console.log(house.bookings[0].bookingForm.slice(8, 10));
  let from = moment([
    Number(house.bookings[0].bookingForm.slice(0, 4)),
    Number(house.bookings[0].bookingForm.slice(5, 7)),
    Number(house.bookings[0].bookingForm.slice(8, 10)),
  ]);
  let to = moment([
    Number(house.bookings[0].bookingTo.slice(0, 4)),
    Number(house.bookings[0].bookingTo.slice(5, 7)),
    Number(house.bookings[0].bookingTo.slice(8, 10)),
  ]);
  //   console.log(to.diff(from, 'days'));
  return (
    <div>
      <div className="card bg-base-100 shadow-lg w-[66vw] bg-[#2d3ac52b]">
        <div className="flex justify-between p-6 items-center">
          <div className="flex gap-6">
            <div className="avatar">
              <div className="w-16 rounded">
                <img src={house.image[0].url} />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-bold text-xl">{house.housename}</span>
              <span className="text-sm">{house.area + ', ' + house.city}</span>
            </div>
          </div>

          <div>
            <div className="form-control">
              <label className="label cursor-pointer">
                {/* <input
                  type="radio"
                  name="radio-10"
                  className="radio checked:bg-green-500"
                /> */}

                <i className="fa-solid fa-circle fa-sm text-[#605aff]"></i>

                <span className="label-text ml-2 text-lg">
                  Rented on Daily Basis
                </span>
              </label>
            </div>
          </div>

          <div className="flex gap-3 text-lg ">
            <span className="underline text-green-900 font-bold">
              {moment(house.bookings[0].bookingForm).format('MMMM Do YYYY')}
            </span>
            <span className="font-bold"> ▶ </span>
            <span className="underline text-red-900 font-bold">
              {moment(house.bookings[0].bookingTo).format('MMMM Do YYYY')}
            </span>
          </div>

          <div className="flex gap-2">
            <span className="font-bold text-lg ">
              <i className="fa-solid fa-bangladeshi-taka-sign"></i>
              {house.bookings[0].totalCost}
            </span>
            <div className="flex gap-1 font-bold text-xl text-green-900">
              <span className="text-md "> {to.diff(from, 'days')}</span>
              <span className="text-md ">days</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RentedPropertyDaily;
