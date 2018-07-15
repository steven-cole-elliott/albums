/** @format */

/*
// standard code that was put in here by React Native

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

*/


// code from the lesson; pretty much just redoing what was there already
// import a library to help create a component
import React from 'react'
import { AppRegistry, View } from 'react-native'
import Header from './src/components/Header'
import { AlbumList } from './src/components/AlbumList'

// create a component
const App = () => (
  <View>
    <Header key="header" headerText="Albums" />
    <AlbumList key="albumList" />
  </View>
)

// Render it to the device
AppRegistry.registerComponent('albums', () => App)

