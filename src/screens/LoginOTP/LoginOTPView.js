/**
 * @format
 * @flow
 */

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { type Props, ViewProps } from './types';
import useStyles from './LoginOTPStyles';

const LoginOTPView = (props: Props & ViewProps) => {
  const { navigation } = props;
  const { navigate } = navigation;
  const styles = useStyles();
  return (
    <View style={styles.root}>
      <TouchableOpacity onPress={() => navigate('SignUp')}>
        <Text>Go to SignUp</Text>
      </TouchableOpacity>
    </View>
  );
};

LoginOTPView.defaultProps = {};

export default LoginOTPView;
