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

  const _onHandlePhoneNumber = text => {
    setPhoneNumber(text);
    const splitText = text.split('');
    const getCodeArea = splitText[0] + splitText[1] + splitText[2];

    if (getCodeArea === '+84') {
      setCodeArea(true);
      if (text.length === 11) {
        setPhoneNumberLength(10);
        navigation.navigate('LoginOTP');
      }
    }
  };

  return (
    <AppScreen contentContainerStyle={styles.root}>
      <Text style={styles.title}>Đăng Nhập</Text>

      <TextInput
        placeholder="Số điện thoại"
        maxLength={11}
        keyboardType={'phone-pad'}
        value={phoneNumber}
        onChangeText={_onHandlePhoneNumber}
        style={styles.textInput}
      />

      <View>
        <Text style={styles.checkValidateStyle1}>Bắt đầu băng +84</Text>
        <Text style={styles.checkValidateStyle2}>Độ dài hợp lệ</Text>
      </View>
    </AppScreen>
  );
};

LoginPhoneView.defaultProps = {};

export default LoginPhoneView;
