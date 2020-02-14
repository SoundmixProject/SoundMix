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
      alignItems: 'center',
      paddingHorizontal: 16,
      paddingTop: 64,
    },
    addAvatarWrapper: {
      width: 120,
      aspectRatio: 1,
      borderWidth: 1,
      borderColor: themeColor.mainColor,
      borderRadius: 60,
      borderStyle: 'dashed',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 16,
      marginTop: 32,
    },
    addAvatarIcon: {
      tintColor: themeColor.mainColor,
    },
    addAvatarText: {
      textAlign: 'center',
      marginTop: 8,
      color: themeColor.textColor,
    },
    finishButton: {
      backgroundColor: themeColor.mainColor,
      width: 253,
      height: 45,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 100,
    },
    finishButtonText: {
      color: themeColor.white,
      fontWeight: 'bold',
      fontSize: 16,
    },
    fullNameWrapper: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      marginTop: 32,
    },
    fullNameInput: {
      textAlign: 'center',
      borderWidth: 1,
      height: 35,
      borderRadius: 20,
      borderColor: '#707070',
      width: '48%',
    },
    dateOfBirthWrapper: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      marginTop: 32,
    },
    dateOfBirthInput: {
      width: '30%',
      borderWidth: 1,
      height: 35,
      borderRadius: 20,
      borderColor: '#707070',
      justifyContent: 'center',
      alignItems: 'center',
    },
    genderWrapper: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      marginTop: 32,
    },
    genderChosen: {
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      height: 35,
      borderRadius: 20,
      borderColor: '#707070',
      width: '48%',
    },
    genderActive: {
      backgroundColor: themeColor.mainColor,
      justifyContent: 'center',
      alignItems: 'center',
      height: 35,
      borderRadius: 20,
      width: '48%',
    },
    genderContent: {
      color: '#707070',
    },
    genderContentActive: {
      color: themeColor.white,
    },
    emailWrapper: {
      width: '100%',
      marginTop: 32,
    },
    emailInput: {
      textAlign: 'center',
      borderWidth: 1,
      borderColor: '#707070',
      borderRadius: 20,
      height: 35,
    },
    title: {
      fontSize: 25,
      fontWeight: 'bold',
      color: '#707070',
    },
  });
};

export default useStyles;
