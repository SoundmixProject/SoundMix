/**
 * @format
 * @flow
 */

import React from 'react';
import { View, Text } from 'react-native';
import { type Props, ViewProps } from './types';
import useStyles from './LoginOTPStyles';

const LoginOTPView = (props: Props & ViewProps) => {
  const styles = useStyles();
  return (
    <View style={styles.root}>
      <Text>LoginOTP Component</Text>
    </View>
  );
};

LoginOTPView.defaultProps = {};

export default LoginOTPView;
