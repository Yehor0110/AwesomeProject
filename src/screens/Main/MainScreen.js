import * as React from 'react';
import { Text, View } from 'react-native';
import HomeStackScreen from './components/Home/Home';
import SettingsScreen from './components/SettingsScreen/Settings';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Drawer from './components/DrawerNavigation/Drawer';

<ion-icon name="bulb-outline"></ion-icon>

const Tab = createBottomTabNavigator();

export default function HomeMain() {
  return (
    
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'md-add-circle'
                : 'md-add-circle';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'md-bookmark' : 'md-bookmark';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeStackScreen} options={{ tabBarBadge: 3 }, { headerShown: false }} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Drawer" component={Drawer} options={{ headerShown: false }} />
      </Tab.Navigator>
  );
}
