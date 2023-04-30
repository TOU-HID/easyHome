import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Datepicker from "react-tailwindcss-datepicker";
import { setFilterStates } from "./../../features/filter/filterSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const [location, setLocation] = useState('');
  const [rentType, setRentType] = useState('daily');
  const [price, setPrice] = useState({
    minPrice: 0,
    maxPrice: 2000,
  });
  const [rooms, setRooms] = useState(1);
  const [date, setDate] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(11),
  });

  const handleDateChange = (newDate) => {
    console.log("newValue:", newDate);
    setDate(newDate);
  };

  const handlePrice = (e) => {
    setPrice((v) => ({ ...v, [e.target.id]: e.target.value }));
    console.log(price);
  };

  const handleLocation = (e) => {
    setLocation(e.target.value);
    console.log(location);
  };

  const handleRoom = (value) => {
    setRooms(value);
  };

  const storeFilterStates = () => {
    const filterStates = {
      type: rentType,
      location: location,
      date: date,
      price: price,
      rooms: rooms
    }
    console.log(filterStates);
    dispatch(setFilterStates({ filterStates }))
  }

  return (
    <div
      className="hero h-96 w-full"
      style={{
        backgroundImage: `url("https://res.cloudinary.com/dqgdpbbtv/image/upload/v1681882749/houses/s410jqw2widki7egw4rr.png")`,
      }}
    >
      <div className="hero-overlay bg-opacity-20"></div>
      <div className="hero-content text-center text-neutral-content w-full">
        <div className="w-full">
          {/* <h1 className="mb-5 text-5xl font-bold">Hello there</h1> */}
          <div className="card bg-base-100 shadow-xl h-60">
            <div className="card-body w-full items-center">
              <div className="tabs justify-center mb-2">
                <span className={`tab tab-bordered ${rentType == 'daily' ? 'tab-active' : null}`} onClick={() => setRentType('daily')}>Daily</span>
                <span className={`tab tab-bordered ${rentType == 'monthly' ? 'tab-active' : null}`} onClick={() => setRentType('monthly')}>Monthly</span>
              </div>
              <div className="form-control w-10/12  flex flex-row justify-center border-2 p-2 bg-white rounded-xl ">
                <div className="m-2">
                  <label className="label">
                    <span className="label-text font-bold font-large">Location</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    onChange={handleLocation}
                    className="input bg-base-100 border-2 border-gray-100 hover:border-gray-100 hover:bg-base-200 rounded-xl  outline-none"
                  />
                </div>
                <div className="m-2">
                  <label className="label">
                    <span className="label-text font-bold font-large">Start - End</span>
                  </label>
                  <Datepicker
                    primaryColor={"rose"}
                    placeholder="Choose start and end date"
                    onChange={handleDateChange}
                    minDate={new Date()}
                    value={date}
                    separator={"to"}
                    inputClassName='w-80 h-12 bg-base-100 border-2 border-gray-100 hover:border-gray-100 hover:bg-base-200 p-2 rounded-xl outline-none'
                  />
                </div>
                <div className="m-2">
                  <label className="label">
                    <span className="label-text font-bold font-large">Price</span>
                  </label>
                  <input
                    type="text"
                    id="minPrice"
                    placeholder="Min"
                    onChange={handlePrice}
                    className="rounded-xl w-16 p-2 text-center bg-base-100 border-2 border-gray-100 hover:border-gray-100 hover:bg-base-200 outline-none"
                  />
                  --
                  <input
                    type="text"
                    id="maxPrice"
                    placeholder="Max"
                    onChange={handlePrice}
                    className="rounded-xl w-16 p-2 text-center bg-base-100 border-2 border-gray-100 hover:border-gray-100 hover:bg-base-200 outline-none"
                  />
                  <div className="dropdown dropdown-hover">
                    <label tabIndex="0" className="btn ml-2 text-gray-400 rounded-xl bg-base-100 border-2 border-gray-100 hover:border-gray-100 hover:bg-base-200">
                      {rooms} room(s)
                    </label>
                    <ul
                      tabIndex="0"
                      className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 text-gray-400"
                    >
                      <li>
                        <span onClick={() => handleRoom(2)} value={2}>
                          2 Rooms
                        </span>
                      </li>
                      <li>
                        <span onClick={() => handleRoom(3)} value={3}>
                          3 Rooms
                        </span>
                      </li>
                      <li>
                        <span onClick={() => handleRoom(4)} value={4}>
                          4 Rooms
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="btn text-white ml-2 bg-rose-500 border-2 border-rose-100 hover:border-rose-100 hover:bg-rose-600" onClick={storeFilterStates}>search</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default SearchBox;
