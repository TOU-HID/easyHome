import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard() {
  return (
    <div className="card w-[20vw] bg-base-100 shadow-md ">
      <figure className="pt-2 pl-2 pr-2">
        <Link to="/productDetails">
          <img
            src="assets/images/product_Images/home1.png"
            alt="Shoes"
            className="rounded-md shadow-sm mt-4"
          />
        </Link>
      </figure>
      <div className="card-body ">
        <div className="flex justify-between">
          <div className="flex flex-col justify-start">
            <Link to="/productDetails">
              <div className="card-title text-xl ">Mohakhali</div>
            </Link>

            <div className="text-lg text-gray-500  font-thin">Dhaka</div>
            <div className=" text-lg text-gray-600 ">
              {15000 + ' '}
              <i className="fa-solid fa-bangladeshi-taka-sign fa-sm mt-4"> </i>
            </div>
          </div>
          <div className="float-right">
            <div className="flex justify-end align-middle mt-1 ml-2 gap-1">
              <div>
                <i className="fa-solid fa-star fa-sm"></i>
              </div>
              <div>4.2</div>
            </div>
            <div className="mt-1 text-md text-gray-500  font-light">
              Apartment
            </div>
            <div className="flex gap-3 float-right mt-1  text-md text-gray-600">
              <i className="fa-solid fa-bed text-sm"> 4 </i>
              <i className="fa-solid fa-bath text-sm"> 4 </i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
