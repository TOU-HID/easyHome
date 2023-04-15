import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function ProductCard({ house }) {
  return (
    <div className="card w-[20vw]  bg-base-100 shadow-md ">
      <figure className="pt-2 pl-2 pr-2 h-[20vh]">
        <Link to={`/productDetails/${house._id}`}>
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
            <Link to={`/productDetails/${house._id}`}>
              <div className="card-title text-xl ">
                {house.area.charAt(0).toUpperCase() + house.area.slice(1)}
              </div>
            </Link>

            <div className="text-lg text-gray-500  font-thin">{house.city}</div>
            <div className=" text-lg text-gray-600 ">
              {house.rent + ' '}
              <i className="fa-solid fa-bangladeshi-taka-sign fa-sm mt-4"> </i>
            </div>
          </div>
          <div className="float-right">
            <div className="flex justify-end align-middle mt-1 ml-2 gap-1">
              <div>
                <i className="fa-solid fa-star fa-sm"></i>
              </div>
              <div>{house.rating}</div>
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

export default ProductCard;
