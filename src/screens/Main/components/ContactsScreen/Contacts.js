import React from 'react';
import {Button, View, Text} from 'react-native';
import { contactsScreenStyle } from './styles';

export default function ContactsScreen({ navigation }) {

    return (
        <View style={contactsScreenStyle.wrap}>
            <Text style={contactsScreenStyle.text}>NE HOME Screen</Text>
            <Button
                style={contactsScreenStyle.button}
                title="Go to Contacts... again"
                onPress={() => navigation.push('Contacts')}
            />
            <Button style={contactsScreenStyle.button} title="Go to Home" onPress={() => navigation.navigate('Chat')} />
            <Button style={contactsScreenStyle.button} title="Go back" onPress={() => navigation.goBack()} />
            <Button
                title="Go back to first screen in stack"
                onPress={() => navigation.popToTop()}
            />
        </View>
    );
}
