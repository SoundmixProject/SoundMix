/**
 * @format
 * @flow
 */

import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { type Props, ViewProps } from './types';
import useStyles from './AppScreenStyles';

const AppScreenView = (props: Props & ViewProps) => {
  const { children, contentContainerStyle } = props;
  const styles = useStyles();
  return (
    <ScrollView contentContainerStyle={[styles.root, contentContainerStyle]}>{children}</ScrollView>
  );
};

AppScreenView.defaultProps = {};

export default AppScreenView;
