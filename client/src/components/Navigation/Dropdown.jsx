import React from "react";
import Login from "../SignupLogin/Login";
import Signup from "../SignupLogin/Signup";
function Dropdown() {
  return (
    <div>
      <div className="dropdown dropdown-bottom dropdown-end ">
        <div className="flex">
          <button className="">
            <i
              className="fa-solid fa-arrow-right-from-bracket fa-2xl text-4xl text-rose-500"
            ></i>
          </button>
        </div>

        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-56 mb-2 mt-5 "
        >
          <li>
            <label
              className="active:scale-y-90 transition-transform flex hover:bg-zinc-200"
              htmlFor="my-modal-signup"
            >
              Sign up
            </label>
          </li>
          <li>
            <label
              className="  active:scale-y-90 transition-transform flex hover:bg-zinc-200"
              htmlFor="my-modal-login"
            >
              Log in
            </label>
          </li>
        </ul>
      </div>

      {/* MODAL */}
      <div>
        <Login />
      </div>
      <div>
        <Signup />
      </div>
    </div>
  );
}

export default Dropdown;
