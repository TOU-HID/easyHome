import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

// components
import Search from "./Search";
import Dropdown from "./Dropdown";
import LogoutDropdown from "./LogoutDropdown";

function NavigationBar({ isProductDetailsPage }) {
  const [seen, setSeen] = useState(false);
  const { loggedInUsers, isAuthenticated, allNotifications } = useSelector(
    (state) => state.user
  );
  return (
    <div className="flex justify-between px-[6vw] pt-5 pb-5 border-b-2">
      <div className="logo">
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dru7kzv3i/image/upload/v1682933127/esyhome-removebg-nav_tgbq6m.jpg"
            className="w-20 h-18 mt-2 ml-4 scale-150"
            alt="alt"
          ></img>
        </Link>
      </div>
      {isProductDetailsPage ? (
        <></>
      ) : (
        <>
          <div className="search mt-1">
            <Search />
          </div>
        </>
      )}
      <div className="flex flex-row items-center gap-7">
        {loggedInUsers[0]?.role === "renter" ? (
          <div className="tabs">
            <div className="dropdown dropdown-bottom">
              <div className="shadow-lg rounded-full bg-rose-500">
                <div tabIndex={0} className="indicator tab tab-active text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-7 h-7 mt-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                    />
                  </svg>

                  <span className="indicator-item badge mt-2 mr-1">
                    {allNotifications.length}
                  </span>
                </div>
              </div>
              {allNotifications.length > 0 ? (
                <ul
                  tabIndex={0}
                  className="flex flex-col dropdown-content menu p-2 shadow bg-base-100 rounded-lg mt-3 w-60"
                >
                  {allNotifications.map((item) => (
                    <div className="flex flex-col p-1 mb-1 rounded-lg">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-1">
                          <div className="avatar">
                            <div className="w-8 rounded-full">
                              <img src="https://res.cloudinary.com/dqgdpbbtv/image/upload/v1681893166/houses/xpeg01gu067vzgtkyvzm.png" alt="img" />
                            </div>
                          </div>
                          <span className="text-rose-700 text-lg font-bold">
                            {item.sender.userName}
                          </span>
                        </div>
                        <div>
                          {item.message === "Your booking is accepted" ? (
                            <>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 text-green-600"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>{" "}
                            </>
                          ) : (
                            <>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 text-red-600"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                            </>
                          )}
                        </div>
                      </div>
                      <span className="ml-8">{item.message}</span>
                    </div>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>
        ) : null}
        <div className="Login">
          {isAuthenticated ? <LogoutDropdown /> : <Dropdown />}
        </div>
      </div>
    </div>
  );
}

export default NavigationBar;
