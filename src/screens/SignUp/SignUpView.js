/**
 * @format
 * @flow
 */

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { type Props, ViewProps } from './types';
import useStyles from './SignUpStyles';

const SignUpView = (props: Props & ViewProps) => {
  const { navigation } = props;
  const { navigate } = navigation;
  const styles = useStyles();
  return (
    <View style={styles.root}>
      <TouchableOpacity onPress={() => navigate('BottomTabNavigator')}>
        <Text>Go to LoginOTP</Text>
      </TouchableOpacity>
    </View>
  );
};

SignUpView.defaultProps = {};

export default SignUpView;
