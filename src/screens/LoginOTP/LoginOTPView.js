/**
 * @format
 * @flow
 */

import React, { useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import { type Props, ViewProps } from './types';
import useStyles from './LoginOTPStyles';
import AppScreen from '../../components/AppScreen';
import { themeColor } from '../../common/themeColor';

const LoginOTPView = (props: Props & ViewProps) => {
  const { navigation, route } = props;
  const { navigate } = navigation;
  const styles = useStyles();

  const { phoneNumberInput } = route.params;

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
      <View>
        <Text
          style={{ marginVertical: 16, color: themeColor.white, fontSize: 16 }}>
          Mã OTP đã được gửi về số điện thoại
        </Text>
        <Text
          style={{
            fontWeight: 'bold',
            textAlign: 'center',
            color: themeColor.white,
            fontSize: 20,
          }}>
          {phoneNumberInput}
        </Text>
      </View>

      <TextInput
        placeholder="Nhập mã OTP"
        maxLength={6}
        keyboardType={'phone-pad'}
        value={otpValue}
        onChangeText={_onHandleOTP}
        style={styles.textInput}
      />

      <ActivityIndicator size={'small'} color={themeColor.white} />

      <TouchableOpacity onPress={() => {}}>
        <Text style={styles.resendOTP}>Lấy lại mã OTP</Text>
      </TouchableOpacity>
    </AppScreen>
  );
};

LoginOTPView.defaultProps = {};

export default LoginOTPView;
