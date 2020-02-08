/**
 * @format
 * @flow
 */

import { StyleSheet } from 'react-native';

const useStyles = () => {
  return StyleSheet.create({
    root: {
      flex: 1,
    },
    toggleButton: {
      width: 70,
      aspectRatio: 1,
      backgroundColor: '#FF2D55',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 35,
    },
    toggleIcon: {
      tintColor: '#FFF',
      width: 50,
      height: 50,
    },
    headerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: 50,
      paddingHorizontal: 16,
    },
    headerTitle: {
      textTransform: 'uppercase',
      fontWeight: 'bold',
      fontSize: 16,
      color: '#707070',
    },
    thumbnailWrapper: {
      alignItems: 'center',
      marginTop: 32,
    },
    thumbnail: {
      width: 315,
      height: 315,
      borderRadius: 20,
    },
    trackName: {
      fontSize: 22,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    artist: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#707070',
      textAlign: 'center',
    },
    trackInfo: {
      alignItems: 'center',
      marginTop: 16,
    },
    sliderStyle: {
      width: 315,
      alignSelf: 'center',
      marginTop: 16,
    },
    controlWrapper: {
      justifyContent: 'space-evenly',
      flexDirection: 'row',
      marginTop: 16,
    },
    moveButton: {
      width: 70,
      aspectRatio: 1,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 35,
    },
    moveIcon: {
      tintColor: '#000',
      width: 50,
      height: 50,
    },
    time: {
      width: 280,
      alignSelf: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    timeText: {
      fontWeight: 'bold',
      color: '#FF2D55',
      fontSize: 16,
    },
  });
};

export default useStyles;
