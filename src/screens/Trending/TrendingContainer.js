/**
 * @format
 * @flow
 */

import React from 'react';
import { type Props } from './types';
import TrendingView from './TrendingView';

const TrendingContainer = (props: Props) => {
  return <TrendingView {...props} />;
};

export default TrendingContainer;
