/**
 * @format
 * @flow
 */

import React from 'react';
import { type Props } from './types';
import SplashView from './SplashView';

const SplashContainer = (props: Props) => {
  return <SplashView {...props} test={1} />;
};

export default SplashContainer;
