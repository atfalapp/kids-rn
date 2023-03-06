import * as React from 'react';
import { View } from 'react-native';

import {
  NotGood2, NotGoodEffects
} from '../assets/images/iconSvg';

const SelectedNotGood = () => (
  <View style={{ bottom: -5 }}>
    <NotGood2 />
    <NotGoodEffects />
  </View>
)

export default SelectedNotGood;