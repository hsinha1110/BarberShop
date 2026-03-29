import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Routes } from '../constants/Routes';
import * as Screens from '../screens';
import { AuthStackParamList, RootStackParamList } from '../types';

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthNavigation: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={Routes.SPLASH} component={Screens.SplashScreen} />
      <Stack.Screen name={Routes.LOGIN} component={Screens.LoginScreen} />
      <Stack.Screen name={Routes.SIGN_UP} component={Screens.SignUpScreen} />
      <Stack.Screen
        name={Routes.FORGOT}
        component={Screens.ForgotPasswordScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
