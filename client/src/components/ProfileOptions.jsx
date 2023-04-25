import React from 'react';
import { useNavigate } from 'react-router-dom';

function ProfileOptions({ userName }) {
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
      <div className="min-h-[50vh] bg-base-200">
        <div className="flex ">
          <div className="ml-16 m-5">
            {/* carosoul */}
            <div className="max-w-[34vw] h-[44vh] carousel rounded-box">
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
              <h1 className="text-4xl font-semibold">Welcome {userName}!</h1>
              <p className="py-4 text-xl text-gray-600">
                Outdoor adventures for every season. Cozy inside retreat for
                every day.
              </p>
            </div>

            <div className="flex gap-8 mt-10">
              <div>
                {/* <div className="card w-80 h-40 shadow-xl bg-[#c9c3b966] ">
                  <div className="card-body  gap-5  ">
                    <h2 className="card-title justify-center">Rent On</h2>

                    <div className="card-actions justify-center">
                      <button
                        className="btn btn-sm btn-ghost bg-rose-500 text-white hover:bg-rose-600"
                        onClick={handleDailyBasis}
                      >
                        press here
                      </button>
                    </div>
                  </div>
                </div> */}

                <div className="text-3xl font-semibold flex items-center gap-2">
                  Rent on
                  <span>
                    <button
                      className="btn btn-sm btn-ghost bg-rose-500 text-white hover:bg-rose-600"
                      onClick={handleDailyBasis}
                    >
                      Daily
                    </button>
                  </span>
                  <span>/</span>
                  <span>
                    <button
                      className="btn btn-sm btn-ghost bg-rose-500 text-white hover:bg-rose-600"
                      onClick={handleMonthlyBasis}
                    >
                      Monthly
                    </button>
                  </span>{' '}
                  basis ?
                </div>
              </div>

              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileOptions;
