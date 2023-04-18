import React, { useState } from 'react';

function SecondHero({ Product }) {
  const [showAll, setShowAll] = useState(false);
  const [buttonName, setButtonName] = useState('SHOW All');

  const handleShowAll = () => {
    if (showAll) {
      setButtonName('SHOW All');
    } else {
      setButtonName('SHOW LESS');
    }
    setShowAll(!showAll);
  };

  return (
    <div>
      <div className=" bg-base-200 min-h-[95vh] bg-[#695491] min-w-screen mt-2">
        <div className=" flex  flex-col gap-5 p-5 ml-[15vw]  text-white ">
          <div className="mt-[10vh] text-3xl font-semibold">
            {' '}
            Are you a bachelor ? <br />
            No vacancies,
            <br /> more peace of mind.{' '}
          </div>
          <div className="text-xl text-gray-300 font-semibold">
            Where bachelor and bachelorette can find there home just in a click
            !
          </div>
        </div>
        <div className=" ml-[11vw] ">
          <Product showAll={showAll} />
          <div className="flex  ">
            <button
              className="btn btn-block w-[65vw] ml-20"
              onClick={handleShowAll}
            >
              {buttonName}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondHero;
