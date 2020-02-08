/**
 * @format
 * @flow
 */

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { type Props, ViewProps } from './types';
import useStyles from './ExploreStyles';

const ExploreView = (props: Props & ViewProps) => {
  const { navigation } = props;
  const styles = useStyles();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={() => navigation.navigate('Playing')}>
        <Text>Go to playing</Text>
      </TouchableOpacity>
    </View>
  );
};

ExploreView.defaultProps = {};

export default ExploreView;
