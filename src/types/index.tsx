import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { Routes } from '../constants/Routes';

import { NavigatorScreenParams } from '@react-navigation/native';

export type AuthStackParamList = {
  [Routes.SPLASH]: undefined;
  [Routes.LOGIN]: undefined;
  [Routes.SIGN_UP]: undefined;
};

export type AppStackParamList = {
  [Routes.HOME]: undefined;
  [Routes.BOOKING]: undefined;
  [Routes.PROFILE]: undefined;
  [Routes.BOOKING_DETAILS]: undefined;
};

export type RootStackParamList = {
  [Routes.SPLASH]: undefined;

  [Routes.AUTH_STACK]: NavigatorScreenParams<AuthStackParamList>;

  [Routes.APP_STACK]: NavigatorScreenParams<AppStackParamList>;
};

export interface PrimaryButtonProps {
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

// Bottom Tabs
export type BottomTabParamList = {
  Home: undefined;
  Booking: undefined;
  Profile: undefined;
};

