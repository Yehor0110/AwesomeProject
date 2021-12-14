import React from 'react';
import ChatScreen from './components/ChatScreen/Chat';
import ContactsScreen from './components/ContactsScreen/Contacts';
import AlbumsScreen from './components/AlbumsScreen/Albums';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function HomeMain() {

    return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Chat" options={{ title: 'Chat' }} component={ChatScreen} />
            <Stack.Screen name="Contacts" component={ContactsScreen} />
            <Stack.Screen name="Albums" component={AlbumsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      );
}
