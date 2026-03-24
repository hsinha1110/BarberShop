import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { Routes } from '../constants/Routes';

export type RootStackParamList = {
  [Routes.SPLASH]: undefined;
  [Routes.HOME]: undefined;
  [Routes.BOOKING]: undefined;
  [Routes.PROFILE]: undefined;
  [Routes.BOOKING_DETAILS]: undefined;
};

export interface PrimaryButtonProps {
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}
//  BOTTOM TAB
export type BottomTabParamList = {
  Home: undefined;
  Booking: undefined;
  Profile: undefined;
};
