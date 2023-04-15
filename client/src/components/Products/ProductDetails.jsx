import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { fetchUserByid } from '../../features/users/userSlice';
function ProductDetails() {
  const dispatch = useDispatch();
  const { selectedHouse } = useSelector((state) => state.house);
  useEffect(() => {
    dispatch(fetchUserByid(selectedHouse[0].postby));
  }, []);

  const { currentProductLandlord } = useSelector((state) => state.user);

  return (
    <div>
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
                  <p> {selectedHouse[0].bedroom} Bedroom </p>
                  <p> {selectedHouse[0].bathroom} Bathroom </p>

                  <p> {selectedHouse[0].sqft} Sqft </p>
                </div>
              </div>
              <div className=" text-2xl font-bold">
                Available from{' '}
                <span>
                  {moment(selectedHouse[0].availableform).format('Do')}
                </span>{' '}
                of{' '}
                <span>
                  {moment(selectedHouse[0].availableform).format('MMMM')}
                </span>
              </div>
              <div className=" text-2xl">
                <span className="font-bold">Rent</span> {selectedHouse[0].rent}{' '}
                BDT/Month
              </div>
            </div>
          </div>
        </div>
        <div className="card w-[25vw]  bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="card-title text-2xl">
              {' '}
              {selectedHouse[0].housename}
            </div>
            <div className="flex flex-col gap-2 text-lg mt-5 mb-5">
              <p>Type: {selectedHouse[0].type}</p>
              <p>
                Location: {selectedHouse[0].area}, {selectedHouse[0].city}
              </p>
              <p>Rent: {selectedHouse[0].rent} BD/Month</p>
            </div>
            <div className="card-actions justify-center mt-3">
              <button className="btn rounded-md bg-rose-500 text-white border-none hover:bg-rose-600 w-[15rem]">
                Reserve
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
