import { StyleSheet } from 'react-native';

export const footerStyles = StyleSheet.create({
    main: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        maxHeight: 60,
        paddingTop: 20,
        paddingBottom: 20,
        haight: 100,
        backgroundColor: '#000',
        textAlign: 'center',
    },
    box: {
        width: 40,
        height: 40,
        borderRadius: 50,
        backgroundColor: '#ccc',
        fontSize: 18,
        color: '#000',
        textAlign: 'center',
    },
    text: {
        textAlign: 'center',
        paddingTop: 8,
        alignSelf: 'center',
        color: '#000'
    }
});