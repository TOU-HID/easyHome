import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createPost, getAllHouses, getHousesByID } from './houseAPI';

const initialState = {
  houses: [],
  houseList: [],
  selectedHouse: [],
  isLoading: false,
  isError: false,
  error: '',
};

export const addHouse = createAsyncThunk('houses/addHouse', async (data) => {
  const house = await createPost(data);
  return house;
});
export const retriveAllHouses = createAsyncThunk(
  'houses/retriveAllHouses',
  async () => {
    const allHouse = await getAllHouses();
    return allHouse;
  }
);
export const retriveSelectedHouses = createAsyncThunk(
  'houses/retriveSelectedHouses',
  async (houseId) => {
    const selectedHouse = await getHousesByID(houseId);

    return selectedHouse;
  }
);
// export const login = createAsyncThunk('users/loginUser', async (data) => {
//   const user = await loginUser(data);
//   return user;
// });
// export const fetchUser = createAsyncThunk('users/fetchUser', async (data) => {
//   const accessToken = localStorage.getItem('accessToken');
//   const userInfo = await getUser(accessToken);
//   return userInfo;
// });

//  create slice
const houseSlice = createSlice({
  name: 'house',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(addHouse.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.houses.push(action.payload);
      })
      .addCase(addHouse.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(addHouse.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.error = action.error?.message;
      })

      .addCase(retriveAllHouses.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.houseList = action.payload;
      })
      .addCase(retriveAllHouses.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(retriveAllHouses.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.error = action.error?.message;
      })

      .addCase(retriveSelectedHouses.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.selectedHouse[0] = action.payload;
      })
      .addCase(retriveSelectedHouses.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(retriveSelectedHouses.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.error = action.error?.message;
      });
  },
});
export default houseSlice.reducer;
export const {} = houseSlice.actions;
