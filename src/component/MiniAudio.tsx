/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import CLOSE from '../assets/images/close.png';
import {useStores} from '../store/rootStore';
import TrackPlayer from 'react-native-track-player';

const MiniAudio = (props: any) => {
  const store = useStores();

  console.log('====================================');
  console.log('props.bottom --->', props);
  console.log('====================================');
  return (
    <TouchableOpacity
      onPress={() => {
        store.authStore.navigation.navigate('StoryDetails', {
          item: store.audioStore.item,
          fav: store.audioStore.item,
        });
      }}
      style={{...styles.main, bottom: props.bottom ? props.bottom : 5}}>
      <ImageBackground
        source={{uri: `${store.audioStore?.item?.image}-bg.png`}}
        style={styles.main}
        blurRadius={90}>
        <TouchableOpacity
          onPress={async () => {
            await TrackPlayer.reset();
            store.audioStore.updateItem(null);
          }}
          style={{
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          }}>
          <Image
            source={CLOSE}
            style={{width: 15, height: 15, marginRight: 20}}
          />
        </TouchableOpacity>
        <Text style={{color: 'white', marginLeft: 20}}>
          {/* {store.audioStore.item?.name} */}
          {store.audioStore.item?.name
            ? store.audioStore.item?.name.includes('\n')
              ? store.audioStore.item?.name.split('\n').join(' ')
              : store.audioStore.item?.name
            : store.audioStore.item?.title.includes('\n')
            ? store.audioStore.item?.title.split('\n').join(' ')
            : store.audioStore.item?.title}
        </Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default MiniAudio;

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    bottom: 5,
    width: '95%',
    height: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
