import * as React from 'react';
import { View } from 'react-native';
import Text from './Text';
import * as Colors from '../styles/Colors';

const StatisticsSquare = ({ style, storiesNum, squareSize, backgroundColor, ...props }) => (
  <View>
    <View
      style={[style, {
        width: squareSize,
        height: squareSize,
        display: "flex",
        borderRadius: 35,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor,
        shadowColor: 'rgba(203, 231, 255, 0.3)',
        shadowOffset: {
          width: 0,
          height: 1
        },
        shadowRadius: 1,
        shadowOpacity: 0.5
      }]}
    >
    </View>

    <View style={{ bottom: 120, marginLeft: 20 }}>
      <Text GulfBold size={12} color={Colors.white}
        style={{ width: 100 }}>عدد القصص المسموعة لليوم</Text>
      <Text SFProRoundedSemiBold size={20} color={"#afd895"}>{storiesNum}</Text>
      <View style={{ width: "80%", alignItems: 'flex-start', marginTop: -10 }}>
        <Text GulfText size={8} color={Colors.white} style={{ opacity: 0.7 }}>الحد المقترح  3-2  قصة </Text>
      </View>
    </View>
  </View>
)

export default StatisticsSquare;                