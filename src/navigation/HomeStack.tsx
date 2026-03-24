import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import { Routes } from '../constants/Routes';
import * as Screens from '../screens';
 
const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={Routes.HOME} component={Screens.HomeScreen} />
      <Stack.Screen name={Routes.BOOKING_DETAILS} component={Screens.BookingDetails} />
    </Stack.Navigator>
  );
};

export default HomeStack;
