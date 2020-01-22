/**
 * @format
 * @flow
 */

import React from 'react';
import { type Props } from './types';
import PlayingView from './PlayingView';

const PlayingContainer = (props: Props) => {
  return <PlayingView {...props} />;
};

export default PlayingContainer;
