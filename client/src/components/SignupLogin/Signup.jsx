import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import GoogleAuth from './GoogleAuth';
import { addUser, setIsAuthenticated } from '../../features/users/userSlice';

function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [userCredientials, setUserCredientials] = useState({
    userName: '',
    email: '',
    password: '',
    role: 'renter',
  });
  const [isChecked, setIsChecked] = useState(false);
  const { isLoading, isError } = useSelector((state) => state.user);

  const handleOnChange = (e) => {
    isChecked
      ? setUserCredientials((prevState) => ({
          ...prevState,
          role: 'renter',
        }))
      : setUserCredientials((prevState) => ({
          ...prevState,
          role: 'landlord',
        }));
    setIsChecked(!isChecked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setUserCredientials((prevState) => ({
      userName: '',
      email: '',
      password: '',
    }));

    setIsChecked(false);
    // setIsChecked(!isChecked);
    //POST USER
    dispatch(addUser(userCredientials)).then((response) => {
      if (response.payload) {
        const accessToken = response.payload.accessToken;
        localStorage.setItem('accessToken', accessToken);
        dispatch(setIsAuthenticated(true));
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Signup Successful',
          showConfirmButton: false,
          timer: 1500,
        }).then((document.getElementById('my-modal-signup').checked = false));
        navigate('/profile');
      } else {
        dispatch(setIsAuthenticated(false));
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Oops...',
          text: 'User already exists',
        });
      }
    });
  };
  return (
    <div>
      <input type="checkbox" id="my-modal-signup" className="modal-toggle" />
      <div className="modal  ">
        <div className="modal-box h-[110vh] w-[45vw] no-scrollbar overflow-y-auto">
          <div className="pt-5  text-3xl font-semibold flex justify-center ">
            {' '}
            Sign up
          </div>
          <label
            htmlFor="my-modal-signup"
            className="btn btn-sm btn-circle absolute right-2 top-2  bg-white text-gray-600 border-none hover:bg-rose-300"
          >
            ✕
          </label>
          <form
            action=""
            className="flex flex-col gap-5 justify-center align-middle mt-14 p-8"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="User name"
              name="userName"
              value={userCredientials.userName}
              className="border-2 border-gray-300 h-16 pl-5 py-3 rounded-lg"
              required
              onChange={(e) =>
                setUserCredientials((prevState) => ({
                  ...prevState,
                  userName: e.target.value,
                }))
              }
            ></input>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={userCredientials.email}
              className="border-2 border-gray-300 h-16 pl-5 py-3 rounded-lg"
              required
              onChange={(e) =>
                setUserCredientials((prevState) => ({
                  ...prevState,
                  email: e.target.value,
                }))
              }
            ></input>
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={userCredientials.password}
              className="border-2 border-gray-300 h-16 pl-5 py-3 rounded-lg"
              required
              onChange={(e) =>
                setUserCredientials((prevState) => ({
                  ...prevState,
                  password: e.target.value,
                }))
              }
            ></input>

            <label className="cursor-pointer label">
              <div className="text-md font-semibold">
                Want to register as a{' '}
                <span className=" ml-1 font-bold text-rose-400">
                  LANDLORD ?
                </span>
              </div>
              <input
                type="checkbox"
                checked={isChecked}
                className="checkbox checkbox-error"
                onChange={handleOnChange}
                // required="required"
              />
            </label>

            <button
              htmlFor="my-modal-signup"
              className="btn rounded-md bg-rose-500 text-white border-none hover:bg-rose-600 "
              type="submit"
            >
              {' '}
              Sign Up
            </button>

            {/* -----OR------ and Google auth */}

            <div className="flex items-center ">
              {/* <!-- The left line --> */}
              <div className="flex-grow h-px bg-gray-400"></div>

              {/* <!--  text  --> */}
              <span className="flex-shrink text-sm text-gray-500 px-4 italic font-light">
                OR
              </span>

              {/* <!-- The right line --> */}
              <div className="flex-grow h-px bg-gray-400"></div>
            </div>

            <div className="">
              <GoogleAuth width={'400'} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
