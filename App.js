/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';

import StackNavigation from './src/navigation';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';
import { ThemeProvider } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { store } from './src/redux/store';
import { updateTheme } from './src/redux/slices/portfolioSlice';
import { lightTheme, darkTheme } from './src/constants/theme';
import AuthorizationProvider from './src/provider/AuthorizationProvider';
import moment from 'moment';
// LogBox.ignoreLogs(['new NativeEventEmitter']); // Ignore log notification by message
// LogBox.ignoreAllLogs(); //Ignore all log notifications
// format to short label moment format
moment.locale('en', {
  relativeTime: {
    future: 'in %s',
    past: '%s ago',
    s: '1s',
    ss: '%ss',
    m: '1m',
    mm: '%dm',
    h: '1h',
    hh: '%dh',
    d: '1d',
    dd: '%dd',
    M: '1M',
    MM: '%dM',
    y: '1Y',
    yy: '%dY',
  },
});

const ThemedComponent = () => {
  const dispatch = useDispatch();
  const themed = useSelector(state => state.portfolios.theme);

  useEffect(() => {
    AsyncStorage.getItem('theme')
      .then(item => {
        if (item === 'light') {
          dispatch(updateTheme(lightTheme));
        } else {
          dispatch(updateTheme(darkTheme));
        }
      })
      .catch(err => {
        console.log(err);
      });
  }, [dispatch]);

  return (
    <ThemeProvider theme={themed}>
      <AuthorizationProvider>
        <StackNavigation />
      </AuthorizationProvider>
    </ThemeProvider>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <PaperProvider>
          <ThemedComponent />
        </PaperProvider>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
