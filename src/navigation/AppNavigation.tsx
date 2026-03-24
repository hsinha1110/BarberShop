import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import { Routes } from '../constants/Routes';
import * as Screens from '../screens';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={Routes.SPLASH} component={Screens.SplashScreen} />
      <Stack.Screen name={Routes.HOME} component={Screens.TabNavigator} />
      <Stack.Screen name={Routes.BOOKING} component={Screens.BookingScreen} />
      <Stack.Screen name={Routes.PROFILE} component={Screens.ProfileScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigation;
