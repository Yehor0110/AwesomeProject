import React from 'react';
import { Button, View, Text } from 'react-native';
import { chatScreenStyle } from './styles';

export default function ChatScreen({ navigation }) {

    return (
        <View style={chatScreenStyle.wrap}>
            <Text style={chatScreenStyle.text}>This is MAIN Screen</Text>
            <Button
                style={chatScreenStyle.button}
                title="Go to Details"
                onPress={() => navigation.navigate('Contacts')}
            />
            <Button
                style={chatScreenStyle.button}
                title="Go to Albums"
                onPress={() => navigation.navigate('Albums')}
            />
        </View>
    );
}
