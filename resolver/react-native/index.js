import * as ReactNative from 'react-native';

delete ReactNative.ColorPropType;
delete ReactNative.EdgeInsetsPropType;
delete ReactNative.ImagePropTypes;
delete ReactNative.PointPropType;
delete ReactNative.TextInputPropTypes;
delete ReactNative.TextPropTypes;
delete ReactNative.ViewPropTypes;

module.exports = {
  ...ReactNative,
  get ViewPropTypes() {
    return require('deprecated-react-native-prop-types/DeprecatedViewPropTypes');
  },

  get ColorPropType() {
    return require('deprecated-react-native-prop-types/DeprecatedColorPropType');
  },

  get EdgeInsetsPropType() {
    return require('deprecated-react-native-prop-types/DeprecatedEdgeInsetsPropType');
  },

  get PointPropType() {
    return require('deprecated-react-native-prop-types/DeprecatedPointPropType');
  },
};
