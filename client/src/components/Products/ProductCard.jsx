import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addRemoveWishListAdded } from '../../features/users/userSlice';

function ProductCard({ house }) {
  const dispatch = useDispatch();
  const { loggedInUsers, wishlist } = useSelector((state) => state.user);
  // console.log(wishlist);
  // Rating related logic
  let rating = 0;
  const no_of_rating = house.rating.length;
  // console.log(house.rating);
  house.rating.map((elem) =>
    rating += elem.rate
  );

  const wishListHandeler = () => {
    const data = { houseId: house._id, userId: loggedInUsers[0]?._id }
    // console.log(house._id);
    dispatch(addRemoveWishListAdded(data))
  }

  return (
    <div className="relative card w-[20vw]  bg-base-100 shadow-md">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} className={`absolute -top-1 right-1 w-6 h-6 cursor-pointer ${wishlist?.wishlist?.includes(house._id.toString()) ? 'fill-rose-400' : 'fill-none'} stroke-red-400 z-50`} onClick={wishListHandeler}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
      <figure className="h-[20vh] rounded-lg">
        <img
          src={house.image[0].url}
          alt="Shoes"
          className="rounded-md shadow-sm mt-4  w-72 h-44"
        />
      </figure>
      <div className="card-body mt-2">
        <Link to={`/productDetails/${house._id}`}>
          <div className="flex justify-between">
            <div className="flex flex-col justify-start">
              <div className="card-title text-xl ">
                {house.area.charAt(0).toUpperCase() + house.area.slice(1)}
              </div>

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
                <div>{no_of_rating > 0 ? Math.ceil(rating / no_of_rating) : 'No review'}</div>
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
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
