import React, { useState } from 'react';
import {View, TextInput, Button } from 'react-native';
import { style } from './styles';

export default function Form({ addHandl }) {
    const [text, setValue] = useState('');

    const onChange = (text) => {
        setValue(text);
    };


    return (
        <View>
            <TextInput style={style.input} onChangeText={onChange} placeholder='What do you want?' />
            <Button style={style.button} title='Add..' onPress={() => addHandl(text)} />
        </View>
    );
}