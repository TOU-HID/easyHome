import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactStars from 'react-stars';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { makeRating } from '../../features/houses/houseAPI';
function RatingModla() {
  const { id } = useParams();
  const [rating, setRating] = useState(0);
  const { loggedInUsers } = useSelector((state) => state.user);
  const ratingChanged = (newRating) => {
    setRating(newRating);
  };

  const handleRatingSubmit = () => {
    // alert(loggedInUsers[0]._id);
    // alert(rating);

    document.getElementById('commentBox').value = '';

    if (rating > 0) {
      const productId = id;
      const ratingData = {
        rate: rating,
        raterid: loggedInUsers[0]._id,
      };
      makeRating(productId, ratingData).then((res) => {
        // console.log(res);
        setRating(0);
        toast.success('Thanks for your rating');
      });
    } else {
      // alert('No rating');
      toast.error('Please put a rating next time');
    }
  };
  return (
    <div>
      <input type="checkbox" id="rating-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative h-[70vh] w-[60vh]">
          <div>
            <label
              htmlFor="rating-modal"
              className="btn btn-sm btn-circle absolute right-2 top-2  bg-white text-gray-600 border-none hover:bg-rose-300"
            >
              ✕
            </label>
          </div>

          <div>
            <div className="flex justify-center">
              <h3 className="text-2xl font-bold mt-8">
                Your opinion matters to us!
              </h3>
            </div>

            <div className="flex flex-col justify-center align-middle mt-[8vh] gap-5">
              <div className="flex justify-center text-xl font-semibold text-gray-600">
                What is your rating ?
              </div>

              {/* Star rating component */}
              <div className="flex justify-center">
                <div>
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={50}
                    color2={'#ffd700'}
                    half={false}
                  />
                </div>
              </div>
              <div className="flex justify-center ">
                <input
                  type="text"
                  id="commentBox"
                  className="border-2 border-gray-300 h-[10vh] w-[18vw] rounded-lg placeholder:text-gray-500 pl-[14px] pb-6"
                  placeholder="Leave a message, if you want"
                ></input>
              </div>
              <div className="flex  justify-center">
                <button
                  className="btn rounded-md bg-rose-500 text-white border-none hover:bg-rose-600 w-[18vw]"
                  onClick={handleRatingSubmit}
                >
                  Rate Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default RatingModla;
