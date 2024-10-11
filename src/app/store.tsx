import { configureStore,PayloadAction } from '@reduxjs/toolkit';
import { ThunkDispatch } from 'redux-thunk';

import usersReducer from '../features/users/usersSlice';

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ThunkDispatch<RootState, void, PayloadAction>;