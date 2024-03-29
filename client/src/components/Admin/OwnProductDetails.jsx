import React, { useState, useEffect } from "react";
import NavigationBar from "../Navigation/NavigationBar";
import EachProductCard from "./EachProductCard";
import { useDispatch, useSelector } from "react-redux";
import Leftsidebar from "./Leftsidebar";
import { retriveAllHouses } from "../../features/houses/houseSlice";
import { io } from "socket.io-client";

function OwnProductDetails() {
  const dispatch = useDispatch();
  const [socket, setSocket] = useState(null);
  const { houseList } = useSelector((state) => state.house);
  const [newHouseList, setNewHouseList] = useState(houseList)
  const { loggedInUsers } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(retriveAllHouses());
    // dispatch(retriveAllDailyHouses());
  }, []);

  useEffect(() => {
    const socket = new io("http://localhost:3001", {
      autoConnect: false,
      withCredentials: true,
    });
    socket.connect();
    setSocket(socket);
    console.log(socket);
    // socket.on('firstEmit', (data) => {
    //   console.log(data)
    // })
  }, []);

  useEffect(() => {
    socket?.emit("newUser", loggedInUsers[0]._id);
  }, [socket]);

  const newHouseListHandeler = (id) => {
    const houses = newHouseList.filter(item => item._id !== id)
    setNewHouseList(houses)
    dispatch(retriveAllHouses());
  }

  console.log(newHouseList);

  return (
    <div>
      <NavigationBar />
      <div className="flex gap-10 ml-0 mt-0">
        {/* Left Side */}

        <Leftsidebar />

        {/* // Right side  top*/}
        <div className="flex flex-col gap-5 mt-3">
          <div className="flex flex-col gap-3 mt-4 mb-4">
            <div className="font-bold text-3xl"> Property Dashboard</div>
            <div className=" text-xl">
              {" "}
              Welcome {loggedInUsers[0].userName.toUpperCase()}
            </div>
          </div>

          {/* Each property cart */}

          {newHouseList
            .filter((house) => {
              return house.postby === loggedInUsers[0]._id;
            })
            .filter((house) => {
              return house.isbooked === false;
            })

            .map((house, i) => {
              return (
                <>
                  <EachProductCard
                    house={house}
                    availablity={house.isavailable}
                    socket={socket}
                    newHouseListHandeler={newHouseListHandeler}
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

export default OwnProductDetails;
