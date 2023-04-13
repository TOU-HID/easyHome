import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login, setIsAuthenticated } from '../../features/users/userSlice';
import Swal from 'sweetalert2';

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  function handleSubmit(e) {
    e.preventDefault();
    const userCredientials = {
      email: email,
      password: password,
    };
    setEmail('');
    setPassword('');

    // Post credientials
    dispatch(login(userCredientials)).then(
      (response) => {
        // console.log(response.payload);
        if (response.payload) {
          const accessToken = response.payload.accessToken;
          localStorage.setItem('accessToken', accessToken);
          dispatch(setIsAuthenticated(true));

          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Login Successful',
            showConfirmButton: false,
            timer: 1500,
          }).then(navigate('/profile'));
          // navigate('/profile');
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Incorrect email or password',
          }).then(dispatch(setIsAuthenticated(false)));
        }
      }
      //  {
      //    if (response.payload) {
      //      const accessToken = response.payload.accessToken;
      //      localStorage.setItem('accessToken', accessToken);
      //      dispatch(setIsAuthenticated(true));
      //      swal('sign up successful !').then(
      //        (document.getElementById('my-modal-signup').checked = false)
      //      );
      //      auth.login(() => navigate('/productDetails'));
      //    } else {
      //      dispatch(setIsAuthenticated(false));
      //    }
      //  }
    );
  }
  return (
    <div>
      <input type="checkbox" id="my-modal-login" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box h-[65vh] w-[30vw]">
          <div className="pt-5  text-3xl font-semibold flex justify-center">
            {' '}
            Login
          </div>
          <label
            htmlFor="my-modal-login"
            className="btn btn-sm btn-circle absolute right-2 top-2  bg-white text-gray-600 border-none hover:bg-rose-300"
          >
            ✕
          </label>
          <form
            action=""
            className="flex flex-col gap-5 justify-center align-middle mt-10 p-10"
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="border-2 border-gray-300 h-16 pl-5 py-3 rounded-lg"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            ></input>
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="border-2 border-gray-300 h-16 pl-5 py-3 rounded-lg"
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            ></input>
            <label
              className="active:scale-y-90 transition-transform flex ml-1"
              htmlFor="my-modal-signup"
            >
              New user?
              <span className="text-rose-500 font-semibold ml-2 cursor-pointer">
                {' '}
                Sign up
              </span>
            </label>
            <button
              htmlFor="my-modal-login"
              className="btn rounded-md bg-rose-500 text-white border-none hover:bg-rose-600 "
              type="submit"
            >
              {' '}
              Log In
            </button>
          </form>

          {/* Login form submit */}
          {/* <div>
            {email}
            {password}
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Login;
