import { StyleSheet, View } from 'react-native';


//import Mensagem from './src/ex_2';
//import Atividade1 from './src/atv_1';

//import Exemplo55 from './src/ex_5';
//import Exemplo6  from './src/ex_6';

// import Input from './src/atv_imc/input/index';

import NavegacaoStack from './src/navegacao/stack';
 
export default function App() {
  return (
  <View>
     <NavegacaoStack />
  </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   backgroundColor: '#aaa',
  //  alignItems: 'center',
  //  justifyContent: 'center',
   padding: 10,
  },
});