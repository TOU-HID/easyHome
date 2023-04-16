import React from 'react';
import { useSelector } from 'react-redux';
import SearchBar from '../SearchBar/SearchBar';

function Search() {
  const { houseList } = useSelector((state) => state.house);

  // console.log(houseList);
  return (
    <>
      {houseList ? (
        <div>
          <SearchBar data={houseList} />
        </div>
      ) : (
        <div>null</div>
      )}
    </>
  );
}

export default Search;
