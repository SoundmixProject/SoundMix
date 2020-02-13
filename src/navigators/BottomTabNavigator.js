/**
 * @flow
 * @format
 */

import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Explore from '../screens/Explore';
import Trending from '../screens/Trending';
import Search from '../screens/Search';
import Account from '../screens/Account';
import Library from '../screens/Library';
import { themeColor } from '../common/themeColor';

const Tab = createBottomTabNavigator();

const R = {
  explore: require('../../assets/icons/explore.png'),
  trending: require('../../assets/icons/trending.png'),
  search: require('../../assets/icons/search.png'),
  library: require('../../assets/icons/library.png'),
  setting: require('../../assets/icons/setting.png'),
};

const BottomTabNavigator = () => {
  const tabBarOptions = {
    activeTintColor: themeColor.mainColor,
    inactiveTintColor: themeColor.inactiveColor,
    labelStyle: { textTransform: 'uppercase', fontWeight: 'bold' },
  };

  const tabBarIcon = (props, routeName) => {
    const { color, size } = props;

    let icon = '';

    switch (routeName) {
      case 'Explore':
        icon = R.explore;
        break;
      case 'Trending':
        icon = R.trending;
        break;
      case 'Search':
        icon = R.search;
        break;
      case 'Library':
        icon = R.library;
        break;
      case 'Account':
        icon = R.setting;
        break;
    }

    return <Image source={icon} size={size} style={{ tintColor: color }} />;
  };

  const screenOptions = ({ route }) => {
    const { name } = route;

    return {
      tabBarIcon: props => tabBarIcon(props, name),
    };
  };

  return (
    <Tab.Navigator tabBarOptions={tabBarOptions} screenOptions={screenOptions}>
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Trending" component={Trending} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Library" component={Library} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
