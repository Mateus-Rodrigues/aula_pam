import { TextInput } from 'react-native';

import styles from '../styles';


export default function Input() {
    return (
        
        <>
        <TextInput placeholder='Massa' keyboardType='numeric' style={styles.input} />
        
        <TextInput placeholder='Altura' keyboardType='numeric' style={styles.input}  />
        </>
    )
}