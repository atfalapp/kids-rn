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
// import {useDispatch, useSelector} from 'react-redux';

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
import TrackPlayer, {
  useProgress,
  State,
  usePlaybackState,
} from 'react-native-track-player';
// import {useStores} from '../store/rootStore';
// import {useDebouncedValue} from '../hooks/useDebouncedValue';
import {ActivityIndicator} from 'react-native';
function renderThumb() {
  return <Thumb />;
}

const StoryDetails = ({navigation, route}) => {
  const {item, fav} = route?.params;
  const state = usePlaybackState();
  const isPlaying = state === State.Playing || state === State.Ready;
  const isLoading = state === State.Connecting || state === State.Buffering;
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(0);
  const {position: currentPosition, duration: currentDuration} =
    useProgress(250);
  const [soundInfo, setSoundInfo] = useState<{
    currentTrack: number;
    sound: string;
    inProgress: boolean;
  }>({
    currentTrack: -1,
    sound: '',
    inProgress: false,
  });

  let progressHours,
    durationHours = false;
  let progressPosition = moment().startOf('day').seconds(progress?.position);
  let progressDuration = moment().startOf('day').seconds(progress?.duration);

  if (currentPosition) {
    progressHours = progressPosition?.format('HH') !== '00';
    durationHours = progressDuration?.format('HH') !== '00';
  }

  useEffect(() => {
    const setupPlayer = async () => {
      await TrackPlayer.setupPlayer();
      const tracks = await TrackPlayer.getQueue();
      const currentTrack = await TrackPlayer.getCurrentTrack();
      const track = tracks[currentTrack];
      if (currentTrack != null && track?.id === item.id) {
        setSoundInfo({
          currentTrack,
          sound: track.artist,
          inProgress: true,
        });
        await TrackPlayer.play();
      } else {
        onPlay();
      }
      // await TrackPlayer.add({
      // id: item?.id,
      // url: item?.music,
      // title: item?.name,
      // artist: '',
      // artwork: item?.image,
      // });
    };

    setupPlayer();
  }, []);

  const onPlay = async () => {
    await TrackPlayer.reset();
    // const {item} = route.params;
    TrackPlayer.add({
      id: item?.id,
      url: item?.music,
      title: item?.name,
      artist: '',
      artwork: item?.image,
    }).then(async (index: number) => {
      if (item?.user_progress && item?.user_progress !== '00:00:00') {
        TrackPlayer.seekTo(parseFloat(item.user_progress)).then(async () => {
          await TrackPlayer.play();
        });
      } else {
        await TrackPlayer.play();
      }

      setSoundInfo({
        currentTrack: index,
        sound: item.sound,
        inProgress: true,
      });
    });
  };

  useEffect(() => {
    setPosition(currentPosition);
    setDuration(currentDuration);
  }, [currentPosition, currentDuration]);

  const seekTo = async value => {
    await TrackPlayer.seekTo(value);
  };

  const formatTime = timeInSeconds => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);

    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <ImageBackground
      source={{uri: `${item.image}-bg.png`}}
      style={styles.screenContainer}>
      <View style={styles.screenHeader}>
        <View style={styles.headerLogs}>
          <TouchableOpacity
            onPress={() => {
              // soundState?.unloadAsync();
              // soundState?.stopAsync();
              navigation.goBack();
            }}>
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

        {!isLoading ? (
          <View style={styles.player}>
            <Slider
              minimumValue={0}
              maximumValue={currentDuration}
              value={currentPosition}
              onValueChange={value => TrackPlayer.seekTo(value[0])}
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
                {!currentPosition
                  ? progressPosition.format(
                      progressHours ? 'hh:mm:ss' : 'mm:ss',
                    )
                  : '0:00'}
              </Text>
              <Text
                SFProRoundedMedium
                color={Colors.white}
                size={17}
                style={styles.playerPeriodText}>
                {!currentPosition
                  ? progressDuration.format(
                      durationHours ? 'hh:mm:ss' : 'mm:ss',
                    )
                  : '00:00'}
              </Text>
            </View>

            <View style={styles.playerIcons}>
              <TouchableOpacity
                onPress={() => {
                  TrackPlayer.seekTo(currentPosition - 15);
                }}>
                <GoBackward />
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  width: 76,
                  height: 76,
                }}
                onPress={isPlaying ? TrackPlayer.pause : TrackPlayer.play}>
                {isPlaying ? <PauseWithCircle /> : <PlayerPlay />}
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  TrackPlayer.seekTo(currentPosition + 15);
                }}>
                <GoForward />
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <ActivityIndicator />
          </View>
        )}

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
