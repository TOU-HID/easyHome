import ReactStars from 'react-stars';
import React from 'react';

function ProductRating() {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <div>
      <ReactStars
        count={5}
        onChange={ratingChanged}
        size={50}
        color2={'#ffd700'}
        half={false}
      />
    </div>
  );
}

export default ProductRating;
