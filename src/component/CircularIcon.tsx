/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/prop-types */
import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import Text from './Text';
import * as Colors from '../styles/Colors';
import {BlurView} from '@react-native-community/blur';

const CircularIcon = ({
  style,
  blur,
  Icon,
  statistics,
  minutesNum,
  circleSize,
  borderWidth = 2,
  borderColor,
  backgroundColor,
  ...props
}) => (
  <View>
    {/* <BlurView intensity={20} tint='light' style={styles.parents}> */}

    {blur ? (
      <BlurView
        blurAmount={25}
        blurType="light"
        style={[
          style,
          styles.mainStyle,
          {
            width: circleSize,
            height: circleSize,
            borderRadius: 0.5 * circleSize,
            borderColor,
            borderWidth,
            backgroundColor,
          },
        ]}>
        {Icon ? <Icon /> : null}
      </BlurView>
    ) : (
      <View
        style={[
          style,
          styles.mainStyle,
          {
            width: circleSize,
            height: circleSize,
            borderRadius: 0.5 * circleSize,
            borderColor,
            borderWidth,
            backgroundColor,
          },
        ]}>
        {Icon ? <Icon /> : null}
      </View>
    )}
    {statistics ? (
      <View style={{bottom: 120, marginLeft: 22}}>
        <Text
          GulfBold
          size={12}
          color={Colors.white}
          center
          style={{width: 100, alignItems: 'center'}}>
          عدد الدقائق المسموعة لليوم
        </Text>
        {minutesNum ? (
          <Text
            SFProRoundedSemiBold
            size={20}
            color={'#fdf1c3'}
            center
            style={{marginRight: '20%'}}>
            {minutesNum}
          </Text>
        ) : null}

        <View style={{width: '80%', alignItems: 'center', marginTop: -10}}>
          <Text GulfText size={8} color={Colors.white} style={{opacity: 0.7}}>
            الحد المقترح 15-20 دقيقة{' '}
          </Text>
        </View>
      </View>
    ) : null}
  </View>
);
export default CircularIcon;

const styles = StyleSheet.create({
  mainStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'rgba(203, 231, 255, 0.3)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 1,
    shadowOpacity: 0.5,
  },
});
