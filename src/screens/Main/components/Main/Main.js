import React from 'react';
import { View, Text } from 'react-native';
// import { mainStyle } from '../styles'

export default function Main() {

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: '#000' }}>This is MAIN Screen</Text>
        </View>
    );
}
