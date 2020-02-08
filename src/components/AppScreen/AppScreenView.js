/**
 * @format
 * @flow
 */

import React from 'react';
import { ScrollView, SafeAreaView } from 'react-native';
import { type Props, ViewProps } from './types';
import useStyles from './AppScreenStyles';

const AppScreenView = (props: Props & ViewProps) => {
  const { children, contentContainerStyle } = props;
  const styles = useStyles();
  return (
    <SafeAreaView style={styles.root}>
      <ScrollView contentContainerStyle={[styles.root, contentContainerStyle]}>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};

AppScreenView.defaultProps = {};

export default AppScreenView;
