import React from 'react';
import Login from '../SignupLogin/Login';
import Signup from '../SignupLogin/Signup';
function Dropdown() {
  return (
    <div>
      <div className="dropdown dropdown-bottom dropdown-end ">
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

      {/* <div className="navbar bg-base-300 rounded-box">
        <div className="flex-1 px-2 lg:flex-none">
          <a className="text-lg font-bold">daisyUI</a>
        </div>
        <div className="flex justify-end flex-1 px-2">
          <div className="flex items-stretch">
            <a className="btn btn-ghost rounded-btn">Button</a>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost rounded-btn">
                Dropdown
              </label>
              <ul
                tabIndex={0}
                className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div> */}

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
