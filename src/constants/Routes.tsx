export const Routes = {
  SPLASH: 'Splash',
  HOME: 'Home',
  BOOKING: 'Booking',
  BOOKING_DETAILS: 'BookingDetails',
  PROFILE: 'Profile',
} as const;

export type RouteKeys = keyof typeof Routes;
export type RouteValues = (typeof Routes)[RouteKeys];
