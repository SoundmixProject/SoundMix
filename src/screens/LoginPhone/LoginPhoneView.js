/**
 * @format
 * @flow
 */

import React from 'react';
import { View, Text } from 'react-native';
import { type Props, ViewProps } from './types';
import useStyles from './LoginPhoneStyles';

const LoginPhoneView = (props: Props & ViewProps) => {
  const styles = useStyles();
  return (
    <View style={styles.root}>
      <Text>LoginPhone Component</Text>
    </View>
  );
};

LoginPhoneView.defaultProps = {};

export default LoginPhoneView;
