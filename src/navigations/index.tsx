import 'react-native-gesture-handler';
import React from 'react';
import AppNavigator from './app-navigator';
// import {navigationRef} from './RootNavigation';
import {NavigationContainer} from '@react-navigation/native';
const App = () => {
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
    </NavigationContainer>
  );
};

export default App;
