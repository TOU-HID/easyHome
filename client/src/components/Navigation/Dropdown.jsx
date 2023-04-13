import React from 'react';
import Login from '../SignupLogin/Login';
import Signup from '../SignupLogin/Signup';
function Dropdown() {
  return (
    <div>
      <div className="dropdown dropdown-end">
        <button className=" flex gap-3 justify-center align-middle">
          <i
            className="fa-solid fa-bars fa-lg"
            style={{ color: '#161717' }}
          ></i>

          <i
            className="fa-solid fa-circle-user fa-2xl"
            style={{ color: '#161717' }}
          ></i>
        </button>

        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 mb-2"
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
