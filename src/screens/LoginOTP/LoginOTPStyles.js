/**
 * @format
 * @flow
 */

import { StyleSheet } from 'react-native';
import { themeColor } from '../../common/themeColor';

const useStyles = () => {
  return StyleSheet.create({
    root: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: themeColor.mainColor,
    },
    textInput: {
      textAlign: 'center',
      backgroundColor: themeColor.white,
      width: '80%',
      borderRadius: 20,
      fontSize: 16,
      marginTop: 48,
      marginBottom: 16,
    },
    title: {
      color: themeColor.white,
      fontWeight: 'bold',
      fontSize: 30,
    },
    resendOTP: {
      color: themeColor.white,
      fontSize: 16,
    },
  });
};

export default useStyles;
