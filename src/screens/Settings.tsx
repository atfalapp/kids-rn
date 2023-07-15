/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/prop-types */
import React from 'react';
import {Platform} from 'react-native';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {BlueBack, Facebook, Twitter, Youtube} from '../assets/images/iconSvg';
import {Text, CircularIcon, SettingCell} from '../component';
import * as Colors from '../styles/Colors';
import {settingsCells} from '../utils/constants';
import MiniAudio from '../component/MiniAudio';
import {useStores} from '../store/rootStore';

const accountCells = settingsCells.slice(0, 3);
const notificationsCells = settingsCells[3];
const appCells = settingsCells.slice(4, 8);
const othersCells = settingsCells.slice(8, 11);

const Settings = ({navigation}) => {
  const store = useStores();
  return (
    <>
      <View style={styles.settingsScreen}>
        <View style={{}}>
          <TouchableOpacity
            style={styles.settingsHeaderLogs}
            onPress={() => navigation.goBack()}>
            <CircularIcon
              Icon={BlueBack}
              circleSize={50}
              borderColor={Colors.parentsAccessTransparent}
              backgroundColor={Colors.parentsAccessTransparent}
              style={undefined}
              blur={undefined}
              statistics={undefined}
              minutesNum={undefined}
            />
          </TouchableOpacity>
          <View style={styles.settingsHeaderImages}>
            <Text
              center
              GulfSemiBold
              size={19}
              color={Colors.paua}
              style={styles.title}>
              الإعدادات
            </Text>

            <Image
              style={styles.envImg}
              source={require('../assets/images/Background.png')}
            />
          </View>
        </View>

        <ScrollView style={styles.mainScrollView}>
          <Text
            GulfSemiBold
            size={19}
            color={Colors.settingDarkBlue}
            style={styles.subTitles}>
            إعدادات الحساب
          </Text>
          <View style={styles.accountSettingsView}>
            {accountCells.map((item, i) => {
              return (
                <SettingCell
                  key={i}
                  item={item}
                  length={accountCells.length}
                  index={i}
                  style={undefined}
                />
              );
            })}
          </View>
          <Text
            GulfSemiBold
            size={19}
            color={Colors.settingDarkBlue}
            style={styles.subTitles}>
            التنبيهات
          </Text>
          <View style={styles.notificationSettingsView}>
            <SettingCell
              item={notificationsCells}
              style={undefined}
              index={undefined}
              length={undefined}
            />
          </View>
          <Text
            GulfSemiBold
            size={19}
            color={Colors.settingDarkBlue}
            style={styles.subTitles}>
            التطبيق
          </Text>
          <View style={styles.appSettingsView}>
            {appCells.map((item, i) => {
              return (
                <SettingCell
                  key={i}
                  item={item}
                  length={appCells.length}
                  index={i}
                  style={undefined}
                />
              );
            })}
          </View>
          <Text
            GulfSemiBold
            size={19}
            color={Colors.settingDarkBlue}
            style={styles.subTitles}>
            أخرى
          </Text>
          <View style={styles.otherSettingsView}>
            {othersCells.map((item, i) => {
              return (
                <SettingCell
                  key={i}
                  item={item}
                  length={othersCells.length}
                  index={i}
                  style={undefined}
                />
              );
            })}
          </View>

          <View style={styles.socialMedia}>
            <TouchableOpacity style={{marginHorizontal: '4%'}}>
              <Youtube />
            </TouchableOpacity>
            <TouchableOpacity>
              <Twitter />
            </TouchableOpacity>
            <TouchableOpacity style={{marginHorizontal: '4%'}}>
              <Facebook />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      {store.audioStore?.item ? <MiniAudio /> : null}
    </>
  );
};
export default Settings;

const styles = StyleSheet.create({
  settingsScreen: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#e6f9fb',
    height: '100%',
  },
  settingsHeaderLogs: {
    paddingTop: Platform.OS === 'ios' ? 70 : 50,
    marginHorizontal: '8%',
  },
  settingsHeaderImages: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: '5%',
    marginTop: '-25%',
  },
  title: {
    zIndex: 1,
    right: '-118%',
    top: '4%',
  },
  envImg: {
    marginBottom: '-10%',
    marginLeft: '-4%',
    top: '2%',
  },
  mainScrollView: {
    borderRadius: 20,
    width: '100%',
    alignSelf: 'center',
    top: '-4%',
  },
  subTitles: {
    zIndex: 1,
    marginLeft: '6%',
    lineHeight: 60,
  },
  accountSettingsView: {
    width: '90%',
    height: 60 * accountCells.length,
    backgroundColor: Colors.white,
    borderRadius: 20,
    alignSelf: 'center',
    marginBottom: '4%',
  },
  notificationSettingsView: {
    width: '90%',
    height: 60,
    backgroundColor: Colors.white,
    borderRadius: 20,
    alignSelf: 'center',
    marginBottom: '4%',
  },
  appSettingsView: {
    width: '90%',
    height: 60 * appCells.length,
    backgroundColor: Colors.white,
    borderRadius: 20,
    alignSelf: 'center',
    marginBottom: '4%',
  },
  otherSettingsView: {
    width: '90%',
    height: 60 * othersCells.length,
    backgroundColor: Colors.white,
    borderRadius: 20,
    alignSelf: 'center',
    marginBottom: '10%',
  },
  socialMedia: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: '10%',
  },
});
