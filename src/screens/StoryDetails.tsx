/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import React, {useEffect, useState} from 'react';
import {
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Share,
} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import {Slider} from '@miblanchard/react-native-slider';
import {
  convertMillisToDuration,
  convertDurationToMillis,
} from '../services/utilities';
import {useDispatch, useSelector} from 'react-redux';

// Assets
// Utils
import * as Colors from '../styles/Colors';

import {Text, Thumb, CircularIcon, StoryEvaluationModal} from '../component';
import {
  ReviewIcon,
  ShareIcon,
  GoBackward,
  GoForward,
  MinimizeIcon,
  FavoritesHeaderIcon,
  PauseWithCircle,
  PlayerPlay,
} from '../assets/images/iconSvg/index.js';
import {url} from '../services/config';
import {Audio} from 'expo-av';

function renderThumb() {
  return <Thumb />;
}

const StoryDetails = ({navigation, route}) => {
  const dispatch = useDispatch();
  const {isPlaying, currentPlayed} = useSelector(({app}) => ({
    isPlaying: app.isPlaying,
    currentPlayed: app.currentPlayed,
  }));

  console.log('isPlaying', isPlaying);

  // console.log(url);
  const {item, fav} = route?.params;
  // const { item, sound, fav } = route?.params;
  const duration = convertDurationToMillis(item?.time);
  const [isEvaluationVisible, setIsEvaluationVisible] = useState(false);
  const [isPlayed, setIsPlayed] = useState(false);
  const [currentPosition, setCurrentPosition] = useState(0);
  const [soundState, setSound] = useState(null);

  const gradientColors = [
    'rgba(42, 46, 49, 0)',
    'rgba(26, 28, 29, 0.8)',
    'rgb(25, 26, 28)',
  ];

  async function loadSound() {
    console.log('load');
    console.log('Story: ', item);
    const {sound} = await Audio.Sound.createAsync(
      {
        uri: item.music,
        //   index == 0? url + "/audios/forests_flower/_rabbit_is_looking_for_mama.mp3":
        //   index == 1? url + "/audios/forests_flower/forests_flower.mp3":
      },
      {
        shouldPlay: true,
        isMuted: false,
        rate: 1.0,
      },
    );

    setSound(sound);
    setIsPlayed(true);
  }

  const shareStory = async () => {
    try {
      const result = await Share.share({
        message: item.music,
      });
      console.log(result);
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log('activityType', result.activityType);
          // shared with activity type of result.activityType
        } else {
          console.log('shared');
        }
      } else if (result.action === Share.dismissedAction) {
        console.log('dismissed');
      }
    } catch (error) {
      alert(error.message);
    }
  };

  async function killSound() {
    await soundState.setStatusAsync({positionMillis: 0});
    setIsPlayed(false);
    await soundState.pauseAsync();
    dispatch({
      type: 'PAUSED_SOUND',
    });
    setCurrentPosition(0);
  }

  useEffect(() => {
    if (!soundState || (soundState && !soundState._loaded)) {
      loadSound();
    }
  }, [soundState]);

  useEffect(() => {
    if (soundState) {
      soundState.setOnPlaybackStatusUpdate(({positionMillis}) => {
        console.log(positionMillis, duration);
        // 362266 362000
        if (positionMillis >= duration) {
          console.log('Sound Killed');
          killSound();
        } else {
          // console.log("Current Position", currentPosition, "positionMillis", positionMillis, "isPlayed", isPlayed);
          setCurrentPosition(positionMillis);
        }
      });
    }
    return soundState
      ? () => {
          console.log('Unloading Sound');
          // sound.unloadAsync();
          // sound.stopAsync();
        }
      : undefined;
  }, [soundState]);

  async function playSound() {
    if (isPlaying && currentPlayed) {
      console.log('unloaddddd');
      currentPlayed.unloadAsync();
      currentPlayed.stopAsync();
      // setSound(undefined)
    } else {
      await soundState.playAsync();
      setIsPlayed(true);
      dispatch({
        type: 'PLAYING_SOUND',
        payload: {
          sound: soundState,
        },
      });
    }
  }

  async function pauseSound() {
    await soundState.pauseAsync();
    setIsPlayed(false);
    dispatch({
      type: 'PAUSED_SOUND',
    });
  }

  async function moveForward() {
    let forpos =
      currentPosition + 15000 <= duration ? currentPosition + 15000 : duration;
    await onChange(forpos);
  }

  async function moveBackward() {
    let backpos =
      currentPosition - 15000 >= 0 ? currentPosition - 15000 : 0.0001;
    await onChange(backpos);
  }

  async function onChange(value) {
    setCurrentPosition(value);
    await soundState.setStatusAsync({positionMillis: value});
  }

  return (
    <ImageBackground
      source={{uri: `${item.image}-bg.png`}}
      style={styles.screenContainer}>
      <View style={styles.screenHeader}>
        <View style={styles.headerLogs}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <CircularIcon
              Icon={MinimizeIcon}
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
      </View>

      <LinearGradient
        start={{x: 1, y: 0}}
        end={{x: 1, y: 1}}
        colors={gradientColors}
        style={styles.screenItemsView}>
        <Text
          VibesRegular
          color={Colors.white}
          size={58}
          style={styles.storyTitle}>
          {item.name
            ? item.name.includes('\n')
              ? item.name.split('\n').join(' ')
              : item.name
            : item.title.includes('\n')
            ? item.title.split('\n').join(' ')
            : item.title}
        </Text>

        <View style={styles.player}>
          <Slider
            minimumValue={0}
            maximumValue={duration}
            value={currentPosition}
            onValueChange={value => onChange(value[0])}
            trackStyle={{
              borderRadius: 5,
              height: 7,
            }}
            containerStyle={{
              width: '100%',
            }}
            renderThumbComponent={renderThumb}
            thumbTintColor={Colors.white}
            minimumTrackTintColor={Colors.sliderTrackTint}
            maximumTrackTintColor={Colors.sliderTransparent}
          />

          <View style={styles.playerPeriodsView}>
            <Text
              SFProRoundedMedium
              color={Colors.sliderTrackTint}
              size={17}
              style={styles.playerPeriodText}>
              {convertMillisToDuration(currentPosition)}
            </Text>
            <Text
              SFProRoundedMedium
              color={Colors.white}
              size={17}
              style={styles.playerPeriodText}>
              {convertMillisToDuration(duration)}
            </Text>
          </View>

          <View style={styles.playerIcons}>
            <TouchableOpacity onPress={moveBackward}>
              <GoBackward />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                width: 76,
                height: 76,
              }}
              onPress={() => {
                console.log('====================================');
                console.log('play clicked');
                console.log('====================================');
                if (isPlayed) {
                  pauseSound();
                } else {
                  playSound();
                }
              }}>
              {isPlayed ? <PauseWithCircle /> : <PlayerPlay />}
            </TouchableOpacity>

            <TouchableOpacity onPress={moveForward}>
              <GoForward />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.footerLogs}>
          <TouchableOpacity
            onPress={() => {
              setIsEvaluationVisible(true);
            }}>
            <ReviewIcon />
          </TouchableOpacity>
          <TouchableOpacity onPress={shareStory}>
            <ShareIcon />
          </TouchableOpacity>
        </View>
      </LinearGradient>

      <StoryEvaluationModal
        visible={isEvaluationVisible}
        onClose={() => {
          setIsEvaluationVisible(false);
        }}
      />
    </ImageBackground>
  );
};
export default StoryDetails;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  screenHeader: {
    width: '100%',
    position: 'absolute',
    top: 0,
  },
  headerLogs: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: Platform.OS == 'ios' ? 70 : 50,
    marginBottom: '75%',
    marginHorizontal: '5%',
  },
  screenItemsView: {
    height: 388,
  },
  storyTitle: {
    display: 'flex',
    textAlign: 'center',
    fontWeight: 'normal',
    fontStyle: 'normal',
    bottom: '-23%',
  },
  player: {
    display: 'flex',
    flexDirection: 'column',
    // marginBottom: '-1%',
    bottom: '-19%',
    marginHorizontal: '5%',
  },
  playerIcons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: '20%',
  },
  playerPeriodsView: {
    // marginHorizontal: "5%",
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  playerPeriodText: {
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 24,
    letterSpacing: 0,
  },
  playerPauseAndPlayIcon: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  footerLogs: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: Platform.OS == 'ios' ? 70 : 50,
    bottom: '-7%',
    marginHorizontal: '5%',
  },
});

/* if (currentPosition != positionMillis) {
    console.log("Current Position", currentPosition, "positionMillis", positionMillis, "isPlayed", isPlayed);
    setCurrentPosition(positionMillis)
    console.log("one");
} else {
    if (positionMillis >= duration) {
        console.log("Sound Killed");
        killSound()
    } else {
        console.log("three");
        setCurrentPosition(currentPosition)
    }
} */
