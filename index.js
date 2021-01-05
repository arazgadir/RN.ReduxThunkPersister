/**
 * @format
 */
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import {Provider} from 'react-redux';
//import {myStore, mypersistor} from './MovieFinder/redux/store'

import { PersistGate } from 'redux-persist/integration/react'

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import {configureStore} from './MovieFinder/redux/store'




const {myStore, mypersistor } = configureStore();

const Main = () =>  {
return (
  <Provider store = {myStore}>
    <PersistGate loading={null} persistor={mypersistor}>
     <NavigationContainer>

      <App/>

      </NavigationContainer>
      </PersistGate>
   </Provider>
)
}
  


AppRegistry.registerComponent(appName, () => Main);
