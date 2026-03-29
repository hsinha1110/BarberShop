import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { Routes } from '../constants/Routes';

import { NavigatorScreenParams, RouteProp } from '@react-navigation/native';

export type AuthStackParamList = {
  [Routes.SPLASH]: undefined;
  [Routes.LOGIN]: undefined;
  [Routes.SIGN_UP]: undefined;
  [Routes.FORGOT]: undefined;
};

export type AppStackParamList = {
  [Routes.HOME]: undefined;
  [Routes.BOOKING]: undefined;
  [Routes.PROFILE]: undefined;
  [Routes.BOOKING_DETAILS]: { item: any };
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
export interface Props {
  item: Booking;
}

export type Service = {
  id: string;
  title: string;
  description: string;
  image: any;
};

export type ServiceItemProps = {
  item: Service;
};

export type Booking = {
  id: string;
  serviceName: string;
  date: string;
  timeSlot: string;
  amount: number;
  userId: string;
};

export type ProfileDataItem = {
  id: string;
  title: string;
  icon: string;
};
export type RootsStackParamList = {
  BookingDetails: {
    item: {
      title: string;
      image: any;
    };
  };
};
export type BookingDetailsRouteProp = RouteProp<
  RootsStackParamList,
  'BookingDetails'
>;
