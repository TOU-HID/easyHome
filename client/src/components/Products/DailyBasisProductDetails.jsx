import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { fetchUserByid } from '../../features/users/userSlice';
import ProductRating from './ProductRating';
import RatingModla from './RatingModla';
import { makeBooking } from '../../features/dailyHouse/dailyHouseAPI';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { retriveAllDailyHouses } from '../../features/dailyHouse/dailyHouseSlice';

import $ from 'jquery';

function DailyBasisProductDetails() {
  const { id } = useParams();

  const dispatch = useDispatch();
  // const { dailySelectedHouse } = useSelector((state) => state.house);
  const { dailySelectedHouse } = useSelector((state) => state.dailyHouse);
  useEffect(() => {
    dispatch(fetchUserByid(dailySelectedHouse[0].postby));
  }, []);

  const { currentProductLandlord } = useSelector((state) => state.user);
  const { loggedInUsers } = useSelector((state) => state.user);

  const [rentFrom, setRentFrom] = useState('');
  const [rentTo, setRentTo] = useState('');

  let from = moment([
    Number(rentFrom.slice(0, 3)),
    Number(rentFrom.slice(5, 7)),
    Number(rentFrom.slice(8, 10)),
  ]);
  let to = moment([
    Number(rentTo.slice(0, 3)),
    Number(rentTo.slice(5, 7)),
    Number(rentTo.slice(8, 10)),
  ]);

  const difference = to.diff(from, 'days');

  const rateperday = dailySelectedHouse[0].rentperday;

  const totalFee = difference * rateperday;

  const handlePayment = () => {
    // alert('Your reservation is confirmed. Thank you');
    // let chk = '2023 - 04 - 28';

    const productId = id;

    const bookingData = {
      bookerid: loggedInUsers[0]._id,
      bookingstatus: 'pending',
      bookingForm: rentFrom,
      bookingTo: rentTo,
      totalCost: totalFee,
    };
    if (rentFrom === '' || rentTo === '') {
      alert('Please input date');
    } else {
      // console.log(bookingData);
      alert('You need to make payment for that reservation');
      makeBooking(productId, bookingData).then((res) => {
        if (res.status === '200') {
          toast.success('Successfullt Reserved');
        } else if (res.status === undefined) {
          toast.error('You have already reserved once');
        }
      });
      dispatch(retriveAllDailyHouses());
    }
  };

  return (
    <div>
      {/* {console.log(dailySelectedHouse)} */}

      <div className="flex px-[6vw] mt-10 gap-20 ">
        <div className="card w-[60vw]  bg-base-100 shadow-md">
          <div className="card-body">
            <div className="flex justify-between">
              {currentProductLandlord.length > 0 ? (
                <>
                  <h2 className="card-title text-2xl">
                    This apartment hosted by{' '}
                    <span className="text-3xl font-semibold">
                      {' '}
                      {currentProductLandlord[0].userName.toUpperCase()}
                    </span>{' '}
                  </h2>
                </>
              ) : (
                <></>
              )}

              <div className="avatar">
                <div className="w-16 rounded-full">
                  <img src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=626&ext=jpg&ga=GA1.2.1839158634.1678796511&semt=sph" />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <div className="flex gap-4 align-middle ">
                <div className=" text-xl font-bold">Details :</div>
                <div className=" text-xl flex flex-row gap-5">
                  <p> {dailySelectedHouse[0].bedroom} Bedroom </p>
                  <p> {dailySelectedHouse[0].bathroom} Bathroom </p>

                  <p> {dailySelectedHouse[0].sqft} Sqft </p>
                </div>
              </div>
              <div className=" text-2xl font-bold">
                Available from{' '}
                <span>
                  {moment(dailySelectedHouse[0].availableform).format('Do')}
                </span>{' '}
                of{' '}
                <span>
                  {moment(dailySelectedHouse[0].availableform).format('MMMM')}
                </span>
              </div>
              <div className=" text-2xl">
                <div>
                  <span className="font-bold">Rent</span>{' '}
                  {dailySelectedHouse[0].rentperday} BDT/Day
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card w-[28vw]  bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="card-title text-2xl">
              {' '}
              {dailySelectedHouse[0].housename}
            </div>
            <div className="flex flex-col gap-2 text-lg mt-5 mb-5">
              <p>Type: {dailySelectedHouse[0].type}</p>
              <p>
                Location: {dailySelectedHouse[0].area},{' '}
                {dailySelectedHouse[0].city}
              </p>
              <p>Rent: {dailySelectedHouse[0].rentperday} BDT/Day</p>
            </div>
            {/* Date handeling */}
            <div className="flex gap-5  items-center">
              <input
                type="date"
                className="h-10 w-44 border-2 border-gray-200 rounded-xl p-2"
                min={moment(Date.now()).format('YYYY-MM-DD')}
                onChange={(e) => setRentFrom(e.target.value)}
                value={rentFrom}
              />
              <span className="font-bold">TO</span>
              <input
                type="date"
                className="h-10 w-44 border-2 border-gray-200 rounded-xl p-2"
                min={rentFrom}
                onChange={(e) => setRentTo(e.target.value)}
                value={rentTo}
              />
            </div>

            {totalFee ? (
              <>
                {/* Payment recept */}
                <div className="text-lg mt-3">
                  {/* payment */}
                  <div className="flex justify-between ">
                    <div className="flex gap-2 underline">
                      <span>
                        <i className="fa-solid fa-bangladeshi-taka-sign fa-md"></i>
                        {rateperday}
                      </span>
                      <span>{'X'}</span>
                      <span>{difference.toString() + ' days'}</span>
                    </div>
                    <div>
                      {' '}
                      <i className="fa-solid fa-bangladeshi-taka-sign fa-sm">
                        {' '}
                      </i>
                      {totalFee}
                    </div>
                  </div>
                  {/* utility */}
                  <div className="flex justify-between">
                    <span className="underline">Ulility Fee</span>
                    <span className="">
                      <i className="fa-solid fa-bangladeshi-taka-sign fa-sm">
                        {' '}
                      </i>
                      {Math.floor(
                        dailySelectedHouse[0].monthlyMaintenanceCost / 30
                      ) * difference}
                    </span>
                  </div>
                  {/* PlatformFee */}
                  <div className="flex justify-between">
                    <span className="underline">Platform Fee</span>
                    <span>
                      <i className="fa-solid fa-bangladeshi-taka-sign fa-sm">
                        {' '}
                      </i>
                      {299}
                    </span>
                  </div>
                </div>

                {/* Sub Total */}

                <div className="border-t-2 mt-2">
                  <div className="flex justify-between font-semibold mt-2 text-lg ">
                    <span>Total before taxes</span>
                    <span>
                      <i className="fa-solid fa-bangladeshi-taka-sign fa-sm">
                        {' '}
                      </i>
                      {totalFee +
                        Math.floor(
                          dailySelectedHouse[0].monthlyMaintenanceCost / 30
                        ) *
                          difference +
                        299}
                    </span>
                  </div>
                </div>
              </>
            ) : (
              <>{null}</>
            )}

            <div className="card-actions justify-center mt-3">
              <label
                className="btn rounded-md bg-rose-500 text-white border-none hover:bg-rose-600 w-[15rem]"
                onClick={handlePayment}
                htmlFor="rating-modal"
              >
                Reserve
              </label>
            </div>
          </div>
        </div>
      </div>
      {/* Modal for rating  */}
      <RatingModla />
    </div>
  );
}

export default DailyBasisProductDetails;
