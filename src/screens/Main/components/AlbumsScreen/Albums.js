import React from 'react';
import { Button, View, Text } from 'react-native';
import { albumsScreenStyle } from './styles';

export default function AlbumsScreen({ navigation }) {

    return (
        <View style={albumsScreenStyle.wrap}>
            <Text style={albumsScreenStyle.text}>This is MAIN Screen</Text>
            <Button
                style={albumsScreenStyle.button}
                title="Go to Details"
                onPress={() => navigation.navigate('Contacts')}
            />
        </View>
    );
}
