/**
 * @format
 * @flow
 */

import React from 'react';
import { View, Text } from 'react-native';
import { type Props, ViewProps } from './types';
import useStyles from './SignUpStyles';

const SignUpView = (props: Props & ViewProps) => {
  const styles = useStyles();
  return (
    <View style={styles.root}>
      <Text>SignUp Component</Text>
    </View>
  );
};

SignUpView.defaultProps = {};

export default SignUpView;
