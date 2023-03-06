import * as React from 'react';
import { View } from 'react-native';

import {
  NotBad3
} from '../assets/images/iconSvg';

import { CircularIcon } from '.'

const SelectedNotBad = () => (
  <View>
    <CircularIcon
      circleSize={5}
      borderColor="#ffb37c"
      backgroundColor="#ffb37c" />
    <NotBad3 />
    <CircularIcon
      style={{ alignSelf: 'flex-end' }}
      circleSize={5}
      borderColor="#ffb37c"
      backgroundColor="#ffb37c" />
  </View>
)

export default SelectedNotBad;