import * as Font from 'expo-font';

export default useFonts = async () =>
  await Font.loadAsync({
    NormalSamim: require('../src/assets/fonts/Samim.ttf'),
    AlmaraiRegular: require('../src/assets/fonts/Almarai-Regular.ttf'),
    VibesRegular: require('../src/assets/fonts/Vibes-Regular.ttf'),
    GulfText: require('../src/assets/fonts/Gulf-Text.ttf'),
    GulfBold: require('../src/assets/fonts/Gulf-Bold.ttf'),
    GulfSemiBold: require('../src/assets/fonts/Gulf-semibold.ttf'),
    GulfMedium: require('../src/assets/fonts/Gulf-Medium.ttf'),
    SFProRoundedSemiBold: require('../src/assets/fonts/SF-Pro-Rounded-Semibold.ttf'),
    SFProRoundedMedium: require('../src/assets/fonts/SF-Pro-Rounded-Medium.ttf'),
    SFProTextBold: require('../src/assets/fonts/SFProText-Bold.ttf'),
    SFProDisplayRegular: require('../src/assets/fonts/SFProDisplay-Regular.ttf'),
    SFProRoundedLight: require('../src/assets/fonts/SF-Pro-Rounded-Light.ttf'),
    SFProRoundedRegular: require('../src/assets/fonts/SF-Pro-Rounded-Regular.ttf'),
    SFProTextMedium: require('../src/assets/fonts/SFProText-Medium.ttf'),
    SFProDisplayMedium: require('../src/assets/fonts/SFProDisplay-Medium.ttf'),
    SFProRegular: require('../src/assets/fonts/SFPro-Regular.ttf'),
  });
