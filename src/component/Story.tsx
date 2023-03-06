/* eslint-disable react/prop-types */
import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Text from './Text';
import {Play} from '../assets/images/iconSvg';
import {Audio} from 'expo-av';
import {url} from '../services/config';

const Story = ({item, fav, index}) => {
  const navigation = useNavigation();
  const [sound, setSound] = useState();

  async function loadSound() {
    const {sound} = await Audio.Sound.createAsync(
      {
        uri:
          item.url && !fav
            ? url + item.url
            : index == 0
            ? url + '/audios/forests_flower/_rabbit_is_looking_for_mama.mp3'
            : index == 1
            ? url + '/audios/forests_flower/forests_flower.mp3'
            : url + '/audios/forests_flower/fisherman_and_fish.mp3',
      },
      {
        isMuted: false,
        rate: 1.0,
      },
    );

    setSound(sound);
  }

  /*   useEffect(() => {
      if (!sound || (sound && !sound._loaded)) {
        loadSound()
      }
  
    }, [sound]);
   */
  return fav || item.img_label ? (
    <TouchableOpacity
      style={[{marginTop: '2%'}, styles.storyContainer]}
      onPress={() => {
        // item.name || fav ? navigation.navigate('StoryDetails', { item, sound, fav }) : null
        item.name || fav
          ? navigation.navigate('StoryDetails', {item, fav})
          : null;
      }}>
      <ImageBackground
        style={styles.storyPlate}
        source={require('../assets/images/StoryMainPlate.png')}
        resizeMode="stretch">
        <TouchableOpacity
          style={styles.play}
          // onPress={() => item.name || fav ? navigation.navigate('StoryDetails', { item, sound, fav }) : null}>
          onPress={() =>
            item.name || fav
              ? navigation.navigate('StoryDetails', {item, fav})
              : null
          }>
          <Play />
        </TouchableOpacity>

        <ImageBackground
          style={styles.img}
          imageStyle={{borderRadius: 30}}
          source={
            !fav
              ? {uri: `${url.image}-small.png`}
              : //Will change this later
                item.image
          }
        />

        <View style={styles.details}>
          <View style={{width: '40%'}}>
            <Text
              GulfSemiBold
              size={17}
              color="#2f4c63"
              style={
                item.name && item.name.split(' ').length > 2
                  ? styles.title
                  : null
              }>
              {item.name ? item.name : item.title}
            </Text>
          </View>
          <Text SFProRoundedMedium size={17} color="#0e9dcb">
            {item.time} دقيقة{' '}
          </Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  ) : null;
};

export default Story;

const styles = StyleSheet.create({
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
  title: {
    lineHeight: 35,
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
    marginLeft: '42%',
    width: '100%',
  },
});
