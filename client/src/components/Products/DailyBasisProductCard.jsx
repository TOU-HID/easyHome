import React from 'react';
import { Link } from 'react-router-dom';
function DailyBasisProductCard({ house }) {
  // Rating related logic
  let rating = 0;
  const no_of_rating = house.rating.length;
  // console.log(house.rating);
  house.rating.map((elem) => {
    rating += elem.rate;
  });

  return (
    <div className="card w-[20vw]  bg-base-100 shadow-md ">
      <figure className="h-[20vh] rounded-lg">
        <Link to={`/dailyBasisHomesDetails/${house._id}`}>
          <img
            src={house.image[0].url}
            alt="Shoes"
            className="rounded-md shadow-sm mt-4"
          />
        </Link>
      </figure>
      <div className="card-body ">
        <div className="flex justify-between">
          <div className="flex flex-col justify-start">
            <Link to={`/dailyBasisHomesDetails/${house._id}`}>
              <div className="card-title text-xl ">
                {house.area.charAt(0).toUpperCase() + house.area.slice(1)}
              </div>
            </Link>

            <div className="text-lg text-gray-500  font-thin">{house.city}</div>
            <div className=" text-lg text-gray-600 ">
              {house.rentperday + ' '}
              <i className="fa-solid fa-bangladeshi-taka-sign fa-sm mt-4"> </i>
            </div>
          </div>
          <div className="float-right">
            <div className="flex justify-end align-middle mt-1 ml-2 gap-1">
              <div>
                <i className="fa-solid fa-star fa-sm"></i>
              </div>
              <div>{Math.ceil(rating / no_of_rating)}</div>
            </div>
            <div className="mt-1 text-md text-gray-500  font-light flex justify-end">
              {house.type.charAt(0).toUpperCase() + house.type.slice(1)}
            </div>
            <div className="flex gap-3 float-right mt-1  text-md text-gray-600">
              <i className="fa-solid fa-bed text-sm">
                {' '}
                {'  ' + house.bedroom}{' '}
              </i>
              <i className="fa-solid fa-bath text-sm">
                {' '}
                {' ' + house.bathroom}{' '}
              </i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DailyBasisProductCard;
