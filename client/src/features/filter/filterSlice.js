import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  type: 'monthly',
  location: '',
  date: {},
  price: {},
  rooms: 0,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setType: (state, action) => {
      state.type = action.payload.type;
      state.location = '';
      state.date = {};
      state.price = {};
      state.rooms = 0;
    },
    setFilterStates: (state, action) => {
      state.location = action.payload.filterStates.location;
      state.date = action.payload.filterStates.date;
      state.price = action.payload.filterStates.price;
      state.rooms = action.payload.filterStates.rooms;
    },
  },
});

export const { setType, setFilterStates } = filterSlice.actions;
export default filterSlice.reducer;
