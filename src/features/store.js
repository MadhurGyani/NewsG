import { configureStore } from '@reduxjs/toolkit';
import queryReducer from './Query/QuerySlice';

export const store = configureStore({
  reducer: {
    query : queryReducer
  },
});
