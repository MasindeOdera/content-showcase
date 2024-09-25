import { configureStore } from '@reduxjs/toolkit';
import publicationsReducer from './publicationsSlice';

export const store = configureStore({
  reducer: {
    publications: publicationsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
