import * as React from 'react';
import { View } from 'react-native';

export const CircleIcon = ({circleSize, borderWidth = 2, borderColor , backgroundColor, marginLeft, marginRight, ...props}) => (
    <View
      style={{
        width: circleSize,
        height: circleSize,
        borderRadius: .5 * circleSize,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderColor,
        borderWidth,
        backgroundColor,
        marginLeft,
        marginRight,
        top: 34,
        right: -40,
        position: 'absolute'
    }}
    >
    </View>
)