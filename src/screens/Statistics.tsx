/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/prop-types */
import React from 'react';
import {ScrollView, StyleSheet, Image, View, Dimensions} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

import * as Colors from '../styles/Colors';
import {Text, CircularIcon, StatisticsSquare} from '../component';
import InvertibleScrollView from 'react-native-invertible-scroll-view';
const smallScreen = Dimensions.get('window').height <= 700;

const Statistics = ({navigation}) => {
  const gradientColors = [
    'rgb(41,108,212)',
    'rgb(79,179,239)',
    'rgb(147,232,216)',
    // , 'rgb(255,250,182)', 'rgb(255,160,125)',
    'rgb(168,242,220)',
    'rgb(168,242,221)',
    'rgba(0,88,132,0.56)',
    // 'rgb(168,242,220)', 'rgb(168,242,221)', , 'rgba(0,88,132,0.56)',
    'rgba(15,82,125,0.93)',
    'rgb(33,74,116)',
    //  , 'rgb(33,74,116)'
  ];

  const goalsHeadingTextSize = 35;
  const goalTextSize = smallScreen ? 12 : 15;
  const goalsMargin = smallScreen ? -25 : -10;
  const shapeSize = smallScreen ? 140 : 140;

  return (
    <LinearGradient
      start={{x: 1, y: 0}}
      end={{x: 1, y: 1}}
      colors={gradientColors}
      style={styles.StatisticsScreen}>
      <Text
        GulfBold
        color={Colors.white}
        size={17}
        style={styles.statisticsTitle}>
        الإحصائيات
      </Text>

      <Text
        GulfText
        color={Colors.white}
        size={13}
        style={styles.statisticsSubTitle}>
        محاولة الوصول إلى الحد اليومي المقترح يساعد أطفالك على الإستفادة القصوى
        من أهداف التطبيق وما يحتويه من قصص.
      </Text>
      <View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{marginHorizontal: 25}}>
          <StatisticsSquare
            storiesNum={2}
            squareSize={shapeSize}
            backgroundColor={Colors.shapesColor}
            style={styles.statisticsShape}
          />
          <CircularIcon
            statistics
            minutesNum={16.32}
            circleSize={shapeSize}
            borderColor={Colors.shapesColor}
            backgroundColor={Colors.shapesColor}
            style={styles.statisticsShape}
            blur={undefined}
            Icon={undefined}
          />
          <StatisticsSquare
            storiesNum={2}
            squareSize={shapeSize}
            backgroundColor={Colors.shapesColor}
            style={styles.statisticsShape}
          />
        </ScrollView>
      </View>

      <View style={{...styles.goalsView}}>
        <Text
          VibesRegular
          color={Colors.paua}
          style={styles.targetTitle}
          size={goalsHeadingTextSize}>
          أهدافنا
        </Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: goalsMargin,
          }}>
          <View
            style={{
              width: '100%',
              // justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              GulfText
              color={Colors.paua}
              style={styles.target}
              size={goalTextSize}>
              ✦ رفع مستوى التركيز للطفل.
            </Text>
            <Text
              GulfText
              color={Colors.paua}
              size={goalTextSize}
              style={{marginLeft: '-55%'}}>
              ✦ إغناء الثروة اللغوية للطفل.
            </Text>
          </View>
          <View>
            <Text
              GulfText
              color={Colors.paua}
              size={goalTextSize}
              style={{
                width: 220,
                marginLeft: '-210%',
                textAlign: 'right',
              }}>
              ✦ المساهمة بتطوير خيال الطفل.
            </Text>
            <Text
              GulfText
              color={Colors.paua}
              size={goalTextSize}
              style={{
                width: 450,
                marginLeft: -290,
              }}>
              {
                '✦ دغدغة الثقافات الثلاثة الضرورية لتطور الطفل \n(الحسية، العقلية، الإتصالية).'
              }
            </Text>
          </View>
        </ScrollView>
      </View>

      <Image
        source={require('../assets/images/Landscape.png')}
        style={styles.landscape}
      />
      <Image
        source={require('../assets/images/Windmill-Blades.png')}
        style={styles.windmillBlades}
      />
      <Image
        source={require('../assets/images/Balloon.png')}
        style={styles.balloon}
      />

      <Image
        source={require('../assets/images/Windmill-Gradients.png')}
        style={styles.gradientsImg}
      />
    </LinearGradient>
  );
};
export default Statistics;

const styles = StyleSheet.create({
  StatisticsScreen: {
    flex: 1,
    flexDirection: 'column',
  },
  statisticsTitle: {
    textAlign: 'center',
    marginVertical: '8%',
  },
  statisticsSubTitle: {
    textAlign: 'center',
    marginHorizontal: '10%',
    letterSpacing: 1,
    lineHeight: 25,
    marginTop: '-8%',
    marginBottom: '3%',
  },
  statisticsShape: {
    marginHorizontal: 10,
    opacity: 0.3,
  },
  goalsView: {
    alignItems: 'center',
    bottom: smallScreen ? '25%' : '15%',
  },
  goal: {
    flexWrap: 'wrap',
  },
  landscape: {
    width: '100%',
    position: 'absolute',
    bottom: '16%',
  },
  windmillBlades: {
    position: 'absolute',
    bottom: '23%',
    left: '10%',
  },
  balloon: {
    position: 'absolute',
    bottom: '30%',
    right: '12%',
  },
  gradientsImg: {
    position: 'absolute',
    bottom: '-1%',
    width: '100%',
    height: 150,
  },
  targetTitle: {
    marginTop: '10%',
    marginBottom: '2%',
  },
  target: {
    marginLeft: '-60%',
    display: 'flex',
    flexDirection: 'column',
  },
});
