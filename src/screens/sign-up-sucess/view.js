/**
 *
 * @format
 * @flow
 */

import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { type Props, ViewProps } from './typed';
import useStyles from './styles';
import AppScreen from '../../components/AppScreen';
import { themeColor } from '../../common/themeColor';

const Resource = {
  checked: require('../../../assets/icons/ic_checked.png'),
};

const SignUpSucessView = (props: Props & ViewProps) => {
  const styles = useStyles();
  return (
    <AppScreen contentContainerStyle={styles.root}>
      <Text
        style={{
          fontSize: 25,
          fontWeight: 'bold',
          color: themeColor.textColor,
          marginTop: 64,
        }}>
        Đăng ký thành công
      </Text>

      <View
        style={{
          width: 150,
          height: 150,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 75,
          backgroundColor: themeColor.mainColor,
          marginTop: 128,
        }}>
        <Image
          source={Resource.checked}
          style={{ width: 64, height: 64, tintColor: themeColor.white }}
        />
      </View>

      <TouchableOpacity onPress={() => {}} style={styles.finishButton}>
        <Text style={styles.finishButtonText}>Hoàn tất</Text>
      </TouchableOpacity>
    </AppScreen>
  );
};

SignUpSucessView.defaultProps = {};

export default SignUpSucessView;
