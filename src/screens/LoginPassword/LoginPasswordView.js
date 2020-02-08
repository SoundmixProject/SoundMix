/**
 * @format
 * @flow
 */

import React from 'react';
import { View, Text } from 'react-native';
import { type Props, ViewProps } from './types';
import useStyles from './LoginPasswordStyles';

const LoginPasswordView = (props: Props & ViewProps) => {
  const styles = useStyles();
  return (
    <View style={styles.root}>
      <Text>LoginPassword Component</Text>
    </View>
  );
};

LoginPasswordView.defaultProps = {};

export default LoginPasswordView;
