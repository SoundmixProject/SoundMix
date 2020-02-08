/**
 * @format
 * @flow
 */

import React from 'react';
import { type Props } from './types';
import AlbumsView from './AlbumsView';

const AlbumsContainer = (props: Props) => {
  return <AlbumsView {...props} />;
};

export default AlbumsContainer;
