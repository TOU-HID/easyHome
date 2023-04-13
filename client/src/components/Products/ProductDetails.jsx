import React from 'react';

function ProductDetails() {
  return (
    <div>
      <div className="flex px-[6vw] mt-10 gap-20 ">
        <div className="card w-[60vw]  bg-base-100 shadow-md">
          <div className="card-body">
            <div className="flex justify-between">
              <h2 className="card-title text-2xl">
                This apartment hosted by{' '}
                <span className="text-3xl font-semibold"> POLLOCK</span>{' '}
              </h2>
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
                  <p> 4 Bedroom </p>
                  <p> 4 Bathroom </p>
                  <p> 1 Kitchen </p>
                  <p> 1200 Sqft </p>
                </div>
              </div>
              <div className=" text-2xl font-bold">
                Available from 1st of March
              </div>
              <div className=" text-2xl">
                <span className="font-bold">Rent</span> 15000 BDT/Month
              </div>
            </div>
          </div>
        </div>
        <div className="card w-[25vw]  bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="card-title text-2xl">TOMIJ VILLAH</div>
            <div className="flex flex-col gap-2 text-lg mt-5 mb-5">
              <p>Type: Apartment</p>
              <p>Location: Mohakhali, Dhaka</p>
              <p>Rent: 15000 BD/Month</p>
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
