/**
 * @format
 * @flow
 */

import React, { useState } from 'react';
import { Text, TouchableOpacity, TextInput } from 'react-native';
import { type Props, ViewProps } from './types';
import useStyles from './LoginOTPStyles';
import AppScreen from '../../components/AppScreen';

const LoginOTPView = (props: Props & ViewProps) => {
  const { navigation } = props;
  const { navigate } = navigation;
  const styles = useStyles();

  const [otpValue, setOTPValue] = useState('');

  const _onHandleOTP = text => {
    setOTPValue(text);

    if (text === '123456') {
      navigate('SignUp');
    }
    if (text === '123455') {
      navigate('BottomTabNavigator');
    }
  };

  return (
    <AppScreen contentContainerStyle={styles.root}>
      <Text style={styles.title}>Đăng Nhập</Text>

      <TextInput
        placeholder="Nhập mã OTP"
        maxLength={6}
        keyboardType={'phone-pad'}
        value={otpValue}
        onChangeText={_onHandleOTP}
        style={styles.textInput}
      />

      <TouchableOpacity onPress={() => {}}>
        <Text style={styles.resendOTP}>Lấy lại mã OTP</Text>
      </TouchableOpacity>
    </AppScreen>
  );
};

LoginOTPView.defaultProps = {};

export default LoginOTPView;
