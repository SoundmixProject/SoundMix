/**
 * @format
 * @flow
 */

import React from 'react';
import { View, Text } from 'react-native';
import { type Props, ViewProps } from './types';
import useStyles from './ArtistStyles';

const ArtistView = (props: Props & ViewProps) => {
  const styles = useStyles();
  return (
    <View style={styles.root}>
      <Text>Artist Component</Text>
    </View>
  );
};

ArtistView.defaultProps = {};

export default ArtistView;
