import React from 'react';
import ProductCard from './ProductCard';

function Product() {
  const productList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <>
      <div className="flex gap-10 flex-wrap justify-center mt-[3vh]  mb-[5vh]">
        {productList.slice(0, 8).map((e, i) => {
          return <ProductCard key={i} />;
        })}
      </div>
    </>
  );
}

export default Product;
