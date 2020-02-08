/**
 * @format
 * @flow
 */

import React from 'react';
import { type Props } from './types';
import ArtistView from './ArtistView';

const ArtistContainer = (props: Props) => {
  return <ArtistView {...props} />;
};

export default ArtistContainer;
