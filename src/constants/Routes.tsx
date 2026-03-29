export const Routes = {
  SPLASH: 'Splash',
  HOME: 'Home',
  BOOKING: 'Booking',
  BOOKING_DETAILS: 'BookingDetails',
  PROFILE: 'Profile',
  LOGIN: 'Login',
  SIGN_UP: 'Signup',
  FORGOT: 'ForgotPassword',
  AUTH_STACK: 'AuthStack',
  APP_STACK: 'AppStack',
} as const;

export type RouteKeys = keyof typeof Routes;
export type RouteValues = (typeof Routes)[RouteKeys];
