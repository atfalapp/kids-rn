import * as React from 'react';
import { View } from 'react-native';
import * as Colors from '../styles/Colors';

const StatisticsTriangle = ({ style, backgroundColor, ...props }) => (

    <View style={{
        position: 'absolute',
    }}>
        <View style={{
            top: 2,
            left: 95,
            height: 200,
            width: 65,
            backgroundColor,
            opacity: 0.3,
            borderRadius: 20,
            transform: [{ rotate: '-29deg' }]
        }}>
        </View>
        <View style={{
            left: 180,
            top: -200,
            height: 200,
            width: 70,
            backgroundColor,
            opacity: 0.3,
            borderRadius: 20,
            transform: [{ rotate: '25deg' }]

            // transform:rotate(60deg);
        }}>
        </View>
        <View style={{
            left: 141,
            top: -340,
            height: 220,
            width: 57,
            backgroundColor,
            opacity: 0.3,
            borderRadius: 20,
            transform: [{ rotate: '90deg' }]
            // transform:rotate(60deg);
        }}>
        </View>
        <View style={{
            left: 140,
            top: -620,
            height: 200,
            width: 65,
            backgroundColor,
            opacity: 0.3,
            borderRadius: 20,
            transform: [{ rotate: '180deg' }]
            // transform:rotate(60deg);
        }}>
        </View>
    </View>

    //     <View
    //      style={[style, {
    //        // backgroundColor,
    //        // borderStyle: 'solid'
    //        borderRadius: 50,
    //        borderTopWidth: 0,
    //        borderRightWidth: 90,
    //        borderBottomWidth: 160,
    //        borderLeftWidth: 90,
    //        borderTopColor: Colors.shapesColor ,
    //        borderRightColor: 'transparent',
    //        borderBottomColor: Colors.shapesColor,
    //        borderLeftColor: 'transparent',

    //    }]}
    //    >
    // </View> 


    // <View style={{
    //   position: 'absolute',
    //   top: 20,
    //   height: 50,
    //   width: 100,
    //   backgroundColor: 'red',
    //   borderRadius: 4,
    //   borderTopRightRadius: 8,
    //   borderTopLeftRadius: 8
    // }}></View>

)

export default StatisticsTriangle;