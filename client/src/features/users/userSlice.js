import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import {
  getUser,
  creatUser,
  loginUser,
  getUserByID,
  createAndGetGoogleUser,
  addRemoveWishList,
} from './userAPI';

const initialState = {
  loggedInUsers: [],
  isLoading: false,
  isError: false,
  error: '',
  isAuthenticated: false,
  currentProductLandlord: [],
  allNotifications: [],
  wishlist: [],
};

export const addUser = createAsyncThunk('user/addUser', async (data) => {
  const user = await creatUser(data);
  return user;
});
export const login = createAsyncThunk('users/loginUser', async (data) => {
  const user = await loginUser(data);
  return user;
});
export const fetchUser = createAsyncThunk('users/fetchUser', async (data) => {
  const accessToken = localStorage.getItem('accessToken');
  const userInfo = await getUser(accessToken);
  return userInfo;
});
export const fetchUserByid = createAsyncThunk(
  'users/fetchUserByid',
  async (id) => {
    const userInfo = await getUserByID(id);
    return userInfo;
  }
);
export const googleAddAndFetchUser = createAsyncThunk(
  'users/googleAddAndFetchUser',
  async (data) => {
    const userInfo = await createAndGetGoogleUser(data);
    return userInfo;
  }
);
export const addRemoveWishListAdded = createAsyncThunk(
  'houses/addRemoveWishListAdded',
  async (data) => {
    // console.log(houseId);
    const wishlist = await addRemoveWishList(data);
    // wishlist.then((res) => console.log(res));
    // console.log('wishlist', wishlist);
    return wishlist;
  }
);

//  create slice
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setIsAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    setLoggedInUsers: (state, action) => {
      state.loggedInUsers = action.payload;
    },
    setNotification: (state, action) => {
      state.allNotifications.push(action.payload.notification);
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(addUser.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.loggedInUsers[0] = action.payload.data;
      })
      .addCase(addUser.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(addUser.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.error = action.error?.message;
      })

      // Google Auth
      .addCase(googleAddAndFetchUser.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.loggedInUsers[0] = action.payload.data;
        state.isAuthenticated = true;
      })
      .addCase(googleAddAndFetchUser.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(googleAddAndFetchUser.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.error = action.error?.message;
      })

      .addCase(login.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isAuthenticated = true;
        // state.loggedInUsers.push(action.payload);
        // state.loggedInUsers[0] = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.error = action.error?.message;
      })
      .addCase(fetchUser.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        // state.loggedInUsers.push(action.payload);
        state.loggedInUsers[0] = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.error = action.error?.message;
      })
      .addCase(fetchUserByid.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchUserByid.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        // state.loggedInUsers.push(action.payload);
        state.currentProductLandlord[0] = action.payload;
      })
      .addCase(fetchUserByid.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.error = action.error?.message;
      })

      .addCase(addRemoveWishListAdded.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.wishlist = action.payload;
      })
      .addCase(addRemoveWishListAdded.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(addRemoveWishListAdded.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.error = action.error?.message;
      });
  },
});
export default userSlice.reducer;
export const { setIsAuthenticated, setLoggedInUsers, setNotification } =
  userSlice.actions;
