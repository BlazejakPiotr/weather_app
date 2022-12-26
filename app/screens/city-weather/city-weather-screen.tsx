import React, {FunctionComponent, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Text} from 'react-native';
import {AppDispatch, RootState} from '../../store/store';
import {
  nextHoursForecast,
  oneDayForecast,
  tenDayForecast,
} from '../../store/apiSlice';
import {Box, Heading} from 'native-base';

const CityWeatherScreen: FunctionComponent = () => {
  const apiState = useSelector((state: RootState) => state.apiSlice);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(nextHoursForecast(apiState.city.Key));
    dispatch(oneDayForecast(apiState.city.Key));
    dispatch(tenDayForecast(apiState.city.Key));
  });
  return (
    <>
      {apiState.loading && <Text>Loading</Text>}
      {apiState.error && <Text>Error</Text>}
      {!apiState.loading && !apiState.error && (
        <Box w={'100%'} px={3} flex={1}>
          <Heading textAlign={'center'}>{apiState.city.EnglishName}</Heading>
          {apiState.forecast.one_day?.Date}
          {/* {apiState.forecast.next_hours[0].Temperature.Maximum} */}
        </Box>
      )}
    </>
  );
};

export default CityWeatherScreen;
