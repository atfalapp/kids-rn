/* eslint-disable react/prop-types */
import React, {useState, useEffect} from 'react';
import {Platform} from 'react-native';
import {
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Backspace, BlueMinimizeIcon} from '../assets/images/iconSvg';
import {Text, CircularIcon} from '../component';
import * as Colors from '../styles/Colors';

const windowHeight = Dimensions.get('window').height;

const ParentsAccess = ({navigation}) => {
  const numbers = [
    [3, 2, 1],
    [6, 5, 4],
    [9, 8, 7],
  ];

  const letters = [
    '',
    'A B C',
    'D E F',
    'G H I',
    'J K L',
    'M N O',
    'P Q R S',
    'T U V',
    'W X Y Z',
  ];

  const [passcode, setPasscode] = useState('');

  useEffect(() => {
    //Runs on the first render
    //And any time any dependency value changes
    // setPasscode("")
  }, []);
  // }, [prop, state]);

  return (
    <View style={styles.parentsAccessScreen}>
      <View style={{backgroundColor: Colors.lightCyan}}>
        <TouchableOpacity
          style={styles.parentsAccessHeaderLogs}
          onPress={() => navigation.goBack()}>
          <CircularIcon
            Icon={BlueMinimizeIcon}
            circleSize={50}
            borderColor={Colors.parentsAccessTransparent}
            backgroundColor={Colors.parentsAccessTransparent}
            style={undefined}
            blur={undefined}
            statistics={undefined}
            minutesNum={undefined}
          />
        </TouchableOpacity>
        <View style={styles.parentsAccessHeaderImages}>
          <Image
            style={styles.carImg}
            source={require('../assets/images/Car.png')}
          />

          <Image
            style={styles.envImg}
            source={require('../assets/images/Environment.png')}
          />
        </View>
      </View>
      <ImageBackground
        style={styles.parentsAccessBody}
        source={require('../assets/images/Ground.png')}>
        <Text
          VibesRegular
          color={Colors.paua}
          size={52}
          style={[styles.parentsAccessTexts, {marginTop: 20}]}>
          منطقة الوالدين
        </Text>

        <Text
          GulfMedium
          color={Colors.paua}
          size={17}
          style={styles.parentsAccessTexts}>
          للمتابعة، رجاءً أدخل الأرقام التالية
        </Text>

        <Text
          GulfBold
          color={Colors.paua}
          size={17}
          style={styles.parentsAccessTexts}>
          ثمانية، ثلاثة، واحد، سبعة
        </Text>

        <View style={[styles.numpadContainer]}>
          {numbers.map((row, index) => {
            console.log(passcode);
            return (
              <View key={index} style={styles.numpadWrapper}>
                {row.map(number => {
                  let oneStyle = number === 1 ? {marginRight: 10} : null;
                  return (
                    <View key={number} style={styles.numpad}>
                      <TouchableOpacity
                        onPress={() => {
                          if (passcode + number == '8317') {
                            navigation.navigate('ParentsArea');
                            setPasscode('');
                          } else setPasscode(passcode + number);
                        }}>
                        <Text
                          SFProDisplayRegular
                          size={25}
                          style={[styles.numpadNumber, oneStyle]}>
                          {number}
                        </Text>
                        <Text
                          SFProTextBold
                          size={10}
                          style={styles.numpadNumber}>
                          {letters[number - 1]}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  );
                })}
              </View>
            );
          })}
          <View style={styles.numpadWrapper}>
            <View style={[styles.numpad, {marginLeft: 0}]}>
              <TouchableOpacity
                onPress={() => setPasscode(passcode.slice(0, -1))}>
                <Backspace />
              </TouchableOpacity>
            </View>
            <View style={[styles.numpad, {position: 'absolute', right: 120}]}>
              <TouchableOpacity>
                <Text SFProDisplayRegular size={25} style={styles.numpadNumber}>
                  0
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
export default ParentsAccess;

const styles = StyleSheet.create({
  parentsAccessScreen: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  parentsAccessHeaderLogs: {
    paddingTop: Platform.OS === 'ios' ? 70 : 50,
    marginHorizontal: '8%',
  },
  parentsAccessHeaderImages: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: '5%',
    marginTop: '-25%',
  },
  carImg: {
    zIndex: 1,
    marginBottom: '-45%',
    marginLeft: '5%',
  },
  envImg: {
    marginBottom: '-10%',
    marginLeft: '-35%',
  },
  parentsAccessBody: {
    width: '100%',
    height: hp('75%'),
    zIndex: -1,
  },
  parentsAccessTexts: {
    textAlign: 'center',
    marginVertical: -5,
  },
  numpadContainer: {
    alignSelf: 'center',
    marginVertical:
      windowHeight <= 700 ? windowHeight * 0.03 : windowHeight * 0.06,
  },
  numpadWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    marginVertical:
      windowHeight <= 700 ? windowHeight * 0.01 : windowHeight * 0.02,
  },
  numpad: {
    marginHorizontal: 40,
    alignSelf: 'center',
  },
  numpadNumber: {
    color: Colors.white,
    textAlign: 'center',
  },
});
