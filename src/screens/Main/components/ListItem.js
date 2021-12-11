import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { style } from './styles';

export default function ListItem({el, deleteHandl}) {
    return (
        <TouchableOpacity onPress={() => deleteHandl(el.key)}>
            <Text style={style.listItemText}> {el.text} </Text>
        </TouchableOpacity>
    );
}