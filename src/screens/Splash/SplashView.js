/**
 * @format
 * @flow
 */

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import useStyles from './SplashStyles';

const SplashView = props => {
  const { navigation } = props;
  const styles = useStyles();

  return (
    <View style={styles.root}>
      <TouchableOpacity
        onPress={() => navigation.navigate('BottomTabNavigator')}>
        <Text>Go to home</Text>
      </TouchableOpacity>
    </View>
  );
};

SplashView.defaultProps = {};

export default SplashView;
