import { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';

import styles from './style';

const [mensagem, setMensagem] = useState(' ');

function handleMsgRecebida(){

}

export default function Atividade4 () {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>atividade 4</Text>

            <Text style={styles.titulo}>Inserir Nome e Sobrenome</Text>

            <label style={styles.label}>nome</label>
            <TextInput style={styles.input}>
            onChangeText={(valor) => handleMsgRecebida(valor)}

            </TextInput>
            
            <label style={styles.label}>Sobrenome</label>
            <TextInput style={styles.input}></TextInput>
            
        </View>
    )
    } 
