/**
 * @format
 * @flow
 */

import React from 'react';
import { type Props } from './types';
import LibraryView from './LibraryView';

const LibraryContainer = (props: Props) => {
  return <LibraryView {...props} />;
};

export default LibraryContainer;
