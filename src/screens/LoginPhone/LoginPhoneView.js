/**
 * @format
 * @flow
 */

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { type Props, ViewProps } from './types';
import useStyles from './LoginPhoneStyles';

const LoginPhoneView = (props: Props & ViewProps) => {
  const { navigation } = props;
  const { navigate } = navigation;
  const styles = useStyles();
  return (
    <View style={styles.root}>
      <TouchableOpacity onPress={() => navigate('LoginOTP')}>
        <Text>Go to LoginOTP</Text>
      </TouchableOpacity>
    </View>
  );
};

LoginPhoneView.defaultProps = {};

export default LoginPhoneView;
