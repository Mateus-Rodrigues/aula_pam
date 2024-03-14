import { View, Text, StyleSheet, Image} from 'react-native'; 

import Ola from './ola';

import logo from '../../assets/002-1-react-native.png';

import styles from './styles';

export default function Atividade1 () { 

    return(
        <View style={styles.container}>
            <Image source={logo} style={styles.Image} />
             <Text style={styles.titulo}>
                Atividade 1
            </Text>
            
            <Ola>cremilda</Ola>
            <Ola>garibe</Ola>
            
        </View>
    );
}
