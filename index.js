/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './app/App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => {
  if (__DEV__) {
    import('./app/config/ReactotronConfig').then(() =>
      console.log('Reactotron Configured'),
    );
  }
  return App;
});
