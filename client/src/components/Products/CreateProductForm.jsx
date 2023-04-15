import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { addHouse } from '../../features/houses/houseSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function CreateProductForm() {
  const dispatch = useDispatch();

  const { loggedInUsers } = useSelector((state) => state.user);
  const [housename, setHouseName] = useState('');
  const [housenumber, setHouseNumber] = useState('');
  const [area, setArea] = useState('');
  const [city, setCity] = useState('');
  const [type, setType] = useState('');
  const [rent, setRent] = useState(0);
  const [bedroom, setBedroom] = useState(0);
  const [bathroom, setBathroom] = useState(0);
  const [sqft, setSqft] = useState(0);
  const [availableform, setAvailableform] = useState(0);
  const [image, setImage] = useState([]);

  const [loading, setLoading] = useState(false);

  const handleImage = (e) => {
    const files = Array.from(e.target.files);
    files.forEach((file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImage((oldArray) => [...oldArray, reader.result]);
      };
    });
  };

  const handleSubmit = (e) => {
    setLoading(true);
    const houseDetails = {
      housename,
      housenumber,
      area,
      city,
      rent,
      bedroom,
      bathroom,
      sqft,
      type,
      availableform,
      image,
      postby: loggedInUsers[0]._id,
    };
    dispatch(addHouse(houseDetails)).then((res) => {
      // console.log(res.payload);

      if (res.payload !== undefined) {
        setLoading(false);
        setImage([]);
        setHouseName('');
        setRent(0);
        setHouseNumber('');
        setArea('');
        setCity('');
        setBedroom(0);
        setBathroom(0);
        setSqft(0);
        setAvailableform('');
        setType('');
        toast.success('post successful');
      } else {
        setLoading(false);
        toast.error('Invalid Information');
      }
    });
    // console.log(houseDetails);
    e.preventDefault();
    // alert('submit hoye geche');
  };

  return (
    <div>
      <div className="flex ">
        {/* Left SideBar */}
        <div className="flex flex-col  p-3 bg-rose-500  shadow w-60 ">
          <div className="space-y-8">
            <div className="flex items-center">
              <h2 className="text-2xl text-white ml-5 mt-5">
                Hey {loggedInUsers[0].userName.toUpperCase()}
              </h2>
            </div>

            <div className="flex-1">
              <ul className="pt-2 pb-4 space-y-5 text-sm">
                <Link to="/post">
                  <li className="rounded-sm hover:hover:bg-rose-600">
                    <div className="flex items-center p-2 space-x-3 rounded-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-gray-100"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        />
                      </svg>
                      <span className="text-gray-100">Post Advertisement</span>
                    </div>
                  </li>
                </Link>

                <Link to="/profile">
                  <li className="rounded-sm  hover:hover:bg-rose-600">
                    <div className="flex items-center p-2 space-x-3 rounded-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-gray-100"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                        />
                      </svg>
                      <span className="text-gray-100">All Posts</span>
                    </div>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
        {/* Form Container */}
        <div className="container relative flex flex-col justify-center">
          <div className=" p-6 m-auto rounded-md shadow-md mt-1">
            <h1 className="text-3xl  text-center text-gray-700 ">
              MAKE A POST
            </h1>

            <form className="space-y-4 " onSubmit={handleSubmit}>
              {/* HOUSE NAME|RENT */}
              <div className="flex gap-5">
                <div>
                  <label className="label">
                    <span className="text-base label-text">House Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="House Name"
                    className="w-[29vw] input input-bordered rounded-md"
                    required
                    onChange={(e) => setHouseName(e.target.value)}
                    value={housename}
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="text-base label-text">Rent</span>
                  </label>
                  <input
                    type="number"
                    placeholder="EG: 15000"
                    className=" input input-bordered rounded-md"
                    required
                    onChange={(e) => setRent(e.target.value)}
                    value={rent}
                  />
                </div>
              </div>
              {/* HOUSE NO|AREA|CITY */}
              <div className="flex gap-5">
                <div>
                  <label className="label">
                    <span className="text-base label-text">House Number</span>
                  </label>
                  <input
                    type="text"
                    placeholder="EG: 139/7"
                    className="input input-bordered rounded-md"
                    required
                    onChange={(e) => setHouseNumber(e.target.value)}
                    value={housenumber}
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="text-base label-text">Area</span>
                  </label>
                  <input
                    type="text"
                    placeholder="EG: Mohakhali"
                    className="input input-bordered rounded-md"
                    required
                    onChange={(e) => setArea(e.target.value)}
                    value={area}
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="text-base label-text">City</span>
                  </label>

                  <select
                    className="input input-bordered rounded-md w-52"
                    onChange={(e) => setCity(e.target.value)}
                    value={city}
                  >
                    <option value="">Choose</option>
                    <option value="Dhaka">Dhaka</option>
                    <option value="Patuakhali">Patuakhali</option>
                  </select>
                </div>
              </div>
              {/* BED|BATH|SQFT */}
              <div className="flex gap-5">
                <div>
                  <label className="label">
                    <span className="text-base label-text">No of Bedroom</span>
                  </label>
                  <input
                    type="number"
                    placeholder="EG: 3"
                    max={5}
                    min={1}
                    className="input input-bordered rounded-md w-52"
                    required
                    onChange={(e) => setBedroom(e.target.value)}
                    value={bedroom}
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="text-base label-text">No of Bathroom</span>
                  </label>
                  <input
                    type="number"
                    placeholder="EG: 2"
                    max={5}
                    min={1}
                    className="input input-bordered rounded-md w-52"
                    required
                    onChange={(e) => setBathroom(e.target.value)}
                    value={bathroom}
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="text-base label-text">Total Squre ft</span>
                  </label>
                  <input
                    type="number"
                    placeholder="EG: 1200"
                    className="input input-bordered rounded-md"
                    min={1}
                    required
                    onChange={(e) => setSqft(e.target.value)}
                    value={sqft}
                  />
                </div>
              </div>
              {/* Availavle form | Type */}
              <div className="flex gap-5">
                <div>
                  <label className="label">
                    <span className="text-base label-text">
                      Available Form{' '}
                    </span>
                  </label>
                  <input
                    type="date"
                    min={moment(Date.now()).format('YYYY-MM-DD')}
                    className="input input-bordered rounded-md w-52"
                    onChange={(e) => setAvailableform(e.target.value)}
                    value={availableform}
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="text-base label-text">Type</span>
                  </label>

                  <select
                    className="input input-bordered rounded-md w-52"
                    onChange={(e) => setType(e.target.value)}
                    value={type}
                  >
                    <option value="">Choose</option>
                    <option value="Flat">Flat</option>
                    <option value="Appertment">Appertment</option>
                    <option value="Villa">Villa</option>
                  </select>
                </div>
              </div>
              {/* Image Upload */}
              <div>
                <label className="label">
                  <span className="text-base label-text">Select Images</span>
                </label>
                <input
                  onChange={handleImage}
                  type="file"
                  id="formupload"
                  name="image"
                  className="form-control file-input file-input-bordered rounded-md file-input-error  w-full max-w-xs file-input-sm "
                  multiple
                  required
                />
                <div className="flex gap-2">
                  {Array.from(image).map((item, i) => {
                    return (
                      <span key={i}>
                        <img
                          style={{ padding: '10px' }}
                          width={100}
                          height={50}
                          src={item ? item : null}
                        />
                      </span>
                    );
                  })}
                </div>
              </div>
              {/* Submit Button */}
              <div>
                {/* <button className="btn btn-block">Sign Up</button> */}
                <button className="btn btn-block rounded-md bg-rose-500 text-white border-none hover:bg-rose-600 ">
                  {loading ? (
                    <div
                      className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                      role="status"
                    >
                      <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                        Loading...
                      </span>
                    </div>
                  ) : (
                    'Post'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default CreateProductForm;
