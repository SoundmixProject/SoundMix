/**
 * @format
 * @flow
 */

import React from 'react';
import ArtistContainer from './ArtistContainer';
import { type Props } from './types';

const Artist = (props: Props) => {
  return <ArtistContainer {...props} />;
};

export default Artist;
