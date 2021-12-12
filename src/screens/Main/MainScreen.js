import React from 'react';
import Main from './components/Main/Main';
import Contacts from './components/Contacts/Contacts'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function HomeMain() {

    return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Main} />
            <Stack.Screen name="Contacts" component={Contacts} />
          </Stack.Navigator>
        </NavigationContainer>
      );
}
