import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { addHouse } from '../../features/houses/houseSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavigationBar from '../Navigation/NavigationBar';
import Leftsidebar from '../Admin/Leftsidebar';

function CreateProductForm() {
  const dispatch = useDispatch();

  const { loggedInUsers } = useSelector((state) => state.user);
  const [housename, setHouseName] = useState('');
  const [housenumber, setHouseNumber] = useState('');
  const [area, setArea] = useState('');
  const [city, setCity] = useState('');
  const [type, setType] = useState('');
  const [rent, setRent] = useState('');
  const [bedroom, setBedroom] = useState('');
  const [bathroom, setBathroom] = useState('');
  const [rentperday, setRentperday] = useState('');
  const [monthlyMaintenanceCost, setMonthlyMaintenanceCost] = useState('');
  const [sqft, setSqft] = useState('');
  const [availableform, setAvailableform] = useState('');
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
      rentperday,
      monthlyMaintenanceCost,
      postby: loggedInUsers[0]._id,
    };
    console.log(image.length);
    if (image.length != 4) {
      toast.error('You are allowed to select exectly 4 images');
      setLoading(false);
    } else {
      dispatch(addHouse(houseDetails)).then((res) => {
        // console.log(res.payload);

        if (res.payload !== undefined) {
          setLoading(false);
          setImage([]);
          setHouseName('');
          setRent('');
          setHouseNumber('');
          setArea('');
          setCity('');
          setBedroom('');
          setBathroom('');
          setSqft('');
          setAvailableform('');
          setType('');
          setRentperday('');
          setMonthlyMaintenanceCost('');
          toast.success('post successful');
        } else {
          setLoading(false);
          toast.error('Invalid Information');
        }
      });
    }
    // console.log(houseDetails);
    e.preventDefault();
    // alert('submit hoye geche');
  };

  return (
    <div>
      <NavigationBar />

      {/* <div>{type}</div> */}
      <div className="flex mt-5 gap-10 ">
        {/* Left Sidebar */}
        <div className=" ml-16 w-[40vw] min-h-[85vh] rounded-xl bg-[#f4c8c8] pl-5  ">
          <Leftsidebar />
        </div>
        {/* Form Container */}
        <div className="container relative flex flex-col justify-center rounded-2xl mr-96 bg-[#e8d5d577]">
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
                    <span className="text-base label-text">Rent Per Month</span>
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
              {/* Availavle form | Type | Rent per day*/}
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

                {/* Monthly Maintenance Cost */}
                <div>
                  <label className="label">
                    <span className="text-base label-text">
                      Monthly Maintenance Cost
                    </span>
                  </label>
                  <input
                    type="number"
                    placeholder="EG: 1500"
                    min={1}
                    className="input input-bordered rounded-md w-52"
                    required
                    onChange={(e) => setMonthlyMaintenanceCost(e.target.value)}
                    value={monthlyMaintenanceCost}
                  />
                </div>
              </div>

              {/* Image Upload */}
              <div>
                <label className="label">
                  <span className="text-base label-text">Select 4* Images</span>
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
