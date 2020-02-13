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
  });
};

export default useStyles;
