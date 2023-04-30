import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filterState: {},
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilterStates: (state, action) => {
      state.filterState = action.payload.filterState;
    },
  },
});

export const { setFilterStates } = filterSlice.actions;
export default filterSlice.reducer;
