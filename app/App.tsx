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
import {initialWindowMetrics} from 'react-native-safe-area-context';

import CityWeatherScreen from './screens/city-weather/city-weather-screen';
import {NativeBaseProvider, extendTheme} from 'native-base';

const theme = extendTheme({
  colors: {
    primary: {
      50: '#e7efff',
      100: '#c1cef3',
      200: '#99ade5',
      300: '#728cda',
      400: '#4b6bce',
      500: '#253f8d',
      600: '#253f8d',
      700: '#1a2d66',
      800: '#0d1b3f',
      900: '#01091b',
    },
    trueGray: {
      700: '#01091B',
    },
    muted: {
      700: '#01091B',
    },
    singletons: {
      black: '#252525',
    },
    trueGrey: {
      500: '#767676',
    },
  },
  fontConfig: {
    Roboto: {
      100: {
        normal: 'Roboto-Light',
        italic: 'Roboto-LightItalic',
      },
      200: {
        normal: 'Roboto-Light',
        italic: 'Roboto-LightItalic',
      },
      300: {
        normal: 'Roboto-Light',
        italic: 'Roboto-LightItalic',
      },
      400: {
        normal: 'Roboto-Regular',
        italic: 'Roboto-Italic',
      },
      500: {
        normal: 'Roboto-Medium',
      },
      600: {
        normal: 'Roboto-Medium',
        italic: 'Roboto-MediumItalic',
      },
      700: {
        normal: 'Roboto-Bold',
      },
      800: {
        normal: 'Roboto-Bold',
        italic: 'Roboto-BoldItalic',
      },
      900: {
        normal: 'Roboto-Bold',
        italic: 'Roboto-BoldItalic',
      },
    },
  },
  fonts: {
    heading: 'Roboto',
    body: 'Roboto',
    mono: 'Roboto',
  },
  config: {
    useSystemColorMode: false,
  },
  components: {
    Input: {
      defaultProps: {
        size: 'lg',
        rounded: 'lg',
        pl: '4',
        placeholderTextColor: '#979797',
      },
      baseStyle: {
        borderColor: '#979797',
        fontWeight: '300',
        borderRadius: 8,
      },
    },
    Button: {
      defaultProps: {
        _text: {fontWeight: '400', letterSpacing: '1px'},
      },
    },
    Select: {
      defaultProps: {
        borderRadius: '8',
      },
    },
  },
});

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />

      <ReduxProvider store={store}>
        <NativeBaseProvider
          initialWindowMetrics={initialWindowMetrics}
          theme={theme}>
          <CityWeatherScreen />
        </NativeBaseProvider>
      </ReduxProvider>
    </>
  );
};

export default App;
