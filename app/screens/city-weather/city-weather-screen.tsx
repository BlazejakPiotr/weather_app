import React, {FunctionComponent, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Text} from 'react-native';
import {AppDispatch, RootState} from '../../store/store';
import {getForecast} from '../../store/apiSlice';

const CityWeatherScreen: FunctionComponent = () => {
  const apiState = useSelector((state: RootState) => state.apiSlice);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getForecast('276594'));
  }, [dispatch]);
  return (
    <>
      {apiState.loading && <Text>Loading</Text>}
      {apiState.error && <Text>Error</Text>}
      {!apiState.loading && !apiState.error && <Text>Weatherr</Text>}
    </>
  );
};

export default CityWeatherScreen;
