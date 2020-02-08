/**
 * @format
 * @flow
 */

import React from 'react';
import { View, Text } from 'react-native';
import { type Props, ViewProps } from './types';
import useStyles from './AlbumsStyles';

const AlbumsView = (props: Props & ViewProps) => {
  const styles = useStyles();
  return (
    <View style={styles.root}>
      <Text>Albums Component</Text>
    </View>
  );
};

AlbumsView.defaultProps = {};

export default AlbumsView;
