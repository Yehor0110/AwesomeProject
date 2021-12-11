import React from 'react';
import { View, Text } from 'react-native';
import { footerStyles } from './styles';

export default function Footer() {
    return(
        <View style={footerStyles.main}>
            <View style={footerStyles.box}>
                <Text style={footerStyles.text}>A</Text>
            </View>
            <View style={footerStyles.box}>
                <Text style={footerStyles.text}>B</Text>
            </View>
            <View style={footerStyles.box}>
                <Text style={footerStyles.text}>C</Text>
            </View>
            <View style={footerStyles.box}>
                <Text style={footerStyles.text}>D</Text>
            </View>
        </View>
    );
}
