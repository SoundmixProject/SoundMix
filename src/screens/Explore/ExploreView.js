/**
 * @format
 * @flow
 */

import React from 'react';
import { View, Text } from 'react-native';
import { type Props, ViewProps } from './types';
import useStyles from './ExploreStyles';

const ExploreView = (props: Props & ViewProps) => {
  const styles = useStyles();
  return (
    <View>
      <Text>Explore Component</Text>
    </View>
  );
};

ExploreView.defaultProps = {};

export default ExploreView;
