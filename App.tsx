// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {I18nManager, LogBox, StatusBar, SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import configureStore from './src/store/configureStore';
import AppNavigator from './src/navigations';
import AppLoading from 'expo-app-loading';
// import {StripeProvider} from '@stripe/stripe-react-native';
import useFonts from './hooks/useFonts';
import * as Updates from 'expo-updates';

let store = configureStore();

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

  if (!IsReady) {
    return (
      <AppLoading
        startAsync={LoadFonts}
        onFinish={() => SetIsReady(true)}
        onError={() => {}}
      />
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
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    </SafeAreaView>
  );
}
