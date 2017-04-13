import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

const App = () => (
  <Header headerText={'Albumns!'} />
);

AppRegistry.registerComponent('albums', () => App);
