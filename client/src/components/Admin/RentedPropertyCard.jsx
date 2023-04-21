import React from 'react';

function RentedPropertyCard({ house }) {
  return (
    // bg-[#e3dac971]
    <div>
      <div className="card bg-base-100 shadow-lg w-[66vw] bg-[#d6e9ca92]">
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

                <i className="fa-solid fa-circle fa-sm text-green-500"></i>

                <span className="label-text ml-2 text-lg">Rented Monthly</span>
              </label>
            </div>
          </div>

          <div className="flex gap-3 ">
            <span className="flex gap-1 items-center">
              <i className="fa-solid fa-bed"></i>
              <span>{house.bedroom}</span>
            </span>
            <span className="flex gap-1 items-center">
              <i className="fa-solid fa-bath"></i>
              <span>{house.bathroom}</span>
            </span>
            <span> {house.sqft + ' sqft'}</span>
          </div>

          <div>
            <span className="font-bold text-lg">
              <i className="fa-solid fa-bangladeshi-taka-sign"></i>
              {house.rent}
            </span>
            <span className="text-md">/month</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RentedPropertyCard;
