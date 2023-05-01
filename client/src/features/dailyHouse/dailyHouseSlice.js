import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  createPost,
  getAllHouses,
  getHousesByID,
  deletePost,
} from './dailyHouseAPI';

const initialState = {
  dailyHouses: [],
  dailyHouseList: [],
  dailySelectedHouse: [],
  isLoading: false,
  isError: false,
  error: '',
  dailySingleHouse: [],
};

export const addDailyHouse = createAsyncThunk(
  'dailyHouses/addDailyHouse',
  async (data) => {
    const house = await createPost(data);
    return house;
  }
);
export const retriveAllDailyHouses = createAsyncThunk(
  'dailyHouses/retriveAllDailyHouses',
  async () => {
    const allHouse = await getAllHouses();
    return allHouse;
  }
);
export const retriveSelectedDailyHouses = createAsyncThunk(
  'dailyHouses/retriveSelectedDailyHouses',
  // console.log('asdf')
  async (houseId) => {
    const dailySelectedHouse = await getHousesByID(houseId);
    return dailySelectedHouse;
  }
);
export const getSingleDailyHouse = createAsyncThunk(
  'dailyHouses/getSingleDailyHouse',
  async (houseId) => {
    const dailySelectedHouse = await getHousesByID(houseId);

    return dailySelectedHouse;
  }
);
export const deleteDailyHouse = createAsyncThunk(
  'dailyHouses/deleteDailyHouse',
  async (houseId) => {
    const dailySelectedHouse = await deletePost(houseId);

    return dailySelectedHouse;
  }
);

//  create slice
const dailyHouseSlice = createSlice({
  name: 'dailyHouse',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(addDailyHouse.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.dailyHouses.push(action.payload);
      })
      .addCase(addDailyHouse.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(addDailyHouse.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.error = action.error?.message;
      })

      .addCase(retriveAllDailyHouses.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.dailyHouseList = action.payload;
      })
      .addCase(retriveAllDailyHouses.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(retriveAllDailyHouses.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.error = action.error?.message;
      })

      .addCase(retriveSelectedDailyHouses.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.dailySelectedHouse[0] = action.payload;
      })
      .addCase(retriveSelectedDailyHouses.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(retriveSelectedDailyHouses.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.error = action.error?.message;
      })
      .addCase(getSingleDailyHouse.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.dailySingleHouse[0] = action.payload;
      })
      .addCase(getSingleDailyHouse.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(getSingleDailyHouse.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.error = action.error?.message;
      })
      .addCase(deleteDailyHouse.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.dailySingleHouse.filter((item) => item._id !== action.meta.arg);
      })
      .addCase(deleteDailyHouse.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(deleteDailyHouse.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.error = action.error?.message;
      });
  },
});
export default dailyHouseSlice.reducer;
export const {} = dailyHouseSlice.actions;
