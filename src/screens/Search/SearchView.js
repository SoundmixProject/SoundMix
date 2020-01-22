/**
 * @format
 * @flow
 */

import React from 'react';
import { View, Text } from 'react-native';
import { type Props, ViewProps } from './types';
import useStyles from './SearchStyles';

const SearchView = (props: Props & ViewProps) => {
  const styles = useStyles();
  return (
    <View>
      <Text>Search Component</Text>
    </View>
  );
};

SearchView.defaultProps = {};

export default SearchView;
