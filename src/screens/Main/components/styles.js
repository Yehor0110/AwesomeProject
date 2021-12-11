import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    conteiner: {
        flex: 1,
        backgroundColor: '#000'
    },
    flatList: {
        backgroundColor: '#000',
        color: 'red'
    },
    listItemText: {
        width: 300,
        padding: 25,
        marginTop: 45,
        marginBottom: 15,
        textAlign: 'center',
        backgroundColor: '#fff',
        color: 'red',
        borderWidth: 1,
        borderRadius: 8,
        
    },
    input: {
        width: 300,
        marginBottom: 25,
        borderBottomWidth: 1,
        borderColor: 'red',
        padding: 10,
        borderRadius: 6
    },
    button: {
        borderRadius: '50%',
        backgroundColor: 'transparent'
    }
});