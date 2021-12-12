import React from 'react';
import Main from './components/Main/Main';
import Contacts from './components/Contacts/Contacts'

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function HomeMain() {

    return <NavigationContainer>{
            <Stack.Navigator>
                <Stack.Screen 
                    name="Main"
                    component={Main}
                    options={{title: 'Main page'}}
                />
                <Stack.Screen 
                    name="Contacts"
                    component={Contacts}
                    options={{title: 'Main page'}}
                />
            </Stack.Navigator>}
        </NavigationContainer> 
    ;
}
