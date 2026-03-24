import React from 'react';
import AppNavigation from './AppNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from '../utils/NavigationUtil';

const RoutesNavigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <AppNavigation />
    </NavigationContainer>
  );
};

export default RoutesNavigation;
