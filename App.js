import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';


//import Mensagem from './src/ex_2';
//import Atividade1 from './src/atv_1';

import Atividade4 from './src/atv4';

export default function App() {
  return (
    <View style={styles.container}>
      <Atividade4/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   backgroundColor: 'orange',
   alignItems: 'center',
   justifyContent: 'center',
   padding: 18,
  },
});