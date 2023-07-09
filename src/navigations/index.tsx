/* eslint-disable react-native/no-inline-styles */
import 'react-native-gesture-handler';
import React from 'react';
import AppNavigator from './app-navigator';
// import {navigationRef} from './RootNavigation';
import {NavigationContainer} from '@react-navigation/native';
import {View, Image} from 'react-native';
import {Platform} from 'react-native';
import {useStores} from '../store/rootStore';
import {convertDurationToMillis} from '../services/utilities';
const App = () => {
  const store = useStores();
  const duration = convertDurationToMillis(store.audioStore.item?.time);
  // const isLoading = true
  // const {isLoggedIn, isLoading} = useSelector(({auth}) => ({
  //   isLoggedIn: auth.isLoggedIn,
  //   isLoading: auth.isLoading,
  // }));

  // if (isLoading) {
  //   return <Main />;
  // }

  return (
    <NavigationContainer>
      {/* {isLoggedIn ? <AppNavigator /> : <AuthNavigator />} */}
      <AppNavigator />
      {store.audioStore.item && store.audioStore.minimized ? (
        <View
          style={{
            display: 'flex',
            width: '100%',
            height: Platform.OS === 'ios' ? 116 : 90,
            position: 'absolute',
            bottom: 0,
            backgroundColor: 'white',
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}>
              <Image source={{uri: `${store.audioStore.item?.image}-bg.png`}} />
            </View>
            {/* <View></View>
            <View></View> */}
          </View>
        </View>
      ) : null}
    </NavigationContainer>
  );
};

export default App;
