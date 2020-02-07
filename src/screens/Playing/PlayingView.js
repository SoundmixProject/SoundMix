/**
 * @format
 * @flow
 */

import React from 'react';
import { View, Text } from 'react-native';
import { type Props, ViewProps } from './types';
import useStyles from './PlayingStyles';

const PlayingView = (props: Props & ViewProps) => {
  const styles = useStyles();
  return (
    <View>
      <Text>Playing Component</Text>
    </View>
  );
};

PlayingView.defaultProps = {};

export default PlayingView;
