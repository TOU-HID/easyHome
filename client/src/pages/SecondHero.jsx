import React, { useState } from 'react';

function SecondHero({ Product }) {
  const [showAll, setShowAll] = useState(false);
  const [buttonName, setButtonName] = useState('SHOW All');

  const handleShowAll = () => {
    if (showAll) {
      setButtonName('SHOW All');
    } else {
      setButtonName('SHOW LESS');
    }
    setShowAll(!showAll);
  };

  return (
    <div>
      <div className=" bg-base-200 min-h-[95vh] min-w-screen mt-14 mt- ">
        <div className="card card-side bg-base-100 shadow-xl w-[87vw] ml-[5vw] ">
          <figure className="w-[30vw] h-[45vh]">
            <img
              src="https://www.outdoorsy.com/_next/image?url=%2F_next%2Fstatic%2FIG-Feed-Image-4%402x.e3038394fe7e1ae884d3b49a029def74.jpg&w=1920&q=75"
              alt="Movie"
            />
          </figure>
          <div className="card-body ">
            <div className=" text-3xl font-semibold text-[#181828] flex flex-col gap-3">
              {' '}
              <span className="text-4xl">Are you a bachelor ?</span>
              <div className="flex flex-col">
                <span className="text-3xl"> No vacancies,</span>
                <span className="text-3xl">less peace of mind.</span>
              </div>
            </div>
            <div className="text-2xl text-gray-600 font-semibold mt-3 ">
              Here bachelor and bachelorette can find their home just in a click
              !
            </div>
          </div>
        </div>
        <div className="mt-14">
          <div className="flex justify-center text-3xl font-semibold mb-11">
            {' '}
            Discover the best of what’s around{' '}
          </div>
          <Product showAll={showAll} />
          <div className="flex  justify-center mb-5">
            <button className=" w-[65vw] " onClick={handleShowAll}>
              {buttonName === 'SHOW All' ? (
                <i className="fa-solid fa-chevron-down fa-3x"></i>
              ) : (
                <i className="fa-solid fa-chevron-up fa-3x"></i>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondHero;
