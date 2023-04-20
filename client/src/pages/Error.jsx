import React from 'react';
import NavigationBar from '../components/Navigation/NavigationBar';
function Error() {
  return (
    <>
      <NavigationBar />
      <div className="text-3xl text-rose-500 flex justify-center align-middle mt-[25vh] min-h-[52vh]">
        Page not found ERROR 404
      </div>
    </>
  );
}

export default Error;
