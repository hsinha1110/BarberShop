import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as Screens from '../screens';
import { Colors } from '../constants/Colors';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: Colors.white,
        tabBarInactiveTintColor: Colors.primary_white,

        tabBarStyle: {
          position: 'absolute',
          backgroundColor: Colors.jungle_green,
          elevation: 5,
        },

        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 5,
        },

        tabBarIconStyle: {
          marginTop: 6,
        },

        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case 'Home':
              iconName = focused ? 'home' : 'home-outline';
              break;
            case 'Booking':
              iconName = focused ? 'calendar' : 'calendar-outline';
              break;
            case 'Profile':
              iconName = focused ? 'person' : 'person-outline';
              break;
            default:
              iconName = 'ellipse-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={Screens.HomeStack}
        options={({ route }) => {
          const routeName = getFocusedRouteNameFromRoute(route);

          const hideTab = routeName === 'BookingDetails';

          return {
            tabBarStyle: hideTab
              ? { display: 'none' }
              : { backgroundColor: Colors.jungle_green },
          };
        }}
      />
      <Tab.Screen name="Booking" component={Screens.BookingScreen} />
      <Tab.Screen name="Profile" component={Screens.ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
