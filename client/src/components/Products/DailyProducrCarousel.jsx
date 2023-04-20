import React from 'react';

import { useSelector } from 'react-redux';

function DailyProducrCarousel() {
  const { dailySelectedHouse } = useSelector((state) => state.dailyHouse);

  const images = dailySelectedHouse[0].image;

  return (
    <div className="flex justify-between align-middle mt-5 px-[6vw]">
      {/* left side photos */}
      <div className="flex flex-col gap-3">
        <div>
          <div className="card w-[35vw] bg-base-100 shadow-xl h-[30vh]">
            <figure className="rounded-lg">
              <img src={images[0].url} alt="" />
            </figure>
          </div>
        </div>
        <div>
          <div className="card w-[35vw] bg-base-100 shadow-xl h-[30vh]">
            <figure className="rounded-lg">
              <img src={images[1].url} alt="Shoes" />
            </figure>
          </div>
        </div>
      </div>
      {/* carousel */}
      <div className="carousel w-7/12 rounded-2xl h-[62vh]">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={images[2].url} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={images[3].url} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={images[0].url} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DailyProducrCarousel;
