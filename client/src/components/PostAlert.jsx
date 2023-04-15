import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function PostAlert() {
  const { loggedInUsers } = useSelector((state) => state.user);
  // console.log(loggedInUsers);

  return (
    <div className="alert shadow-lg w-[89vw] ml-[5vw] mt-[5vh]">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="stroke-info flex-shrink-0 w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <div className=" text-gray-600">
          <h3 className="text-md">
            hey,{' '}
            <span className="text-lg font-medium">
              {loggedInUsers[0].userName.toUpperCase()}
            </span>
          </h3>
          <div className="text-md">
            You have logged in as a{' '}
            <span className="text-lg font-medium">
              {loggedInUsers[0].role.toUpperCase()}
            </span>
          </div>
        </div>
      </div>
      {loggedInUsers[0].role === 'landlord' ? (
        <div className="flex-none  text-gray-600">
          <div className="text-md mr-[1vw]">Want to post?</div>
          <Link to={'/post'}>
            <button className="btn btn-sm rounded-lg bg-rose-500 text-white border-none hover:bg-rose-600">
              press here
            </button>
          </Link>
        </div>
      ) : null}
    </div>
  );
}

export default PostAlert;
