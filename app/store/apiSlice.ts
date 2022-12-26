import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import Config from 'react-native-config';

const {API_TOKEN, API_URL} = Config;

export type CityDetailsType = {
  Key: string;
  EnglishName: string;
};

export type HeadlineType = {
  EffectiveDate: string;
  Text: string;
  Category: string;
};

export type WeatherDetailsType = {
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

export type ForecastType = {
  Headline: HeadlineType;
  one_day: WeatherDetailsType;
  next_hours: WeatherDetailsType[];
  ten_days: WeatherDetailsType[];
};

export type ApiSliceType = {
  city: CityDetailsType;
  forecast: ForecastType;
  loading: boolean;
  error: any;
};

const initialState: ApiSliceType = {
  city: {
    Key: '276594',
    EnglishName: 'Poznan',
  },
  forecast: {
    Headline: {
      EffectiveDate: '',
      Text: '',
      Category: '',
    },
    one_day: {},
  },
  loading: false,
  error: false,
};

export const getForecast = async (path: string, thunkAPI: any) => {
  try {
    const res = await fetch(
      `${API_URL}forecasts/v1/${path}?apikey=${API_TOKEN}`,
    );
    const data = await res.json();
    return data;
  } catch (err) {
    return thunkAPI.rejectWithValue({error: err});
  }
};
export const oneDayForecast = createAsyncThunk(
  'forecast/day',
  (city: string, thunkAPI) => {
    return getForecast('daily/1day/' + city, thunkAPI);
  },
);

export const tenDayForecast = createAsyncThunk(
  'forecast/hours',
  (city: string, thunkAPI) => {
    return getForecast('daily/10day/' + city, thunkAPI);
  },
);

export const nextHoursForecast = createAsyncThunk(
  'forecast/week',
  (city: string, thunkAPI) => {
    return getForecast('hourly/12hour/' + city, thunkAPI);
  },
);

const apiSlice = createSlice({
  name: 'apiSlice',
  initialState: initialState,
  reducers: {
    loading(state) {
      const toggleLoading = (prev: boolean) => state.loading === !prev;
      toggleLoading(state.loading);
    },
  },
  extraReducers: builder => {
    builder.addCase(oneDayForecast.fulfilled, (state, action) => {
      state.forecast.Headline = action.payload.Headline;
      state.forecast.one_day = action.payload.DailyForecasts[0];
    });
    builder.addCase(oneDayForecast.rejected, (state, action) => {
      state.error = action.payload;
    });
    builder.addCase(nextHoursForecast.fulfilled, (state, action) => {
      state.forecast.next_hours = action.payload;
    });
    builder.addCase(nextHoursForecast.rejected, (state, action) => {
      state.error = action.payload;
    });
    builder.addCase(tenDayForecast.fulfilled, (state, action) => {
      state.forecast.ten_days = action.payload;
    });
    builder.addCase(tenDayForecast.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

export default apiSlice.reducer;
