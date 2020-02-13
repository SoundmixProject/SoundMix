/**
 * @format
 * @flow
 */

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import useStyles from './SplashStyles';

const SplashView = props => {
  const { navigation } = props;
  const { navigate } = navigation;
  const styles = useStyles();

  return (
    <View style={styles.root}>
      <TouchableOpacity onPress={() => navigate('LoginPhone')}>
        <Text>Go to home</Text>
      </TouchableOpacity>
    </View>
  );
};

SplashView.defaultProps = {};

export default SplashView;
