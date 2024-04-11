import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';


//import Mensagem from './src/ex_2';
//import Atividade1 from './src/atv_1';

//import Exemplo55 from './src/ex_5';
import Exemplo5 from './ex_5';

export default function App() {
  return (
    <View style={styles.container}>
      <Exemplo5/>
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