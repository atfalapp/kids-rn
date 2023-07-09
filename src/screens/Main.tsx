/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import * as Colors from '../styles/Colors';
import {Platform, View} from 'react-native';

import Favorites from './Favorites';
import Statistics from './Statistics';
import Stories from './Stories';

import {Text} from '../component';

const Tab = createBottomTabNavigator();

import StoriesOn from '../assets/images/iconSvg/StoriesOn.svg';
import StoriesOff from '../assets/images/iconSvg/StoriesOff.svg';
import FavoritesOn from '../assets/images/iconSvg/FavoritesOn.svg';
import FavoritesOff from '../assets/images/iconSvg/FavoritesOff.svg';
import StatisticsOn from '../assets/images/iconSvg/StatisticsOn.svg';
import StatisticsOff from '../assets/images/iconSvg/StatisticsOff.svg';

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
                fontWeight: 'normal',
                marginBottom: 20,
              }}>
              {name}
            </Text>
          );
        },
        tabBarIcon: ({focused}) => {
          let Icon: React.ReactNode;

          if (route.name === 'Stories') {
            Icon = focused ? <StoriesOn /> : <StoriesOff />;
          } else if (route.name === 'Favorites') {
            Icon = focused ? <FavoritesOn /> : <FavoritesOff />;
          } else if (route.name === 'Statistics') {
            Icon = focused ? <StatisticsOn /> : <StatisticsOff />;
          }

          return Icon;
        },
      })}>
      <Tab.Screen name="Stories" component={Stories} />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="Statistics" component={Statistics} />
    </Tab.Navigator>
  );
}
