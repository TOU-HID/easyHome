import React, { useState, useEffect } from 'react';
import NavigationBar from '../Navigation/NavigationBar';

import { useDispatch, useSelector } from 'react-redux';
import Leftsidebar from './Leftsidebar';
import EachProductCardDaily from './EachProductCardDaily';
import { retriveAllDailyHouses } from '../../features/dailyHouse/dailyHouseSlice';
import { io } from 'socket.io-client';

function OwnProductDaily() {
  const dispatch = useDispatch();
  const [socket, setSocket] = useState(null);
  const { dailyHouseList } = useSelector((state) => state.dailyHouse);
  const { loggedInUsers } = useSelector((state) => state.user);

  useEffect(() => {
    const socket = new io('http://localhost:3001', {
      autoConnect: false,
      withCredentials: true
    })
    socket.connect();
    setSocket(socket)
    console.log(socket);
    // socket.on('firstEmit', (data) => {
    //   console.log(data)
    // })
  }, []);

  useEffect(() => {
    socket?.emit('newUser', loggedInUsers[0]._id)
  }, [socket])

  useEffect(() => {
    dispatch(retriveAllDailyHouses());
  }, []);


  return (
    <div>
      <NavigationBar />
      <div className="flex gap-10 ml-20 mt-5">
        {/* Left Side */}

        <Leftsidebar />

        {/* // Right side  top*/}
        <div className="flex flex-col gap-5 mt-3">
          <div className="flex flex-col gap-3 mt-4 mb-4">
            <div className="font-bold text-3xl"> Property Dashboard</div>
            <div className=" text-xl">
              {' '}
              Welcome {loggedInUsers[0].userName.toUpperCase()}
            </div>
          </div>

          {/* Each property cart */}

          {dailyHouseList
            .filter((house) => {
              return house.postby === loggedInUsers[0]._id;
            })
            .filter((house) => {
              return house.isbooked === false;
            })

            .map((house, i) => {
              return (
                <>
                  <EachProductCardDaily
                    house={house}
                    availablity={house.isavailable}
                    socket={socket}
                  />
                </>
              );
            })}
          {/* <EachProductCard />
          <EachProductCard /> */}
        </div>
      </div>
    </div>
  );
}

export default OwnProductDaily;
