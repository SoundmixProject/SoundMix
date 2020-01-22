/**
 * @format
 * @flow
 */

import React from 'react';
import { View, Text } from 'react-native';
import { type Props, ViewProps } from './types';
import useStyles from './LibraryStyles';

const LibraryView = (props: Props & ViewProps) => {
  const styles = useStyles();
  return (
    <View>
      <Text>Library Component</Text>
    </View>
  );
};

LibraryView.defaultProps = {};

export default LibraryView;
