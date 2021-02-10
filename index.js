/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {NavigationContainer} from '@react-navigation/native';
import {createSwitchNavigator} from '@react-navigation/compat';
import {Provider} from 'react-redux';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import store from './src/Store/Store/store';
//Screens
import Main from './src/Screens/Main';
import Detail from './src/Screens/Detail';

const SwitchRouteConfig = {
  Main: Main,
  Detail: Detail,
};

const SwitchConfig = {
  initialRouteName: 'Main',
};

const Navigator = createSwitchNavigator(SwitchRouteConfig, SwitchConfig);

const RNRedux = () => (
  <Provider store={store}>
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1}}>
        <NavigationContainer>
          <Navigator />
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  </Provider>
);
AppRegistry.registerComponent(appName, () => RNRedux);
