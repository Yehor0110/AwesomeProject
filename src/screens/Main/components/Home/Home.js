import React from 'react';
import { Button, View, Text } from 'react-native';
import { homeScreenStyle } from './styles';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function DetailsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Details!</Text>
      </View>
    );
  }

function HomeScreen({ navigation }) {

    return (
        <View style={homeScreenStyle.wrap}>
            <Text style={homeScreenStyle.text}>This is MAIN Screen</Text>
            <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
        </View>
    );
}

const HomeStack = createNativeStackNavigator();

export default function HomeStackScreen() {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen name="Home" component={HomeScreen} />
        <HomeStack.Screen name="Details" component={DetailsScreen} />
      </HomeStack.Navigator>
    );
  }
