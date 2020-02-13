/**
 *
 * @flow
 * @format
 */

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from '../screens/Splash';
import LoginPhone from '../screens/LoginPhone';
import LoginOTP from '../screens/LoginOTP';
import SignUp from '../screens/SignUp';

const Stack = createStackNavigator();

const LoginStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LoginPhone"
        component={LoginPhone}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LoginOTP"
        component={LoginOTP}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default LoginStackNavigator;
