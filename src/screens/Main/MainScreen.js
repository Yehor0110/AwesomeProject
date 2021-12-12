import React from 'react';
import { View, Text } from 'react-native';
import Main from './components/Main/Main';
import Contacts from './components/Contacts/Contacts'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text style={{ color: '#000' }}>Home Screen</Text>
//     </View>
//   );
// }

// function DetailsScreen() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Details Screen</Text>
//       </View>
//     );
//   }

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
