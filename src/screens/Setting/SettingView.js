/**
 * @format
 * @flow
 */

import React from 'react';
import { View, Text } from 'react-native';
import { type Props, ViewProps } from './types';
import useStyles from './SettingStyles';

const SettingView = (props: Props & ViewProps) => {
  const styles = useStyles();
  return (
    <View>
      <Text>Setting Component</Text>
    </View>
  );
};

SettingView.defaultProps = {};

export default SettingView;
