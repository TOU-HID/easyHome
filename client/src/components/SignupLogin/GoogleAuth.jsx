import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { googleAddAndFetchUser } from '../../features/users/userSlice';
import Swal from 'sweetalert2';

function GoogleAuth({ width }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <GoogleOAuthProvider clientId="195127431392-am7f136teict4g6hn03qi09qpnre74at.apps.googleusercontent.com">
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              //   console.log(credentialResponse);
              const token = credentialResponse.credential;
              const decode = jwt_decode(token);

              const userCredientials = {
                userName: decode.given_name,
                email: decode.email,

                role: 'renter',
              };
              // post data to user db
              // console.log(userCredientials);

              dispatch(googleAddAndFetchUser(userCredientials)).then(
                (response) => {
                  // console.log(res);
                  if (response.payload) {
                    const accessToken = response.payload.accessToken;
                    localStorage.setItem('accessToken', accessToken);
                    // dispatch(setIsAuthenticated(true));

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
                    });
                  }
                }
              );

              // do login in with data
            }}
            onError={() => {
              console.log('Login Failed');
            }}
            width={width}
            border={width}
            // type={'icon'}
          />
        </GoogleOAuthProvider>
      </div>
    </div>
  );
}

export default GoogleAuth;
