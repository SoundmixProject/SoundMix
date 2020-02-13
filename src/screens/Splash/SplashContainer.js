/**
 * @format
 * @flow
 */

import React, { useEffect } from 'react';
import { type Props } from './types';
import SplashView from './SplashView';

const SplashContainer = (props: Props) => {
  const { navigation } = props;

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('LoginPhone');
    }, 2000);
  });

  return <SplashView />;
};

export default SplashContainer;
