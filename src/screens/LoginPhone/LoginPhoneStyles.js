/**
 * @format
 * @flow
 */

import { StyleSheet } from 'react-native';
import { themeColor } from '../../common/themeColor';

const useStyles = (isCodeArea, phoneNumberLength) => {
  return StyleSheet.create({
    root: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: themeColor.mainColor,
    },
    checkValidateStyle1: {
      fontSize: 16,
      color: themeColor.white,
      textDecorationLine: isCodeArea ? 'line-through' : null,
      opacity: isCodeArea ? 0.5 : 1,
      textAlign: 'center',
    },
    checkValidateStyle2: {
      fontSize: 16,
      color: themeColor.white,
      textDecorationLine: phoneNumberLength === 10 ? 'line-through' : null,
      opacity: phoneNumberLength ? 0.5 : 1,
      textAlign: 'center',
    },
    textInput: {
      textAlign: 'center',
      backgroundColor: themeColor.white,
      width: '80%',
      borderRadius: 20,
      fontSize: 16,
      marginVertical: 48,
    },
    title: {
      color: themeColor.white,
      fontWeight: 'bold',
      fontSize: 30,
    },
  });
};

export default useStyles;
