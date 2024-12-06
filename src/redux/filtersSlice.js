import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '', 
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const selectFilter = state => state.filter.name;

export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;