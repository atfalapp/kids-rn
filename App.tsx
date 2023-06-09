/* eslint-disable react-native/no-inline-styles */
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {
  View,
  I18nManager,
  ImageBackground,
  LogBox,
  StatusBar,
  SafeAreaView,
} from 'react-native';
// import {Provider} from 'react-redux';
// import configureStore from './src/store/configureStore';
import AppNavigator from './src/navigations';
// import {StripeProvider} from '@stripe/stripe-react-native';
import useFonts from './hooks/useFonts';
import * as Updates from 'expo-updates';
import * as SplashScreen from 'expo-splash-screen';
import BLUE_BIRD from './src/assets/blue-bird-bg.png';
// let store = configureStore();

import RootStore from './src/store/rootStore';
import {Provider} from 'mobx-react';

export default function App() {
  const [IsReady, SetIsReady] = useState(false);

  const LoadFonts = async () => {
    await useFonts();
  };

  useEffect(() => {
    LogBox.ignoreAllLogs(true);

    async function reloadApp() {
      await Updates.reloadAsync();
    }
    if (!I18nManager.isRTL) {
      I18nManager.allowRTL(true);
      I18nManager.forceRTL(true);
      reloadApp();
    }

    // StatusBar.setHidden(true)
    //       StatusBar.setBarStyle("dark-content");
    // if (Platform.OS === "android") {
    //   StatusBar.setBackgroundColor("transparent");
    //   StatusBar.setTranslucent(true);
    // }
  }, []);

  useEffect(() => {
    if (!IsReady) {
      LoadFonts().then(() => {
        SetIsReady(true);
      });
    } else {
      SplashScreen.hideAsync();
    }
  }, [IsReady]);

  if (!IsReady) {
    return (
      <View
        style={{
          backgroundColor: '#77b6f7',
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ImageBackground
          source={BLUE_BIRD}
          style={{height: '100%', width: '100%'}}
        />
      </View>
      // <AppLoading
      //   startAsync={LoadFonts}
      //   onFinish={() => SetIsReady(true)}
      //   onError={() => {}}
      // />
    );
  }

  return (
    //  <View>
    <SafeAreaView style={{flex: 1}}>
      {/* <GeneralStatusBarColor backgroundColor="transparent"
      barStyle="light-content"/> */}

      <StatusBar
        hidden={true}
        translucent
        // barStyle="light-content"
        backgroundColor="transparent"
      />
      <Provider store={RootStore}>
        <AppNavigator />
      </Provider>
    </SafeAreaView>
  );
}
