/**
 * @format
 * @flow
 */

import React from 'react';
import { View, Text } from 'react-native';
import { type Props, ViewProps } from './types';
import useStyles from './TrendingStyles';

const TrendingView = (props: Props & ViewProps) => {
  const styles = useStyles();
  return (
    <View>
      <Text>Trending Component</Text>
    </View>
  );
};

TrendingView.defaultProps = {};

export default TrendingView;
