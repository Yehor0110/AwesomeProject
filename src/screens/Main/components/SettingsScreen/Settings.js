import React from 'react';
import {View, Text} from 'react-native';
import { settingsScreenStyle } from './styles';

export default function SettingsScreen() {

    return (
        <View style={settingsScreenStyle.wrap}>
            <Text style={settingsScreenStyle.text}>NE HOME Screen</Text>
        </View>
    );
}
