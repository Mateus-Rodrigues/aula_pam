import {StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fafafa',
        width: '100%',
        borderRadius: 20,
        alignItems: 'center',
        padding: 20,
    },
    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'blue',
    },
    botao: {
        width: '80%',
        padding: 10,
        margin: 20,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
    },
    txtBotao: {
        fontSize: 25,
        color: '#fafafa',
    },

    contador:{
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 20,
    },

    counter: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'center'
        
    },

    containerLadoLado: {
        //borderWidth: 3,
        width: '100%',
        //height: 200,
        marginTop: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-between'

    },

    botaoContainer: {
        width: '25%',
        marginHorizontal: 0,
        
    }
});

export default styles;