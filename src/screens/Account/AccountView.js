/**
 * @format
 * @flow
 */

import React from 'react';
import { View, Text } from 'react-native';
import { type Props, ViewProps } from './types';
import useStyles from './AccountStyles';

const AccountView = (props: Props & ViewProps) => {
  const styles = useStyles();
  return (
    <View>
      <Text>Account Component</Text>
    </View>
  );
};

AccountView.defaultProps = {};

export default AccountView;
