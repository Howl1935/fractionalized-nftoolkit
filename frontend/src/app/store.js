import { configureStore } from '@reduxjs/toolkit';
import covalentReducer from '../features/covalent/covalentSlice'

export const store = configureStore({
  reducer: {
    covalent: covalentReducer
  
  },
});
