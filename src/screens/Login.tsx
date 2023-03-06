/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, TouchableOpacity, Platform} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import PropTypes from 'prop-types';
import * as Colors from '../styles/Colors';
import {Text, CircularIcon, Carousel, Button} from '../component';
import {Dismiss} from '../assets/images/iconSvg/index.js';
// import * as Facebook from 'expo-facebook';

const Login = ({navigation}) => {
  const mainGradientColors = [
    'rgb(48, 217, 191)',
    'rgb(115, 235, 220)',
    'rgb(175, 255, 228)',
    'rgb(168, 242, 220)',
    'rgb(168, 242, 221)',
  ];

  // const loginToFB = async () => {
  //   try {
  //     await Facebook.initializeAsync({
  //       appId: '489650663019794',
  //     });
  //     const {type, token, expirationDate, permissions, declinedPermissions} =
  //       await Facebook.logInWithReadPermissionsAsync({
  //         permissions: ['public_profile'],
  //       });
  //     console.log('att', type, token);
  //     if (type === 'success') {
  //       // Get the user's name using Facebook's Graph API
  //       const response = await fetch(
  //         `https://graph.facebook.com/me?access_token=${token}`,
  //       );
  //       Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
  //     } else {
  //       // type === 'cancel'
  //     }
  //   } catch ({message}) {
  //     console.log(message);
  //     alert(`Facebook Login Error: ${message}`);
  //   }
  // };
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}
      colors={mainGradientColors}
      style={styles.favoritesContainer}>
      <TouchableOpacity
        style={styles.headerLogs}
        onPress={() => navigation.goBack()}>
        <CircularIcon
          Icon={Dismiss}
          circleSize={50}
          borderColor={Colors.parentsAccessTransparent}
          backgroundColor={Colors.parentsAccessTransparent}
          style={undefined}
          blur={undefined}
          statistics={undefined}
          minutesNum={undefined}
        />
      </TouchableOpacity>
      <Carousel />
      <View style={styles.socialMediaView}>
        <Text center GulfSemiBold size={19} color={Colors.paua}>
          تسجيل الدخول
        </Text>
        <Text
          center
          GulfText
          size={15}
          color={Colors.paua}
          style={{
            marginHorizontal: '10%',
            lineHeight: 30,
          }}>
          قم بحفظ القصص بالمفضلة، حافظ على تقدم أطفالك في سماع القصص والمزيد عن
          طريق تسجيل الدخول مجاناً.
        </Text>
        <Text
          center
          GulfText
          size={13}
          color={'#464469'}
          style={{marginTop: '3%'}}>
          سجل الدخول عن طريق
        </Text>
        <View style={styles.socialRow1}>
          <Button
            iconName="google"
            fontFamily="SFProTextMedium"
            textSize={16}
            textStyle={{right: '10%'}}
            buttonStyle={[
              styles.btn,
              {backgroundColor: '#367bff', borderColor: '#367bff'},
            ]}
            style={styles.socialButton}
            onPress={() => navigation.navigate('LoginByEmail')}
            disabled={undefined}
            outline={undefined}
            purple={undefined}
            green={undefined}
            orange={undefined}>
            Google
          </Button>
          <Button
            iconName="apple1"
            fontFamily="SFProTextMedium"
            textSize={16}
            textStyle={{right: '10%'}}
            buttonStyle={[
              styles.btn,
              {backgroundColor: Colors.black, borderColor: Colors.black},
            ]}
            style={styles.socialButton}
            disabled={undefined}
            onPress={undefined}
            outline={undefined}
            purple={undefined}
            green={undefined}
            orange={undefined}>
            Apple
          </Button>
        </View>

        <View style={styles.socialRow2}>
          <Button
            iconName="twitter"
            fontFamily="SFProTextMedium"
            textSize={16}
            textStyle={{right: '10%'}}
            buttonStyle={[
              styles.btn,
              {backgroundColor: '#1da1f2', borderColor: '#1da1f2'},
            ]}
            style={styles.socialButton}
            disabled={undefined}
            onPress={undefined}
            outline={undefined}
            purple={undefined}
            green={undefined}
            orange={undefined}>
            Twitter
          </Button>
          <Button
            iconName="facebook"
            fontFamily="SFProTextMedium"
            textSize={16}
            textStyle={{right: '10%'}}
            buttonStyle={[
              styles.btn,
              {backgroundColor: '#1877f2', borderColor: '#1877f2'},
            ]}
            style={styles.socialButton}
            onPress={() => {}}
            disabled={undefined}
            outline={undefined}
            purple={undefined}
            green={undefined}
            orange={undefined}>
            Facebook
          </Button>
        </View>
        <Text center GulfText size={13} color={'#464469'} style={{top: '-5%'}}>
          أو
        </Text>
        <Button
          fontFamily="GulfMedium"
          textSize={16}
          textStyle={{marginTop: '-2%', color: Colors.paua}}
          buttonStyle={[
            styles.btn2,
            {
              backgroundColor: Colors.white,
              borderColor: 'rgba(47, 76, 99, 0.27)',
            },
          ]}
          style={styles.createAccountButton}
          onPress={() => navigation.navigate('SignUp')}
          disabled={undefined}
          outline={undefined}
          purple={undefined}
          green={undefined}
          orange={undefined}
          iconName={undefined}>
          أنشئ حساباً جديداً عن طريق الإيميل
        </Button>
      </View>
    </LinearGradient>
  );
};

Login.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};

export default Login;

const styles = StyleSheet.create({
  favoritesContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  subTitle: {
    marginBottom: '-3%',
    marginLeft: '-1.2%',
  },
  plate2: {
    marginBottom: '-16%',
    marginLeft: '-10%',
    aspectRatio: 0.6,
    // resizeMode: 'stretch'
  },
  smallGradient: {
    width: '100%',
    height: 30,
  },
  StoriesView: {
    marginTop: -6,
  },
  backTextWhite: {
    color: '#FFF',
  },
  rowFront: {
    // backgroundColor: '#FFF',
    borderRadius: 5,
    // height: 60,
    // margin: 30,
    // marginBottom: 15,
    shadowColor: '#999',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    // elevation: 5,
  },
  rowFrontVisible: {
    backgroundColor: '#FFF',
    borderRadius: 5,
    height: 60,
    padding: 10,
    marginBottom: 15,
  },
  rowBack: {
    alignItems: 'center',
    // backgroundColor:   '#DDD',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
    // margin: 50,
    // marginBottom: 15,
    borderRadius: 5,
    top: -10,
  },
  backRightBtn: {
    alignItems: 'flex-end',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
    // backgroundColor: 'red',
    // marginBottom: -10,
    paddingRight: 30,
  },
  backRightBtnLeft: {
    // backgroundColor: '#1f65ff',
    right: 75,
  },
  backRightBtnRight: {
    right: 0,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  trash: {
    height: 25,
    width: 25,
    marginRight: 7,
  },
  headerLogs: {
    paddingTop: Platform.OS == 'ios' ? 70 : 50,
    marginHorizontal: '7%',
    // top: "0%"
    zIndex: 1,
  },
  socialMediaView: {
    position: 'absolute',
    backgroundColor: Colors.white,
    width: '100%',
    height: '52.5%',
    bottom: '0%',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  btn: {
    height: 56,
    // marginHorizontal: 20,
    width: '200%',
    borderRadius: 16,
    marginVertical: 10,
  },
  socialButton: {
    display: 'flex',
    // marginBottom: '10%',
    marginHorizontal: '5%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn2: {
    height: 56,
    // marginHorizontal: '20%',
    width: '90%',
    borderRadius: 16,
    marginVertical: 10,
  },
  createAccountButton: {
    display: 'flex',
    // marginBottom: '10%',
    marginHorizontal: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 20,
  },
  socialRow1: {
    // width: '100%',
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  socialRow2: {
    // width: '100%',
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    top: '-2%',
  },
});
