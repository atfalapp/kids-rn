/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/prop-types */
import React, {useState} from 'react';
import {
  View,
  ScrollView,
  ImageBackground,
  StyleSheet,
  Image,
  Animated,
  TouchableOpacity,
} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

import {favorites} from '../utils/constants';
import * as Colors from '../styles/Colors';
import {SwipeListView} from 'react-native-swipe-list-view';
import {RemoveIcon} from '../assets/images/iconSvg/index.js';
import {BackIcon} from '../assets/images/iconSvg/index.js';
import {Text, Story, CircularIcon} from '../component';
import {Platform} from 'react-native';

const Favorites = ({navigation}) => {
  const mainGradientColors = [
    'rgba(196, 214, 84, 0)',
    'rgba(196, 215, 85, 0.5)',
    'rgb(196, 214, 84)',
    // 'rgba(196,214,84,0)',
    // 'rgba(196, 215, 85, 0.5)',
    'rgb(196, 214, 84)',
    'rgb(80,153, 116)',
    'rgb(62, 121, 120)',
    // 'rgb(196, 214, 84)',
    // , 'rgb(255,250,182)', 'rgb(255,160,125)',
    'rgb(35,98,131)',
    'rgb(0, 88, 132)',
    'rgb(4, 86, 130)',
    'rgb(15, 82, 125)',
    'rgb(33,74,116)',
    // 'rgba(35,98,131,0)', 'rgba(0,88,132,0.56)',
    'rgba(15,82,125,0.93)',
    'rgb(33,74,116)',
    //  , 'rgb(33,74,116)'
  ];

  const smallGradientColors = [
    'rgba(196, 214, 84, 0)',
    'rgba(196, 215, 85, 0.5)',
    'rgb(196, 214, 84)',
  ];

  const [listData, setListData] = useState(
    favorites.map((item, index) => ({
      key: `${index}`,
      title: item.title,
      time: item.time,
      img: item.img,
      bg: item.bg,
    })),
  );

  const closeRow = (rowMap, rowKey) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };

  const deleteRow = (rowMap, rowKey) => {
    closeRow(rowMap, rowKey);
    const newData = [...listData];
    const prevIndex = listData.findIndex(item => item.key === rowKey);
    newData.splice(prevIndex, 1);
    setListData(newData);
  };

  const onRowDidOpen = rowKey => {
    console.log('This row opened', rowKey);
  };

  const onLeftActionStatusChange = rowKey => {
    console.log('onLeftActionStatusChange', rowKey);
  };

  const onRightActionStatusChange = rowKey => {
    console.log('onRightActionStatusChange', rowKey);
  };

  const onRightAction = rowKey => {
    console.log('onRightAction', rowKey);
  };

  const onLeftAction = rowKey => {
    console.log('onLeftAction', rowKey);
  };

  const VisibleItem = props => {
    const {
      data,
      rowHeightAnimatedValue,
      removeRow,
      // leftActionState,
      rightActionState,
    } = props;

    if (rightActionState) {
      Animated.timing(rowHeightAnimatedValue, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }).start(() => {
        removeRow();
      });
    }
    console.log('data', data);
    return (
      <Animated.View style={[styles.rowFront]}>
        <Story
          item={data.item}
          index={data.index}
          // length={favorites.length - 1}
          fav={true}
        />
      </Animated.View>
    );
  };

  const renderItem = (data, rowMap) => {
    const rowHeightAnimatedValue = new Animated.Value(60);

    return (
      <VisibleItem
        data={data}
        rowHeightAnimatedValue={rowHeightAnimatedValue}
        removeRow={() => deleteRow(rowMap, data.item.key)}
      />
    );
  };

  const HiddenItemWithActions = props => {
    const {
      swipeAnimatedValue,
      // leftActionActivated,
      rightActionActivated,
      rowActionAnimatedValue,
      // rowHeightAnimatedValue,
      onClose,
      onDelete,
    } = props;

    if (rightActionActivated) {
      Animated.spring(rowActionAnimatedValue, {
        toValue: 500,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.spring(rowActionAnimatedValue, {
        toValue: 75,
        useNativeDriver: false,
      }).start();
    }

    return (
      <Animated.View style={[styles.rowBack]}>
        {/* <Text>Left</Text> */}
        {!rightActionActivated && (
          <TouchableOpacity
            style={[styles.backRightBtn, styles.backRightBtnLeft]}
            onPress={onClose}
          />
        )}
        {!rightActionActivated && (
          <Animated.View
            style={[
              styles.backRightBtn,
              styles.backRightBtnRight,
              {
                flex: 1,
                width: rowActionAnimatedValue,
              },
            ]}>
            <TouchableOpacity
              style={[styles.backRightBtn, styles.backRightBtnRight]}
              onPress={onDelete}>
              <Animated.View
                style={[
                  styles.trash,
                  {
                    transform: [
                      {
                        scale: swipeAnimatedValue.interpolate({
                          inputRange: [-90, -45],
                          outputRange: [1, 0],
                          extrapolate: 'clamp',
                        }),
                      },
                    ],
                  },
                ]}>
                <RemoveIcon />
              </Animated.View>
              <RemoveIcon />
            </TouchableOpacity>
          </Animated.View>
        )}
      </Animated.View>
    );
  };

  const renderHiddenItem = (data, rowMap) => {
    const rowActionAnimatedValue = new Animated.Value(75);
    const rowHeightAnimatedValue = new Animated.Value(60);

    return (
      <HiddenItemWithActions
        data={data}
        rowMap={rowMap}
        rowActionAnimatedValue={rowActionAnimatedValue}
        rowHeightAnimatedValue={rowHeightAnimatedValue}
        onClose={() => closeRow(rowMap, data.item.key)}
        onDelete={() => deleteRow(rowMap, data.item.key)}
      />
    );
  };

  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1.9}}
      colors={mainGradientColors}
      style={styles.favoritesContainer}>
      <ImageBackground
        source={require('../assets/images/Favorites-Master.png')}
        style={styles.favoritesHeader}>
        <TouchableOpacity
          style={{
            paddingTop: Platform.OS == 'ios' ? 70 : 50,
            marginBottom: '-22.5%',
            marginHorizontal: '5%',
            zIndex: 1,
          }}
          onPress={() => {
            navigation.goBack();
          }}>
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
        <Text
          VibesRegular
          size={66}
          color={Colors.white}
          style={styles.favoritesTitle}>
          المفضّلة
        </Text>
        <View style={styles.favoritesHeaderBackground}>
          <Image
            style={styles.plate2}
            source={require('../assets/images/Plant2.png')}
          />
          <Text GulfText size={13} color={Colors.white} style={styles.subTitle}>
            اسحب القصة إلى اليمين لإزالتها من المفضلة.
          </Text>
          <Image
            style={styles.plate1}
            source={require('../assets/images/Plant1.png')}
          />
        </View>
      </ImageBackground>

      <LinearGradient
        start={{x: 2, y: 1}}
        end={{x: 1, y: 1}}
        colors={smallGradientColors}
        style={styles.smallGradient}
      />

      <ScrollView style={styles.StoriesView}>
        <SwipeListView
          data={listData}
          renderItem={renderItem}
          renderHiddenItem={renderHiddenItem}
          leftOpenValue={90}
          rightOpenValue={-150}
          disableLeftSwipe
          onRowDidOpen={onRowDidOpen}
          // rightActionActivated={100}
          // leftActionActivated={-200}
          rightActionValue={0}
          leftActionValue={-500}
          onRightAction={onLeftAction}
          onLeftAction={onRightAction}
          onRightActionStatusChange={onLeftActionStatusChange}
          onLeftActionStatusChange={onRightActionStatusChange}
        />
      </ScrollView>

      <View style={{marginVertical: 58}} />
    </LinearGradient>
  );
};
export default Favorites;

const styles = StyleSheet.create({
  favoritesContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  favoritesHeader: {
    width: '100%',
    resizeMode: 'stretch',
    height: 250,
  },
  favoritesTitle: {
    textAlign: 'center',
    marginTop: 50,
  },
  favoritesHeaderBackground: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '-17%',
    marginHorizontal: 65,
  },
  plate1: {
    marginBottom: '-2%',
    marginLeft: '-2%',
    aspectRatio: 0.6,
    resizeMode: 'stretch',
  },
  subTitle: {
    marginBottom: '-3%',
    marginLeft: '-1.2%',
  },
  plate2: {
    marginBottom: '-16%',
    marginLeft: '-10%',
    aspectRatio: 0.6,
    // resizeMode: 'stretch'
  },
  smallGradient: {
    width: '100%',
    height: 30,
  },
  StoriesView: {
    // marginTop: -5
  },
  rowFront: {
    borderRadius: 5,
    shadowColor: '#999',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  rowBack: {
    alignItems: 'center',
    // backgroundColor:   '#DDD',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
    // margin: 50,
    // marginBottom: 15,
    borderRadius: 5,
    top: -10,
  },
  backRightBtn: {
    alignItems: 'flex-end',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
    paddingRight: 45,
  },
  backRightBtnLeft: {
    right: 75,
  },
  backRightBtnRight: {
    right: 0,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  trash: {
    height: 25,
    width: 25,
  },
});

{
  /*   <SwipeListView
            data={listViewData}
            renderItem={ (data, rowMap) => (
                <View style={styles.rowFront}>
                    <Text>I am {data.item.text} in a SwipeListView</Text>
                </View>
            )}
            renderHiddenItem={ (data, rowMap) => (
                <View style={styles.rowBack}>
                    <Text>Left</Text>
                    <Text>Right</Text>
                </View>
            )}
            leftOpenValue={75}
            rightOpenValue={-75}
        /> */
}
{
  /*  {
          favorites.map((story, index) => (
            <Story item={story} index={index} length={story.length - 1} />
          ))
        } */
}

// let listViewData = Array(20)
//   .fill("")
//   .map((_, i) => ({ key: `${i}`, text: `item #${i}` }));
