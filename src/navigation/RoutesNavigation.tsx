import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from '../utils/NavigationUtil';
import RootNavigation from './RootNavigation';
import { StripeProvider } from '@stripe/stripe-react-native';
import { STRIPE_PUBLISHABLE_KEY } from '@env';

const RoutesNavigation = () => {
  return (
    <StripeProvider
      publishableKey={STRIPE_PUBLISHABLE_KEY}
      merchantIdentifier="merchant.identifier"
      urlScheme="barbershop"
    >
      <NavigationContainer ref={navigationRef}>
        <RootNavigation />
      </NavigationContainer>
    </StripeProvider>
  );
};

export default RoutesNavigation;
