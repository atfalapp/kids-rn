/* eslint-disable react/prop-types */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  View,
  ScrollView,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {useFocusEffect, useIsFocused} from '@react-navigation/native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {Play} from '../assets/images/iconSvg';
import {LinearGradient} from 'expo-linear-gradient';
import {nArabicWords} from 'narabicwords';
import PropTypes from 'prop-types';

// Assets
// Utils
import stories from '../utils/constants';
import axios from 'axios';
import {FavoritesHeaderIcon, BackIcon} from '../assets/images/iconSvg';
import {Text, CircularIcon} from '../component';
import MiniAudio from '../component/MiniAudio';
import {useStores} from '../store/rootStore';

const AlbumStories = ({navigation, route}) => {
  const store = useStores();
  const isFocused = useIsFocused();
  const {item, fav} = route?.params;

  const [stories, setStories] = useState([]);
  // console.log("stories", stories);
  const amountInWords = nArabicWords(stories.length, {Feminine: 'on'});
  useEffect(() => {
    if (isFocused) {
      axios
        .get(`https://atfal-backend.herokuapp.com/story/${item.id}`)
        .then(res => {
          console.log('Stories:', res.data);
          setStories(res.data);
        });
      // eslint-disable-next-line react-hooks/exhaustive-deps}
    }
  }, [isFocused, item.id]);

  return (
    <>
      <View
        style={{
          height: '100%',
          flexDirection: 'column',
          backgroundColor: 'rgb(90, 91, 55)',
          flex: 1,
        }}>
        <ImageBackground
          style={styles.screenHeader}
          source={{uri: `${item.cover_image}-header.png`}}>
          <View style={styles.headerLogs}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <CircularIcon
                Icon={BackIcon}
                circleSize={50}
                borderColor="rgba(255, 255, 255, 0.11)"
                backgroundColor="rgba(255, 255, 255, 0.11)"
                style={undefined}
                blur={undefined}
                statistics={undefined}
                minutesNum={undefined}
              />
            </TouchableOpacity>
            <CircularIcon
              Icon={FavoritesHeaderIcon}
              circleSize={50}
              borderColor="rgba(255, 255, 255, 0.11)"
              backgroundColor="rgba(255, 255, 255, 0.11)"
              style={undefined}
              blur={undefined}
              statistics={undefined}
              minutesNum={undefined}
            />
          </View>
        </ImageBackground>
        {/* 
            <LinearGradient start={{ x: 1, y: 0 }} end={{ x: 1, y: 2 }} colors={gradientColors} style={{
                height: 160,
                flexDirection: 'column'
            }}> */}

        <LinearGradient
          start={{x: 1, y: 0}}
          end={{x: 1, y: 1}}
          colors={['rgb(90, 91, 55)', 'rgb(90, 91, 55)']}
          style={{
            height: 160,
            opacity: 0.6,
            marginTop: '-7%',
            flex: 1,
          }}>
          <Text VibesRegular color={['#FFFF']} size={64} style={styles.title}>
            {item.name}
          </Text>
        </LinearGradient>
        {/* </LinearGradient> */}
        <Text GulfMedium color={['#FFFF']} size={20} style={styles.amount}>
          {stories.length === 1 ? `${amountInWords} قصص` : 'قصة واحدة'}
        </Text>
        <ScrollView
          style={[styles.StoriesView, {backgroundColor: 'rgb(90, 91, 55)'}]}
          contentContainerStyle={{flexGrow: 1}}>
          <View style={styles.flexOne}>
            {stories.map(story => (
              // eslint-disable-next-line react/jsx-key
              <TouchableOpacity
                style={[{marginTop: '2%'}, styles.storyContainer]}
                onPress={() => {
                  // story.name || fav ? navigation.navigate('StoryDetails', { item, sound, fav }) : null
                  story.name || fav
                    ? navigation.navigate('StoryDetails', {
                        item: story,
                        fav: story,
                      })
                    : null;
                }}>
                <ImageBackground
                  style={styles.storyPlate}
                  source={require('../assets/images/StoryMainPlate.png')}
                  resizeMode="stretch">
                  <TouchableOpacity
                    style={styles.play}
                    // onPress={() => story.name || fav ? navigation.navigate('StoryDetails', { item, sound, fav }) : null}>
                    onPress={() =>
                      story.name || fav
                        ? navigation.navigate('StoryDetails', {
                            item: story,
                            fav: story,
                          })
                        : null
                    }>
                    <Play />
                  </TouchableOpacity>

                  <ImageBackground
                    style={styles.img}
                    imageStyle={{borderRadius: 30}}
                    source={
                      !fav
                        ? {uri: `${story.image}-small.png`}
                        : //Will change this later
                          {uri: ''}
                    }
                  />

                  <View style={styles.details}>
                    <View style={{width: '40%'}}>
                      <Text
                        GulfSemiBold
                        size={17}
                        color="#2f4c63"
                        style={
                          story.name && story.name.split(' ').length > 2
                            ? styles.storyTitle
                            : null
                        }>
                        {story.name ? story.name : story.title}
                      </Text>
                    </View>
                    <Text SFProRoundedMedium size={17} color="#0e9dcb">
                      {story.time} دقيقة{' '}
                    </Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
      {store.audioStore?.item && <MiniAudio />}
    </>
  );
};

AlbumStories.prototype = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
  }).isRequired,
  fav: PropTypes.any,
  route: PropTypes.shape({
    params: PropTypes.object,
  }),
};
export default AlbumStories;

const styles = StyleSheet.create({
  flexOne: {
    flex: 1,
  },
  screenContainer: {
    backgroundColor: 'rgb(90, 91, 55)',
  },
  screenHeader: {
    width: '100%',
    height: 270,
    opacity: 0.7,
  },
  headerLogs: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: Platform.OS == 'ios' ? 70 : 50,
    marginBottom: '75%',
    marginHorizontal: '5%',
  },
  screenBody: {
    backgroundColor: 'rgb(90, 91, 55)',
  },
  title: {
    color: '#FFFAFA',
    textAlign: 'center',
    fontWeight: 'normal',
    fontStyle: 'normal',
    marginTop: Platform.OS === 'ios' ? '0%' : '-35%',
    textDecorationThickness: '5px',
  },
  storyTitle: {
    display: 'flex',
    textAlign: 'center',
    fontWeight: 'normal',
    fontStyle: 'normal',
    bottom: '-23%',
  },
  amount: {
    color: '#FFFF',
    textAlign: 'center',
    fontWeight: '500',
    fontStyle: 'normal',
    marginTop: '-17%',
  },
  StoriesView: {
    height: '100%',
    backgroundColor: '#795c32',
    marginTop: '5%',
    marginBottom: '5%',
    opacity: 0.9,
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
    marginTop: 6,
    marginHorizontal: 5,
    width: 138,
    height: 120,
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
    marginLeft: '45%',
    width: '100%',
  },
});
