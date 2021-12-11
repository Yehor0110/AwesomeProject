import React, { useState } from 'react';
import {View, FlatList} from 'react-native';
import ListItem from './components/ListItem';
import Form from './components/Form';
import { mainStyle } from './styles'

export default function HomeMain() {
    const [listOfItems, setListOfItems] = useState([
        {text: 'I want to buy everything', key: 1},
    ]);

    const addHandl = (text) => {
        setListOfItems((list) => {
            return [
                { text:text, key: Math.random().toString(36).substring(7) },
                ...list
            ]
        });
    }

    const deleteHandl = (key) => {
        setListOfItems((list) => {
            return list.filter(listOfItems => listOfItems.key != key)
        });
    }
    return (
        <View style= {mainStyle.main}>
            <Form addHandl={addHandl} />
            <FlatList data={listOfItems} renderItem = {({ item }) => (
            <ListItem el={item} deleteHandl={deleteHandl} />
        )} />
        </View>
    );
}
