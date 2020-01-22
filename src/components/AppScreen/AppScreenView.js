/**
 * @format
 * @flow
 */

import React from 'react';
import { View, Text } from 'react-native';
import { type Props, ViewProps } from './types';
import useStyles from './AppScreenStyles';

const AppScreenView = (props: Props & ViewProps) => {
  const styles = useStyles();
  return (
    <View>
      <Text>AppScreen Component</Text>
    </View>
  );
};

AppScreenView.defaultProps = {};

export default AppScreenView;
