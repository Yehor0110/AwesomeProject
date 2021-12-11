import { StyleSheet } from 'react-native';

export const headerStyles = StyleSheet.create({
    main: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxHeight: 70,
        paddingLeft: 20,
        paddingRight: 20,
        haight: 100,
        backgroundColor: '#fff'
    },
    text: {
        fontSize: 18,
        color: '#000',
        textAlign: 'center',
    },
    icon: {
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: '#ccc',
        fontSize: 18,
        color: '#000',
        textAlign: 'center',
    },
    iconText: {
        textAlign: 'center',
        paddingTop: 13,
        alignSelf: 'center',
        color: '#000'
    }
});