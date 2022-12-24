/* eslint-disable prettier/prettier */
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import Config from 'react-native-config';

const {API_TOKEN, API_URL} = Config;

export type CityDetailsType = {
  Key: string;
  EnglishName: string;
};

export type DailyForecastType = {
  Date: string;
  Temperature: {
    Minimum: {
      Value: number;
      Unit: string;
    };
    Maximum: {
      Value: number;
      Unit: string;
    };
  };
  Day: {
    Icon: number;
    IconPhrase: string;
    HasPrecipitation: boolean;
    PrecipitationType: string;
    PrecipitationIntensity: string;
  };
  Night: {
    Icon: number;
    IconPhrase: string;
    HasPrecipitation: boolean;
    PrecipitationType: string;
    PrecipitationIntensity: string;
  };
};

export type DataForecastType = {
  Key: string;
  EnglishName: string;
  Forecast: {
    Headline: {
      Text: string;
      Category: string;
    };
    DailyForecasts: DailyForecastType[];
  };
};

export type ApiSliceType = {
  data: DataForecastType[];
  loading: boolean;
  error: any;
};

const initialState: ApiSliceType = {
  data: [],
  loading: false,
  error: false,
};

export const getForecast = createAsyncThunk(
  'forecast/daily',
  async (city: string, thunkAPI) => {
    try {
      const res = await fetch(
        `${API_URL}forecasts/v1/daily/1day/${city}?apikey=${API_TOKEN}`,
      );
      const data = await res.json();
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue({error: err});
    }
  },
);

const apiSlice = createSlice({
  name: 'apiSlice',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getForecast.pending, state => {
      state.loading = true;
    });
    builder.addCase(getForecast.fulfilled, (state, action) => {
      state.loading = false;
      state.data.push(action.payload);
    });
    builder.addCase(getForecast.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default apiSlice.reducer;
