/**
 * @format
 * @flow
 */

import React from 'react';
import { Image, ActivityIndicator } from 'react-native';
import useStyles from './SplashStyles';
import { themeColor } from '../../common/themeColor';
import AppScreen from '../../components/AppScreen';

const Resource = {
  logo: require('../../../assets/icons/logo.png'),
};

const SplashView = props => {
  const styles = useStyles();

  return (
    <AppScreen contentContainerStyle={styles.root}>
      <Image source={Resource.logo} style={{ tintColor: themeColor.white }} />
      <ActivityIndicator
        size="large"
        color={themeColor.white}
        style={{ position: 'absolute', bottom: '12%' }}
      />
    </AppScreen>
  );
};

SplashView.defaultProps = {};

export default SplashView;
