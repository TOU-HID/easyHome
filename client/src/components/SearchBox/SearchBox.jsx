import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Datepicker from "react-tailwindcss-datepicker";
import { setType, setFilterStates } from "./../../features/filter/filterSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const [location, setLocation] = useState('');
  // const [rentType, setRentType] = useState('daily');
  const { type } = useSelector((state) => state.filter);
  const [price, setPrice] = useState({
    minPrice: 0,
    maxPrice: 2000,
  });
  const [rooms, setRooms] = useState(1);
  const [date, setDate] = useState({
    startDate: null,
    endDate: null,
  });

  const typeHandeler = (type) => {
    dispatch(setType({ type }))
  }

  const handleDateChange = (newDate) => {
    // console.log("newValue:", newDate);
    setDate(newDate);
  };

  const handlePrice = (e) => {
    setPrice((v) => ({ ...v, [e.target.id]: e.target.value }));
    // console.log(price);
  };

  const handleLocation = (e) => {
    setLocation(e.target.value);
  };

  const handleRoom = (value) => {
    setRooms(value);
  };

  const storeFilterStates = () => {
    const filterStates = {
      location: location,
      date: date,
      price: price,
      rooms: rooms === 'All' ? '' : rooms
    }
    console.log(filterStates);
    dispatch(setFilterStates({ filterStates }))
  }

  return (
    <div
      className="hero h-96 w-full"
      style={{
        backgroundImage: `url("https://res.cloudinary.com/dgsx9bvvf/image/upload/v1683122017/photo-1600585154340-be6161a56a0c_uphpei.jpg")`,
      }}
    >
      <div className="hero-overlay bg-opacity-20"></div>
      <div className="hero-content text-center text-neutral-content w-full">
        <div className="w-full">
          <div className="card bg-base-100 shadow-xl h-60">
            <div className="card-body w-full items-center">
              <div className="tabs justify-center mb-2">
                <span className={`tab tab-bordered ${type === 'daily' ? 'tab-active' : null}`} onClick={() => typeHandeler('daily')}>Daily</span>
                <span className={`tab tab-bordered ${type === 'monthly' ? 'tab-active' : null}`} onClick={() => typeHandeler('monthly')}>Monthly</span>
              </div>
              <div className="form-control w-10/12  flex flex-row justify-center p-2 bg-white rounded-xl ">
                <div className="m-2">
                  <label className="label">
                    <span className="label-text font-bold font-large">
                      Location
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    onChange={handleLocation}
                    className="input text-gray-800 border-2 border-gray-100 hover:border-gray-100 hover:bg-base-200 rounded-xl focus:outline-none"
                  />
                </div>
                <div className="m-2">
                  <label className="label">
                    <span className="label-text font-bold font-large">
                      Date
                    </span>
                  </label>
                  <input type="date" className="input w-80 h-12 text-gray-800 bg-base-100 border-2 border-gray-100 hover:border-gray-100 hover:bg-base-200 p-2 rounded-xl outline-none" disabled={type === 'monthly'} />
                  {/* <input type="date" className="w-80 h-12 text-gray-800 bg-base-100 border-2 border-gray-100 hover:border-gray-100 hover:bg-base-200 p-2 rounded-xl outline-none" /> */}
                </div>
                <div className="m-2">
                  <label className="label">
                    <span className="label-text font-bold font-large">
                      Price
                    </span>
                  </label>
                  <input
                    type="text"
                    id="maxPrice"
                    placeholder="Max"
                    onChange={handlePrice}
                    className="rounded-xl w-24 p-2 text-center bg-base-100 border-2 border-gray-100 hover:border-gray-100 hover:bg-base-200 outline-none"
                  />
                  <div className="dropdown dropdown-top dropdown-end">
                    <label
                      tabIndex="0"
                      className="btn ml-2 text-gray-400 rounded-xl bg-base-100 border-2 border-gray-100 hover:border-gray-100 hover:bg-base-200"
                    >
                      {rooms} room(s)
                    </label>
                    <ul
                      tabIndex="0"
                      className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 text-gray-400"

                    >
                      <li>
                        <span onClick={() => handleRoom('All')} value={'All'}>
                          All
                        </span>
                      </li>
                      <li>
                        <span onClick={() => handleRoom(2)} value={1}>
                          1 Room
                        </span>
                      </li>
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
                  <div
                    className="btn text-white ml-2 bg-rose-500 border-2 border-rose-100 hover:border-rose-100 hover:bg-rose-600"
                    onClick={storeFilterStates}
                  >
                    search
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
