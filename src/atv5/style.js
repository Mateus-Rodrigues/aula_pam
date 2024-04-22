import { StyleSheet } from 'react-native';
import { Button } from 'react-native-web';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#FF80AB',
        padding: 8,
        width: '100%',
        borderRadius: 20,
    },
    titulo: {
        margin: 6,
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#C51162'
    },
    
    txtSaida: {
        margin: 6,
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#E91E63',
    },

    txtEntrada: {
        borderWidth: 4,
        textAlign: 'center',
        fontSize: 22,
        borderColor: '#E53935',
        //heigt: 50,
        color: '#E53935',
        borderRadius: 10,
        marginTop: 10,
        padding: 10,
    },

    button: {
        backgroundColor: '#E91E63',
        height: 50,
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 20,
        width: 50,
    },
    buttonTouch: {
        backgroundColor: '#C51162',
    },
    textButton: {
        fontSize: 30,
        color: '#FF80AB',
        textAlign: 'center',
    },
    txtLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'C51162',
    },

    zerar: {
        backgroundColor: '#E91E63',
        height: 50,
        justifyContent: 'center',
        borderRadius: 10,
        //marginTop: 20,
        width: '100%',
        fontSize: 30,
        color: '#FF80AB',
        textAlign: 'center',

    },
    operacao: {
        flex: 1,
        flexDirection: 'row',
        margin: 10,
        justifyContent: 'space-between'
    }
});

export default styles;