import { useState } from 'react';
import { View, Touchable, Text, TextInput} from 'react-native';

import styles from './styles';

export default function Exemplo5 (){

const [isFocusN1, setIsFocusN1] = useState(false);
const [isFocusN2, setIsFocusN2] = useState(false);
const [isFocusTotal, setIsFocusTotal] = useState(false);
const [n1, setN1] = useState(0);
const [n2, setN2] = useState(0);
const [total, setTotal] = useState('');

function soma() {
    setTotal(parseFloat(n1) + parseFloat(n2));
}

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}> Exemplo 5 </Text>

            <Text style={styles.txtSaida}> Calculadora básica </Text>

            <Text style={styles.txtLabel}> 1° número </Text>
            <TextInput
                 style={
                    [
                        styles.txtEntrada,
                           isFocusN1 ?
                               {
                                borderColor: '#C51162',
                                outline: 'none',
                               } 
                            :
                               {}   
                          
                    ]
                 }
                 onFocus={() => setIsFocusN1(true)}
                 onBlur={() => setIsFocusN1(false)}
                 onChange={(num1) => setN1(num1)}
                 value={n1}
                 // keyboardType='numeric'

                 />

                 <Text style={styles.txtSaida}> + </Text>

                 <Text style={styles.txtLabel}> 2° número </Text>

            
        </View>
    );
}