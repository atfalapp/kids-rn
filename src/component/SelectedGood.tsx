import * as React from 'react';
import { View } from 'react-native';

import {
  Good1, GoodEffect
} from '../assets/images/iconSvg';

const SelectedGood = () => (
  <View style={{ bottom: 8.8, left: 4 }}>
    <GoodEffect />
    <Good1 />
  </View>
)

export default SelectedGood;