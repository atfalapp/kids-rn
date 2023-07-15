/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/prop-types */
import React, {useEffect, useState} from 'react';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {BlurView} from '@react-native-community/blur';
import {useFocusEffect} from '@react-navigation/native';

import {
  View,
  ScrollView,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

import {LinearGradient} from 'expo-linear-gradient';

import * as Colors from '../styles/Colors';

import ParentsIcon from '../assets/images/iconSvg/Parents-Access.svg';

import {Text} from '../component';
import axios from 'axios';
import MiniAudio from '../component/MiniAudio';
import {useStores} from '../store/rootStore';

const Stories = ({navigation}) => {
  const store = useStores();
  const gradientColors = [
    'rgb(255, 255, 255)',
    'rgb(255,250,182)',
    'rgb(255,160,125)',
    'rgb(123,123,129)',
    // , 'rgb(255,250,182)', 'rgb(255,160,125)',
    'rgb(35,98,131)',
    'rgb(0,88,132)',
    'rgb(4,86,130)',
    'rgb(15,82,125)',
    'rgb(33,74,116)',
    'rgba(35,98,131,0)',
    'rgba(0,88,132,0.56)',
    'rgba(15,82,125,0.93)',
    'rgb(33,74,116)',
    //  , 'rgb(33,74,116)'
  ];

  const [albums, setAlbums] = useState<any>([]);
  const [loading, setLoading] = useState(false);

  useFocusEffect(() => {
    getAlbumsData();
    store.authStore.updateNavigation(navigation);
  });

  const getAlbumsData = async () => {
    setLoading(true);
    try {
      axios.get('https://atfal-backend.herokuapp.com/album').then(res => {
        console.log('Response: ', res.data);
        setAlbums(res.data);
      });
    } catch (er) {
      // dispatch(actions.showError('حصل خطأ، الرجاء المحاولة في وقت لاحق', 2000));
      console.log(er);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ImageBackground
        resizeMode="stretch"
        style={styles.screenHeader}
        source={require('../assets/images/Hero.png')}>
        <View
          style={{
            display: 'flex',
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            marginTop: 30,
            paddingRight: 20,
          }}>
          <TouchableOpacity
            style={{
              width: 107,
              height: 48,
              backgroundColor: 'rgba(9, 39, 63, 0.60)',
              borderRadius: 44,
              marginTop: 25,
            }}
            onPress={() => navigation.navigate('ParentsAccess')}>
            <View
              style={{
                height: '100%',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}>
              <ParentsIcon />
              <Text
                AlmaraiRegular
                color={Colors.white}
                size={16}
                style={{textAlign: 'center'}}>
                الوالدين
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>

      <LinearGradient
        start={{x: 1, y: 0}}
        end={{x: 0.5, y: 2.1}}
        colors={gradientColors}
        style={{
          height: hp('70%'),
          flexDirection: 'column',
        }}>
        <ImageBackground
          style={{
            width: '100%',
            marginTop: -36,
          }}
          source={require('../assets/images/Clouds.png')}>
          <Text
            VibesRegular
            color={Colors.DarkRed}
            size={56}
            style={{
              textAlign: 'center',
              top: '30%',
              marginBottom: '5%',
              fontWeight: '700',
            }}>
            لنستكشف
          </Text>
        </ImageBackground>

        <Text
          GulfSemiBold
          color={Colors.DarkRed}
          size={20}
          style={styles.world}>
          عالم الخيال
        </Text>

        {!loading ? (
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{marginTop: 15}}>
            {albums.map((album, index) => (
              <TouchableOpacity
                key={album.id}
                style={[
                  styles.albumContainer,
                  {
                    marginLeft: index == 0 ? 28 : 14,
                    marginRight: 14,
                  },
                ]}
                onPress={() =>
                  navigation.navigate('AlbumStories', {
                    item: album,
                    index: album.id,
                  })
                }>
                <ImageBackground
                  resizeMode="stretch"
                  style={styles.img}
                  imageStyle={{borderRadius: 15}}
                  source={{uri: `${album.front_image}-large.png`}}>
                  <View style={styles.circle}>
                    <Text
                      SFProRoundedSemiBold
                      size={24}
                      color={Colors.white}
                      style={{left: '1%', bottom: '51%'}}>
                      1
                    </Text>
                  </View>
                </ImageBackground>

                <Text
                  GulfSemiBold
                  size={15}
                  color="#2f4c63"
                  style={styles.title}>
                  {album.name}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        ) : (
          <View style={{alignSelf: 'center'}}>
            <ActivityIndicator size={'large'} color={Colors.mainColor} />
          </View>
        )}

        {/* <View style={{ marginVertical: "25%" }} /> */}
      </LinearGradient>
      {store.audioStore?.item && <MiniAudio bottom={90} />}
    </>
  );
};
export default Stories;

const smallScreen = Dimensions.get('window').height <= 700;

console.log(Dimensions.get('window').height);

const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: Colors.orangeBackground,
  },
  screenHeader: {
    width: '100%',
    height: smallScreen ? hp('32%') : hp('38%'),
  },
  parents: {
    width: 107,
    height: 48,
    borderRadius: 44,
    backgroundColor: 'rgba(9, 39, 63, 0.21)',
  },
  world: {
    textAlign: 'center',
    fontWeight: '700',
    marginBottom: '5%',
  },
  albumContainer: {
    height: 215,
    width: 190,
    backgroundColor: Colors.white,
    borderRadius: 25,
    flexDirection: 'column',
    padding: '0.5%',
  },
  title: {
    textAlign: 'center',
    alignSelf: 'center',
    lineHeight: 35,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  circle: {
    display: 'flex',
    alignItems: 'center',
    alignSelf: 'flex-start',
    shadowColor: '#cb421e',
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowRadius: 16,
    shadowOpacity: 1,
    right: '6%',
    top: '-2%',
  },
  storyContainer: {
    flex: 1,
    marginHorizontal: wp('4%'),
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '2%',
  },
  storyPlate: {
    width: wp('90%'),
    height: 128,
  },
  play: {
    alignSelf: 'flex-end',
    top: '28%',
    right: '1%',
    position: 'absolute',
  },
  img: {
    marginBottom: 0,
    bottom: 3,
    marginTop: 5,
    marginHorizontal: 3,
    width: 182,
    height: 170,
    shadowColor: 'rgba(255, 255, 255, 0.53)',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowRadius: 2,
    shadowOpacity: 1,
  },
  details: {
    marginTop: '-30%',
    marginLeft: '42%',
    width: '100%',
  },
});
