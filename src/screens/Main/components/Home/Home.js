import React from 'react';
import { Button, View, Text } from 'react-native';
import { homeScreenStyle } from './styles';

export default function HomeScreen() {

    return (
        <View style={homeScreenStyle.wrap}>
            <Text style={homeScreenStyle.text}>This is MAIN Screen</Text>
        </View>
    );
}
