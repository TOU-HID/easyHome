import React from 'react';

function Search() {
  return (
    <div>
      <div className="relative ">
        <input
          type="search"
          name="serch"
          placeholder="Start your search"
          className="bg-white h-14 w-[20rem] px-5 pr-10 rounded-full text-sm focus:outline-none placeholder-black font-bold shadow-lg border-2"
        />
        <button
          type="submit"
          className="absolute right-0 top-0 mt-3 mr-2 bg-rose-500 h-8 w-8 rounded-full "
        >
          <i
            className="fa-solid fa-magnifying-glass fa"
            style={{ color: '#FFFFFF' }}
          ></i>
        </button>
      </div>
    </div>
  );
}

export default Search;
