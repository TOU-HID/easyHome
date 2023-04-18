import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function SearchBar({ data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState('');
  const navigate = useNavigate();

  const handleClick = (houseid) => {
    // alert(houseid);
    navigate(`/productDetails/${houseid}`);
  };

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.area.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === '') {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered('');
  };

  return (
    <div className="search flex flex-col  ">
      <div className="form-control  relative ">
        <input
          type="text"
          value={wordEntered}
          onChange={handleFilter}
          placeholder="Search by area. Eg: Gulshan..."
          className="bg-white h-14 min-w-[23rem] px-5 pr-10 rounded-full text-sm focus:outline-none placeholder-gray-500 font-semibold shadow-lg border-2"
        />
        {/* button */}
        <div className="">
          {filteredData.length === 0 ? (
            // <i className="fa-solid fa-magnifying-glass"></i>
            <>
              <button
                type="submit"
                className="absolute right-0 top-0 mt-3 mr-2 bg-rose-500 h-8 w-8 rounded-full "
              >
                <i
                  className="fa-solid fa-magnifying-glass fa"
                  style={{ color: '#FFFFFF' }}
                ></i>
              </button>
            </>
          ) : (
            // <button id="" onClick={clearInput}>
            //   <i className="fa-solid fa-xmark"></i>
            // </button>
            <button
              className="absolute right-0 top-0 mt-3 mr-2 bg-rose-500 h-8 w-8 rounded-full "
              id="crossBuutton"
              onClick={clearInput}
            >
              <i
                className="fa-solid fa-xmark fa"
                style={{ color: '#FFFFFF' }}
              ></i>
            </button>
          )}
        </div>
      </div>

      {/* Result */}
      <div>
        {filteredData.length != 0 && (
          <div className="bg-[#FAF7F5] w-[40vw] shadow-lg mt-3 rounded-xl flex flex-col gap-3 absolute z-10 overflow-scroll h-48 right-[30vw] p-5 no-scrollbar overflow-y-auto">
            {filteredData
              .filter((house) => house.isavailable === true)
              .map((house, index) => {
                return (
                  <div key={index}>
                    <div
                      className="card bg-base-100 shadow-xl cursor-pointer  "
                      onClick={() => handleClick(house._id)}
                    >
                      <div className="card-body  ">
                        <div className="flex gap-10 justify-between">
                          <div className="flex gap-4 items-center justify-between">
                            <div className="text-xl font-semibold">
                              {house.housename}{' '}
                            </div>
                            <div className="text-md mt-1">
                              <span>{house.area} </span>
                              <span>{house.city} </span>
                            </div>
                          </div>
                          <div className="">
                            <img src={house.image[0].url} width={100}></img>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchBar;
