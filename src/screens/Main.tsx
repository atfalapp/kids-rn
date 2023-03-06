/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import * as Colors from '../styles/Colors';
import {Platform} from 'react-native';

import Favorites from './Favorites';
import Statistics from './Statistics';
import Stories from './Stories';

import {Text} from '../component';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Tab.Navigator
      initialRouteName="Stories"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor: Colors.bottomMenu,
          height: Platform.OS === 'ios' ? 116 : 90,
          position: 'absolute',
          elevation: 0,
          shadowOffset: {
            width: 0,
            height: 0, // for iOS
          },
          borderTopWidth: 0,
        },
        tabBarLabel: ({focused}) => {
          let name = '';
          if (route.name === 'Statistics') {
            name = 'الملخّص';
          } else if (route.name === 'Favorites') {
            name = 'المفضّلة';
          } else if (route.name === 'Stories') {
            name = 'القصص';
          }
          return (
            <Text
              GulfSemiBold
              color={Colors.white}
              size={15}
              style={{
                fontWeight: focused ? 'bold' : 'normal',
                marginBottom: 20,
              }}>
              {name}
            </Text>
          );
        },
        tabBarIcon: ({focused}) => {
          let icon: string;

          if (route.name === 'Stories') {
            icon = focused
              ? require('../assets/images/iconSvg/StoriesOn.svg')
              : require('../assets/images/iconSvg/StoriesOff.svg');
          } else if (route.name === 'Favorites') {
            icon = focused
              ? require('../assets/images/iconSvg/FavoritesOn.svg')
              : require('../assets/images/iconSvg/FavoritesOff.svg');
          } else if (route.name === 'Statistics') {
            icon = focused
              ? require('../assets/images/iconSvg/StatisticsOn.svg')
              : require('../assets/images/iconSvg/StatisticsOff.svg');
          }

          return icon;
        },
      })}>
      <Tab.Screen name="Stories" component={Stories} />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="Statistics" component={Statistics} />
    </Tab.Navigator>
  );
}
