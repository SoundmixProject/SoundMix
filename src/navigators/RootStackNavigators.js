/**
 * @flow
 * @format
 */

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigator from './BottomTabNavigator';
import Playing from '../screens/Playing';
import LoginStackNavigator from './LoginStackNavigator';

const Stack = createStackNavigator();

const RootStackNavigators = () => {
  return (
    <Stack.Navigator mode="modal">
      <Stack.Screen
        name="LoginStackNavigator"
        component={LoginStackNavigator}
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
