import React from 'react';

function ProductCarousel() {
  const images = [
    'assets/images/product_Images/c3.png',
    'assets/images/product_Images/c2.png',
    'assets/images/product_Images/c1.png',
  ];
  return (
    <div className="flex justify-between align-middle mt-5 px-[6vw]">
      <div className="flex flex-col gap-3">
        <div>
          <div className="card w-[35vw] bg-base-100 shadow-xl">
            <figure className="rounded-lg">
              <img src={images[0]} alt="" />
            </figure>
          </div>
        </div>
        <div>
          <div className="card w-[35vw] bg-base-100 shadow-xl">
            <figure className="rounded-lg">
              <img src={images[0]} alt="Shoes" />
            </figure>
          </div>
        </div>
      </div>
      <div className="carousel w-7/12 rounded-2xl">
        return (
        <>
          <div id="slide1" className="carousel-item relative w-full">
            <img src={images[0]} className="w-full" />
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
            <img src={images[1]} className="w-full" />
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
            <img src={images[2]} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </>
        );
      </div>
    </div>
  );
}

export default ProductCarousel;
