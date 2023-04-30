import { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

const SearchBox = () => {
  const [location, setLocation] = useState([]);
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

  const handleRoom = (e) => {
    setRooms(e.target.value);
  };

  return (
    <div
      className="hero min-h-96 w-full"
      style={{
        backgroundImage: `url("https://res.cloudinary.com/dqgdpbbtv/image/upload/v1681882749/houses/s410jqw2widki7egw4rr.png")`,
      }}
    >
      <div className="hero-overlay bg-opacity-20"></div>
      <div className="hero-content text-center text-neutral-content w-full">
        <div className="w-full">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body w-full items-center">
              <div className="tabs justify-center mb-2">
                <a className="tab tab-bordered tab-active">Daily</a>
                <a className="tab tab-bordered">Monthly</a>
              </div>
              <div className="form-control w-10/12  flex flex-row justify-center border-2 p-2 bg-white rounded-xl ">
                <div className="m-2">
                  <label className="label">
                    <span className="label-text">Location</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    onChange={handleLocation}
                    className="input w-full rounded-none max-w-xs focus:outline-none
                  input-bordered border-0 border-b-2 border-grey-dark "
                  />
                </div>
                <div className="m-2">
                  <label className="label">
                    <span className="label-text">Start-End</span>
                  </label>
                  <Datepicker
                    primaryColor={"blue"}
                    value={date}
                    placeholder="Choose start and end date"
                    onChange={handleDateChange}
                    minDate={new Date()}
                    separator={"to"}
                  />
                </div>
                <div className="m-2">
                  <label className="label">
                    <span className="label-text">Price</span>
                  </label>
                  <input
                    type="text"
                    id="minPrice"
                    placeholder="Min"
                    onChange={handlePrice}
                    className="input input-bordered rounded-none w-16"
                  />
                  --
                  <input
                    type="text"
                    id="maxPrice"
                    placeholder="Max"
                    onChange={handlePrice}
                    className="input input-bordered rounded-none w-16"
                  />
                  <div className="dropdown dropdown-hover">
                    <label tabIndex="0" className="btn ml-2 rounded-xl">
                      Rooms
                    </label>
                    <ul
                      tabIndex="0"
                      className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                    >
                      <li>
                        <a onClick={handleRoom} value={2}>
                          2 room
                        </a>
                      </li>
                      <li>
                        <a onClick={handleRoom} value={3}>
                          3 room
                        </a>
                      </li>
                      <li>
                        <a onClick={handleRoom} value={4}>
                          4 room
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="btn btn ml-2">search</div>
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
