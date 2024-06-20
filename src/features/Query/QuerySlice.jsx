import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: "in", // Default value, change as needed
  page: 1,
  totalPage: 1,
};

const querySlice = createSlice({
  name: 'Query',
  initialState,
  reducers: {
    setParams: (state, action) => {
      state.value = action.payload;
      state.page = 1; // Reset page to 1 whenever value changes
    },
    setTotalPage: (state, action) => {
      state.totalPage = Math.ceil(action.payload.totalResults / 20);
    },
    increment(state) {
      state.page++;
    },
    decrement(state) {
      if (state.page > 1) {
        state.page--;
      }
    },
  },
});

export const { setParams, setTotalPage, increment, decrement } = querySlice.actions;
export default querySlice.reducer;
