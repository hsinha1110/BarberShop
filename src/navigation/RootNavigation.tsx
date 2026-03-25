import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthNavigation from './AuthNavigation';
import AppNavigation from './AppNavigation';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AuthStack" component={AuthNavigation} />
      <Stack.Screen name="AppStack" component={AppNavigation} />
    </Stack.Navigator>
  );
};

export default RootNavigation;
