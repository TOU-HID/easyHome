import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard() {
  return (
    <div className="card w-[20vw] bg-base-100 shadow-xl">
      <figure>
        <Link to="/productDetails">
          <img src="assets/images/product_Images/home1.png" alt="Shoes" />
        </Link>
      </figure>
      <div className="card-body">
        <div className="flex justify-between">
          <div className="flex flex-col justify-start gap-3">
            <h2 className="card-title">Lac-Beauport. Canada</h2>
            <p>Apartment</p>
            <div className="flex gap-4">
              <i className="fa-solid fa-bed text-sm"> 4 </i>
              <i className="fa-solid fa-bath text-sm"> 4 </i>
              <i className="fa-solid fa-table-cells-large  text-sm">
                {' '}
                1500 sqft{' '}
              </i>
            </div>
            <i className="fa-solid fa-bangladeshi-taka-sign fa-sm mt-4">
              {' '}
              15000
            </i>
          </div>

          <div className="flex justify-center align-middle mt-1 ml-2 gap-1">
            <div>
              <i className="fa-solid fa-star fa-sm"></i>
            </div>
            <div>4.2</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
