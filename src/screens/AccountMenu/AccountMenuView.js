/**
 * @format
 * @flow
 */

import React from 'react';
import { View, Text } from 'react-native';
import { type Props, ViewProps } from './types';
import useStyles from './AccountMenuStyles';

const AccountMenuView = (props: Props & ViewProps) => {
  const styles = useStyles();
  return (
    <View style={styles.root}>
      <Text>AccountMenu Component</Text>
    </View>
  );
};

AccountMenuView.defaultProps = {};

export default AccountMenuView;
