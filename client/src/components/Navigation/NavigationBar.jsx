import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

// components
import Search from './Search';
import Dropdown from './Dropdown';
import LogoutDropdown from './LogoutDropdown';

function NavigationBar({ isProductDetailsPage }) {
  const [seen, setSeen] = useState(false)
  const { loggedInUsers, isAuthenticated, allNotifications } = useSelector((state) => state.user);
  return (
    <div className="flex justify-between px-[6vw] pt-5 pb-5 border-b-2">
      <div className="logo">
        <Link to="/">
          <img
            src="https://drive.google.com/uc?export=view&id=1ORoweE298lbyRjAYvcygsE-0OA4QMwKH"
            className="w-36 h-11 mt-2 ml-4 scale-150"
            alt='alt'
          ></img>
        </Link>
      </div>
      {isProductDetailsPage ? (
        <></>
      ) : (
        <>
          <div className="search">
            <Search />
          </div>
        </>
      )}
      <div className='flex flex-row justify-center items-center gap-8'>
        {loggedInUsers[0]?.role === 'renter' ?
          <div className="tabs">

            <div className="dropdown dropdown-bottom">
              <div tabIndex={0} className="indicator tab tab-lifted tab-active">
                <i class="fa-solid fa-bell"></i>
                <span className="indicator-item badge">{allNotifications.length}</span>
              </div>
              {allNotifications.length > 0 ?
                <ul tabIndex={0} className="flex flex-col dropdown-content menu p-2 shadow bg-base-100 rounded-lg mt-3 w-60">
                  {allNotifications.map(item =>
                    <div className='flex flex-col bg-rose-200 p-1 mb-1 rounded-lg'>
                      <span className='text-rose-700 text-lg font-bold'>{item.sender.userName}</span>
                      <span className=''>{item.message}</span>
                    </div>
                  )}
                </ul>
                :
                null
              }
            </div>
            {/* <div>
              <div className="indicator tab tab-lifted tab-active" onClick={() => setOpenNotificationModal(!openNotificationModal)}>
                <i class="fa-solid fa-bell"></i>
                <span className="indicator-item badge">{allNotifications.length}</span>
              </div>
              <div className={`${openNotificationModal ? null : 'hidden'} relative top-0 right-0 w-60 h-full z-10`}>
                <div className='absolute flex flex-col w-full bg-[#fef2f492] rounded-md border-2'>
                  {allNotifications.map(item =>
                    <div className='flex flex-col p-1 mb-1 border-2 rounded-lg'>
                      <span className='text-lg font-bold'>{item.sender.userName}</span>
                      <span>{item.message}</span>
                    </div>
                  )}
                </div>
              </div>

            </div> */}
          </div>
          :
          null
        }
        <div className="Login border-2 pt-2 pr-1 h-10 pl-4 rounded-full mt-2 shadow-lg  mr-3">
          {isAuthenticated ? <LogoutDropdown /> : <Dropdown />}
        </div>
      </div>
    </div>
  );
}

export default NavigationBar;
