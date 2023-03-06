/* eslint-disable react/prop-types */
import React from 'react';
import {View, StatusBar} from 'react-native';
// import styles from './styles/GeneralStatusBarColorStyles';
import {STATUSBAR_HEIGHT} from '../utils/constants';

const GeneralStatusBarColor = ({backgroundColor, ...props}) => (
  <View style={{backgroundColor, height: STATUSBAR_HEIGHT}}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);
export default GeneralStatusBarColor;
