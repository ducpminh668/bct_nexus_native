import { configureStore } from '@reduxjs/toolkit';
import portfolioReducer from '../slices/portfolioSlice';
import authReducer from '../slices/authSlice';

export const store = configureStore({
  reducer: {
    portfolios: portfolioReducer,
    auth: authReducer,
  },
});
