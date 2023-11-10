import React, { useContext, useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import Animation101Screen from '../screens/Animation101Screen';
import Animation102Screen from '../screens/Animation102Screen';
import SwitchScreen from '../screens/SwitchScreen';
import AlertScreen from '../screens/AlertScreen';
import InputScreen from '../screens/InputScreen';
import PullToRefreshScreen from '../screens/PullToRefreshScreen';
import CustomSectionList from '../screens/CustomSectionList';
import ModalScreen from '../screens/ModalScreen';
import InfiniteScrollScreen from '../screens/InfiniteScrollScreen';
import SlideScreen from '../screens/SlideScreen';
import ChangeThemeScreen from '../screens/ChangeThemeScreen';
import { ThemeContext } from '../context/Theme/ThemeContext';
import { colors } from '../theme/appTheme';

const Stack = createStackNavigator();

export const Navigator = () => {

  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    SplashScreen.hide();
  }, []);


  return (
    <View
      style={{
        backgroundColor: colors.primary,
        flex: 1,
      }}
    >
      <NavigationContainer
        theme={theme}
      >
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            cardStyle: {
              // backgroundColor: '#FFFFFF',
            },
          }}
        >
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="Animation101Screen" component={Animation101Screen} />
          <Stack.Screen name="Animation102Screen" component={Animation102Screen} />
          <Stack.Screen name="SwitchScreen" component={SwitchScreen} />
          <Stack.Screen name="AlertScreen" component={AlertScreen} />
          <Stack.Screen name="InputScreen" component={InputScreen} />
          <Stack.Screen name="PullToRefreshScreen" component={PullToRefreshScreen} />
          <Stack.Screen name="CustomSectionList" component={CustomSectionList} />
          <Stack.Screen name="ModalScreen" component={ModalScreen} />
          <Stack.Screen name="InfiniteScrollScreen" component={InfiniteScrollScreen} />
          <Stack.Screen name="SlideScreen" component={SlideScreen} />
          <Stack.Screen name="ChangeThemeScreen" component={ChangeThemeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>

  );
};
