import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppStackParamList, RootStackParamList } from '../types';
import { Routes } from '../constants/Routes';
import * as Screens from '../screens';

const Stack = createNativeStackNavigator<AppStackParamList>();

const AppNavigation: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={Routes.HOME} component={Screens.TabNavigator} />
      <Stack.Screen name={Routes.BOOKING} component={Screens.BookingScreen} />
      <Stack.Screen
        name={Routes.BOOKING_DETAILS}
        component={Screens.BookingDetails}
      />
      <Stack.Screen name={Routes.PROFILE} component={Screens.ProfileScreen} />
    </Stack.Navigator>
  );
};
export default AppNavigation;
