import React from 'react';
import { useNavigate } from 'react-router-dom';

function ProfileOptions() {
  const navigate = useNavigate();
  const handleDailyBasis = () => {
    navigate('/dailyBasisHomes');
  };
  const handleMonthlyBasis = () => {
    // alert('Monthly');
    navigate('/profile');
  };
  return (
    <div className="">
      <div className="hero min-h-[50vh] bg-base-200">
        <div className="flex gap-10 mr-80 ">
          <div className="ml-16 ">
            {/* carosoul */}
            <div className="min-w-[28vw] h-[44vh] carousel rounded-box">
              <div className="carousel-item w-full">
                <img
                  src="https://res.cloudinary.com/dqgdpbbtv/image/upload/v1681882749/houses/s410jqw2widki7egw4rr.png"
                  className="w-full"
                  alt="Tailwind CSS Carousel component"
                />
              </div>
              <div className="carousel-item w-full">
                <img
                  src="https://res.cloudinary.com/dqgdpbbtv/image/upload/v1681893166/houses/xpeg01gu067vzgtkyvzm.png"
                  className="w-full"
                  alt="Tailwind CSS Carousel component"
                />
              </div>
              <div className="carousel-item w-full">
                <img
                  src="https://res.cloudinary.com/dqgdpbbtv/image/upload/v1681882716/houses/xfildoq1cj3tya4hnqvo.png"
                  className="w-full"
                  alt="Tailwind CSS Carousel component"
                />
              </div>
            </div>
          </div>

          {/* Right side elements */}
          <div className="ml-24 mt-6 p-5 max-h-sm">
            <div>
              <h1 className="text-4xl font-semibold">Welcome !</h1>
              <p className="py-4 text-xl text-gray-600">
                Outdoor adventures for every season. Cozy inside retreat for
                every day.
              </p>
            </div>

            <div className="flex gap-8 mt-5">
              <div>
                <div className="card w-80 h-40 shadow-xl bg-[#c9c3b966] ">
                  <div className="card-body  gap-5">
                    <h2 className="card-title justify-center">
                      Rent On Daily Basis ?
                    </h2>

                    <div className="card-actions justify-center">
                      <button
                        className="btn mt-3 btn-sm btn-ghost bg-rose-500 text-white hover:bg-rose-600"
                        onClick={handleDailyBasis}
                      >
                        press here
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="card w-80 h-40  shadow-xl bg-[#e4d5c452]">
                  <div className="card-body gap-4">
                    <h2 className="card-title justify-center">
                      Rent On Monthly Basis ?
                    </h2>

                    <div className="card-actions justify-center">
                      <button
                        className="btn mt-3  btn-sm  btn-ghost bg-rose-500 text-white hover:bg-rose-600"
                        onClick={handleMonthlyBasis}
                      >
                        press here
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileOptions;
