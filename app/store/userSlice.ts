import {createSlice} from '@reduxjs/toolkit';
import {CityDetailsType} from './apiSlice';

export type UserSliceType = {
  cities: CityDetailsType[];
  loading: boolean;
  error: boolean;
};

const initialState: UserSliceType = {
  cities: [
    {
      Key: '276594',
      EnglishName: 'Poznan',
    },
  ],
  loading: false,
  error: false,
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState: initialState,
  reducers: {},
});

export default userSlice.reducer;
