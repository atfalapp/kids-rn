import React from 'react';
import {Text, Platform, I18nManager} from 'react-native';
// import * as Fonts from '../styles/Fonts';
import * as Colors from '../styles/Colors';

export default AppText = props => {
  let fontFamily = '';
  if (props.AlmaraiRegular) fontFamily = 'AlmaraiRegular';
  else if (props.VibesRegular) fontFamily = 'VibesRegular';
  else if (props.GulfText) fontFamily = 'GulfText';
  else if (props.GulfBold) fontFamily = 'GulfBold';
  else if (props.GulfSemiBold) fontFamily = 'GulfSemiBold';
  else if (props.GulfMedium) fontFamily = 'GulfMedium';
  else if (props.SFProRoundedSemiBold) fontFamily = 'SFProRoundedSemiBold';
  else if (props.SFProRoundedMedium) fontFamily = 'SFProRoundedMedium';
  else if (props.SFProTextBold) fontFamily = 'SFProTextBold';
  else if (props.SFProDisplayRegular) fontFamily = 'SFProDisplayRegular';
  else if (props.SFProRoundedLight) fontFamily = 'SFProRoundedLight';
  else if (props.SFProRoundedRegular) fontFamily = 'SFProRoundedRegular';
  else if (props.SFProTextMedium) fontFamily = 'SFProTextMedium';
  else if (props.SFProDisplayMedium) fontFamily = 'SFProDisplayMedium';
  else if (props.SFProRegular) fontFamily = 'SFProRegular';
  else fontFamily = props.fontFamily;

  return (
    <Text
      {...props}
      style={[
        {
          fontFamily,
          fontSize: props.size ?? 15,
          color: props.color ?? Colors.black,
          textAlign: props.textAlign ?? 'left',
        },
        props.center && {textAlign: 'center'},
        props.style,
      ]}>
      {props.children}
    </Text>
  );
};
