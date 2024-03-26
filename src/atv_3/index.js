import React, {useState} from 'react';
import { View, Text, TouchableOpacity, } from 'react-native';

import styles from './styles';


export default function Atividade_3(){

function mensagem (){
    alert('Aula de React-Native');
}

const [contador, setContador] = useState(0)

function incrementar (){
 setContador (contador + 1);
}

function decrementar (){
    setContador (contador - 1);
   }

function Zerar (){
    setContador (contador - contador);
   }   

    return(
        <View style = {styles.container}>
            <Text style = {styles.titulo}>Atividade 3</Text>

            

            <View style = {styles.counter}>
                
                <TouchableOpacity style={styles.botao} onPress={() => incrementar()}>
                <Text style={styles.txtBotao}>+</Text>
                 </TouchableOpacity>
                 <Text style = {styles.contador}>{contador}</Text>
                <TouchableOpacity style={styles.botao} onPress={() => decrementar()}>
                <Text style={styles.txtBotao}>-</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.botao} onPress={() => Zerar()}>
                <Text style={styles.txtBotao}>Zerar</Text>
            </TouchableOpacity>

        </View>
    );
}
