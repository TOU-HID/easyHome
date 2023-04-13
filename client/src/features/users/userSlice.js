import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getUser, creatUser, loginUser } from './userAPI';

const initialState = {
  users: [],
  loggedInUsers: [],
  isLoading: false,
  isError: false,
  error: '',
  isAuthenticated: false,
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
  },

  extraReducers: (builder) => {
    builder
      .addCase(addUser.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.users.push(action.payload);
        state.loggedInUsers[0] = action.payload;
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
      });
  },
});
export default userSlice.reducer;
export const { setIsAuthenticated, setLoggedInUsers } = userSlice.actions;
