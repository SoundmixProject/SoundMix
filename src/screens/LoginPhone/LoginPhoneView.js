/**
 * @format
 * @flow
 */

import React, { useState } from 'react';
import { TextInput, Text, View } from 'react-native';
import { type Props, ViewProps } from './types';
import useStyles from './LoginPhoneStyles';
import AppScreen from '../../components/AppScreen';

const LoginPhoneView = (props: Props & ViewProps) => {
  const { navigation } = props;

  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [isCodeArea, setCodeArea] = useState<string>(false);
  const [phoneNumberLength, setPhoneNumberLength] = useState<number>(0);

  const styles = useStyles(isCodeArea, phoneNumberLength);

  const _onHandlePhoneNumber = phoneNumberInput => {
    setPhoneNumber(phoneNumberInput);
    const formatPhoneNumber = phoneNumberInput.replace('0', '+84').trim();

    if (phoneNumberInput.length === 10) {
      navigation.navigate('LoginOTP', { phoneNumberInput });
    }
  };

  return (
    <AppScreen contentContainerStyle={styles.root}>
      <Text style={styles.title}>Đăng Nhập</Text>

      <TextInput
        placeholder="Số điện thoại"
        maxLength={10}
        keyboardType={'phone-pad'}
        value={phoneNumber}
        onChangeText={_onHandlePhoneNumber}
        style={styles.textInput}
      />

      <View>
        <Text style={styles.checkValidateStyle2}>Số điện thoại hợp lệ</Text>
      </View>
    </AppScreen>
  );
};

LoginPhoneView.defaultProps = {};

export default LoginPhoneView;
