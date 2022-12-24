import {combineReducers, configureStore} from '@reduxjs/toolkit';
import apiSlice from './apiSlice';
import userSlice from './userSlice';

const rootReducer = combineReducers({
  userSlice: userSlice,
  apiSlice: apiSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

const store = configureStore({
  reducer: rootReducer,
});

export default store;
