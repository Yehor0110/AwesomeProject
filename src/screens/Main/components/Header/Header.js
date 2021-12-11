import React from 'react';
import { View, Text } from 'react-native';
import { headerStyles } from './styles';

export default function Header() {
    return(
        <View style={headerStyles.main}>
            <Text style={headerStyles.text}>
                Shopping list
            </Text>
            <View style={headerStyles.icon}>
                <Text style={headerStyles.iconText}>Avatar</Text>
            </View>
        </View>
    );
}
