import { useState } from 'react';
import { View, Text, Button, TextInput, Pressable} from 'react-native';

import styles from './style';


export default function Appgarden (){

    return (
        <View style={styles.container}>

            <View style={styles.login}>
               <Text style={styles.titulo}>GARDEN</Text>

               <Text style={styles.subtTitulo}>Login</Text>

               <Text style={styles.txtSaida}>Usuario</Text>
               <TextInput style={styles.txtEntrada}/>

               <Text style={styles.txtSaida}>Usuario</Text>
               <TextInput style={styles.txtEntrada}/>

               <Pressable style={styles.button}> Entrar </Pressable>

            </View> 
            
        </View>
    );
}