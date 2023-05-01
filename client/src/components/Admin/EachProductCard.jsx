import moment from 'moment';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BookingRequest from './BookingRequest';
import { updatePosts } from '../../features/houses/houseAPI';
import { deletedHouse } from '../../features/houses/houseSlice';
import Swal from 'sweetalert2';

function EachProductCard({ house, availablity, socket, newHouseListHandeler }) {
  const dispatch = useDispatch();
  const bookingList = house.bookings;
  const [isAvailable, setIsAvailable] = useState(availablity);
  // const { houseList } = useSelector(state => state.house)
  // console.log(houseList);
  const handleAvailablityToggle = () => {
    alert('Are you sure to make this available ?');
    // console.log(house._id);
    let toggledValue = !isAvailable;
    let data = {
      isavailable: toggledValue,
    };
    updatePosts(house._id, data);
    setIsAvailable(toggledValue);
  };

  const handleDeleteHouse = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deletedHouse(house._id))
        newHouseListHandeler(house._id)
      }
    });
  }

  return (
    <div>
      <div className="card  bg-base-100 shadow-xl">
        <div className="card-body bg-[#dfdfe142] rounded-2xl w-[60vw]">
          <div className="flex justify-between">
            <div>
              <div className="font-semibold text-2xl">{house.housename}</div>
              <span>{house.area + ', ' + house.city}</span>
            </div>
            <div className="flex flex-col gap-3">
              <div className='flex flex-row gap-8'>
                <div className="text-xl">
                  Available from{' '}
                  {moment(house.availableform).format('Do') +
                    ' ' +
                    moment(house.availableform).format('MMMM') +
                    ' , ' +
                    moment(house.availableform).format('YYYY')}
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className="w-6 h-6 stroke-black cursor-pointer" onClick={handleDeleteHouse}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>
              </div>
              <div className="flex gap-3 text-md justify-end">
                <span>Choose availablity :</span>
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    className="toggle toggle-success"
                    checked={isAvailable}
                    onClick={handleAvailablityToggle}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Each property Renter Details */}

          {bookingList.length > 0 ? (
            <>
              {bookingList
                .filter((booking) => {
                  return booking.bookingstatus === 'pending';
                })
                .map((booking, i) => {
                  return (
                    <div>
                      <BookingRequest
                        house={house}
                        bookerid={booking.bookerid}
                        socket={socket}
                      />
                    </div>
                  );
                })}
            </>
          ) : (
            <>No requests yet</>
          )}
        </div>
      </div>
    </div>
  );
}

export default EachProductCard;
