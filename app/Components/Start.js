import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  
} from 'react-native';
import Login from './Auth';
import SignUp2 from './SignUp2';
import { StackNavigator } from 'react-navigation';

const NavigationApp = StackNavigator({
  Home:{screen : Login},
  Profile:{screen : SignUp2},
});
export default class App extends Component {
  render()
  {
    return <NavigationApp />;
  }
}
