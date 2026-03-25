import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

import AuthNavigation from './AuthNavigation';
import AppNavigation from './AppNavigation';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(
      (currentUser: FirebaseAuthTypes.User | null) => {
        setUser(currentUser);
        setLoading(false);
      },
    );

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {user ? (
        <Stack.Screen name="AppStack" component={AppNavigation} />
      ) : (
        <Stack.Screen name="AuthStack" component={AuthNavigation} />
      )}
    </Stack.Navigator>
  );
};

export default RootNavigation;
