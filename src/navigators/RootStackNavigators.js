/**
 * @flow
 * @format
 */

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from '../screens/Splash';
import BottomTabNavigator from './BottomTabNavigator';
import Playing from '../screens/Playing';

const Stack = createStackNavigator();

const RootStackNavigators = () => {
  return (
    <Stack.Navigator mode="modal">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BottomTabNavigator"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Playing"
        component={Playing}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default RootStackNavigators;
