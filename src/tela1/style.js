import { StyleSheet } from 'react-native';
import { Button } from 'react-native-web';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#808000',
        alignItems: 'center',
        padding: 8,
        width: '100%',
        borderRadius: 20,
    },
    titulo: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 25,
        color: '#0F3820'
    },

    login: {
        //backgroundColor: rgba(52, 52, 52, alpha), 
        backgroundColor: 'transparent',
        width: '70%',
        height: '70%',
        margin: 40,
    },

    subtTitulo: {
        marginLeft: 6,
        color: '#fff',
        fontSize: 5,

    },
    
    button: {
        marginTop: 10,
        width: '100%',
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#0F3820',
        color: '#fff',
        fontSize: 13
    },

    txtSaida: {
        margin: 6,
        fontSize: 8,
        color: '#fff',
        position: 'relative',
    },

    txtEntrada: {
        borderWidth: 1,
        textAlign: 'center',
        borderColor: '#E53935',
        color: '#E53935',
        borderBottom: 1,
    }
});

export default styles;