import { configureStore } from '@reduxjs/toolkit';
import auth from '../features/auth/authSlice';
import sup from '../features/suplier/supSlice';
import place from '../features/place/placeSlice';
export const store = configureStore({
  reducer: {
    auth,
    sup,
    place
  },
});
