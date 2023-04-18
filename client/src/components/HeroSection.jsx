import React from 'react';
import Search from './Navigation/Search';

function HeroSection() {
  return (
    <div className=" overflow-hidden ">
      <div
        className="hero min-h-screen min-w-fit scale-125  "
        style={{
          backgroundImage: `url("https://d214hhm15p4t1d.cloudfront.net/nzr/2ac8d556cc7989b6206762db6d93a093f9a1b940/img/homepage-desktop.47011237.svg")`,
        }}
      >
        <div className="hero"></div>
        <div className="hero-content text-center text-[#181828] ">
          <div className="max-w-md mb-[30vh]">
            <h1 className="mb-5 text-5xl font-bold ">
              Find your forever. Or your for now.
            </h1>
            <p className="mb-5 text-xl text-gray-500 ">
              Houses and apartments for rent
              <br /> that fit your timeline.
            </p>
            <div>
              <Search />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
