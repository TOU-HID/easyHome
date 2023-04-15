import React from 'react';
import ProductRating from './ProductRating';
function RatingModla() {
  return (
    <div>
      <input type="checkbox" id="rating-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative h-[70vh] w-[60vh]">
          <div>
            {/* <label
              htmlFor="rating-modal"
              className="btn btn-sm btn-ghost absolute left-[10vw] top-[55vh]"
            >
              Maybe Later
            </label> */}
            <label
              htmlFor="rating-modal"
              className="btn btn-sm btn-circle absolute right-2 top-2  bg-white text-gray-600 border-none hover:bg-rose-300"
            >
              ✕
            </label>
          </div>

          <div>
            <div className="flex justify-center">
              <h3 className="text-2xl font-bold mt-8">
                Your opinion matters to us!
              </h3>
            </div>

            <div className="flex flex-col justify-center align-middle mt-[8vh] gap-5">
              <div className="flex justify-center text-xl font-semibold text-gray-600">
                What is your rating ?
              </div>
              <div className="flex justify-center">
                <ProductRating />
              </div>
              <div className="flex justify-center ">
                <input
                  type="text"
                  className="border-2 border-gray-300 h-[10vh] w-[18vw] rounded-lg placeholder:text-gray-500 pl-[14px] pb-6"
                  placeholder="Leave a message, if you want"
                ></input>
              </div>
              <div className="flex  justify-center">
                <button className="btn rounded-md bg-rose-500 text-white border-none hover:bg-rose-600 w-[18vw]">
                  Rate Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RatingModla;
