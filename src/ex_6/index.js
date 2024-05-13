import { View,Text  } from 'react-native';

import styles from './styles';
import Input from './input';
import Botao from './botao';

export default function Exemplo6 () {
    return (
        <View style={styles.container}>

            <Input />
            <Botao children={'Calcular'} />
        </View>
    )
} 