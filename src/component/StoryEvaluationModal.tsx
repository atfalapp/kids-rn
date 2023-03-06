import React, { useState } from 'react';
import { StyleSheet, View, Modal, Image, TouchableOpacity, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Colors from '../styles/Colors';
import Button from './Button';
import Text from './Text';
import {
  ContentIcon, PerformanceIcon, SoundEffectsIcon, MusicIcon,
  UnSelectedGood, UnSelectedNotBad, UnSeletedNotGood
} from '../assets/images/iconSvg';
import { SelectedGood, SelectedNotGood, SelectedNotBad } from '.'
import { heightPercentageToDP } from 'react-native-responsive-screen';

const smallScreen = Dimensions.get('window').height <= 700;

const StoryEvaluationModal = ({ visible, onClose }) => {

  const [contentValues, setContentValues] = useState(new Array(3).fill(false));
  const [performanceValues, setPerformanceValues] = useState(new Array(3).fill(false));
  const [soundEffectsValues, setSoundEffectsValues] = useState(new Array(3).fill(false));
  const [musicValues, setMusicValues] = useState(new Array(3).fill(false));

  const gradientColors = ['rgb(5,109,109)', 'rgb(3, 59, 72)'];

  const evaluateStoryItems = [
    { itemName: 'الفحوى والمضمون', itemIcon: <ContentIcon />, itemValues: contentValues, setItemValues: setContentValues },
    { itemName: 'الأداء', itemIcon: <PerformanceIcon />, itemValues: performanceValues, setItemValues: setPerformanceValues },
    { itemName: 'المؤثرات الصوتية', itemIcon: <SoundEffectsIcon />, itemValues: soundEffectsValues, setItemValues: setSoundEffectsValues },
    { itemName: 'الموسيقى', itemIcon: <MusicIcon />, itemValues: musicValues, setItemValues: setMusicValues }
  ]

  const textSize = smallScreen ? 18 : 22;

  return (
    <Modal statusBarTranslucent transparent={true} animationType={'slide'} visible={visible}>
      <View style={styles.modalBackground}>
        <LinearGradient style={styles.modalContainer} start={{ x: 1, y: 0 }} end={{ x: 1, y: 1 }} colors={gradientColors}>
          <Image
            style={styles.img}
            source={require('../assets/images/Evaluation-Story-Art.png')}>
          </Image>

          <View style={styles.evaluateStoryView}>
            <View style={styles.evaluateStoryViewHeader}>
              <Text VibesRegular color={Colors.onahau} size={45}>
                قيم القصة
              </Text>
              <Text VibesRegular color={Colors.mayaBlue} size={18} style={styles.withParents}>
                مع بابا وماما
              </Text>
            </View>

            <View style={styles.evaluateStoryViewBody}>
              {
                evaluateStoryItems.map(({ itemName, itemIcon, itemValues, setItemValues }, index) => {
                  return (
                    <View key={index} style={styles.evaluateStoryItem}>
                      <View style={styles.evaluateStoryItemSide}>
                        {itemIcon}
                        <Text
                          GulfSemiBold
                          style={styles.marginHorizontal10}
                          color={Colors.white}
                          size={textSize}
                        >
                          {itemName}
                        </Text>
                      </View>
                      <View style={styles.evaluateStoryItemSide}>
                        <TouchableOpacity style={styles.marginHorizontal10} onPress={() => {
                          let newValues = new Array(3).fill(false)
                          if (itemValues[0]) {
                            newValues[0] = false
                          }
                          else {
                            newValues[0] = true
                          }
                          setItemValues(newValues)
                        }}>
                          {
                            itemValues[0] ?
                              <SelectedGood />
                              :
                              <UnSelectedGood />
                          }
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.marginHorizontal10} onPress={() => {
                          let newValues = new Array(3).fill(false)
                          if (itemValues[1]) {
                            newValues[1] = false
                          }
                          else {
                            newValues[1] = true
                          }
                          setItemValues(newValues)
                        }}>
                          {
                            itemValues[1] ?
                              <SelectedNotBad />
                              : <UnSelectedNotBad />
                          }

                        </TouchableOpacity>
                        <TouchableOpacity style={styles.marginHorizontal10} onPress={() => {
                          let newValues = new Array(3).fill(false)
                          if (itemValues[2]) {
                            newValues[2] = false
                          }
                          else {
                            newValues[2] = true
                          }
                          setItemValues(newValues)
                        }}>
                          {
                            itemValues[2] ?
                              <SelectedNotGood />
                              : <UnSeletedNotGood />
                          }
                        </TouchableOpacity>
                      </View>
                    </View>
                  )
                })
              }
            </View>
          </View>

          <Button style={styles.thankYouButton}
            outline
            fontFamily="GulfText"
            textSize={14}
            textStyle={{ marginTop: -10 }}
            buttonStyle={{ height: 45 }}
            onPress={() => onClose()}>
            شكراً لكم على التقييم
          </Button>
        </LinearGradient>
      </View>
    </Modal>
  );
};
export default StoryEvaluationModal;

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: '#00000040',
  },
  modalContainer: {
    width: '95%',
    borderRadius: 32,
    alignSelf: 'center',
    justifyContent: "center",
    alignItems: "center",
    top: "25%",
    height: "70%",
  },
  img: {
    bottom: '25%',
    alignSelf: 'center'
  },
  withParents: {
    bottom: '25%',
    marginLeft: '15%'
  },
  evaluateStoryView: {
    bottom: '10%',
    marginTop: -15
  },
  evaluateStoryViewHeader: {
    alignItems: 'center',
    bottom: '15%',
  },
  evaluateStoryViewBody: {
    bottom: '20%'
  },
  evaluateStoryItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignContent: "center",
    marginVertical: 2
  },
  marginHorizontal10: {
    marginHorizontal: 10
  },
  evaluateStoryItemSide: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: "center"
  },
  thankYouButton: {
    display: 'flex',
    marginBottom: '2%',
    alignSelf: "center",
    width: "90%",
    position: 'absolute',
    bottom: 5
  }
});