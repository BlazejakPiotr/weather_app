/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Provider as ReduxProvider} from 'react-redux';
import store from './store/store';
import {SafeAreaView, ScrollView, StatusBar, View} from 'react-native';

import CityWeatherScreen from './screens/city-weather/city-weather-screen';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <ReduxProvider store={store}>
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            <View>
              <CityWeatherScreen />
            </View>
          </ScrollView>
        </ReduxProvider>
      </SafeAreaView>
    </>
  );
};

export default App;
