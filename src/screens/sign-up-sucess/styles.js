/**
 *
 * @format
 * @flow
 */

import { StyleSheet } from 'react-native';
import { themeColor } from '../../common/themeColor';

const useStyles = () => {
  return StyleSheet.create({
    root: {
      flex: 1,
      alignItems: 'center',
    },
    finishButton: {
      backgroundColor: themeColor.mainColor,
      width: 253,
      height: 45,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 100,
      position: 'absolute',
      bottom: '10%',
    },
    finishButtonText: {
      color: themeColor.white,
      fontWeight: 'bold',
      fontSize: 16,
    },
  });
};

export default useStyles;
