// import React from 'react';
// import {SafeAreaView, StyleSheet, Text} from 'react-native';

// function App(): React.JSX.Element {
//   return (
//     <SafeAreaView style={styles.container}>
//       <Text style={styles.title}>Meu Primeiro App!</Text>
//       <Text>Isso está funcionando!</Text>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: '600',
//     marginBottom: 8,
//   },
// });

// export default App;

// import React from "react"
// import { View } from 'react-native'

// import Primeiro from './components/Primeiro'

// export default () => {
//   return (
//     <View>
//       <Primeiro />
//     </View>
//   )
// }

import React from "react"
import { View } from 'react-native'
import {StyleSheet} from 'react-native'

import Diferenciar from './components/Diferenciar'
// import ContadorV2 from './components/contador/ContadorV2'
// import Pai from './components/indireta/Pai'
// import Pai from './components/direta/Pai'
// import Contador from './components/Contador'
// import Botao from './components/Botao'
// import Titulo from './components/Titulo'
// import Aleatorio from './components/Aleatorio'
// import CompPadrao, {Comp1, Comp2} from './components/Multi'
// import Primeiro from './components/Primeiro'
// import MinMax from './components/MinMax'


export default () => {
  return (
    <View style={style.App}>
      <Diferenciar/>
      {/* // <ContadorV2/> */}
      {/* <Pai></Pai> */}
      {/* <Contador inicial={100} passo={10}/>
      <Contador/> */}
      {/* <Botao/>? */}
      {/* <Titulo principal = "Felipe" secundario = "está aprendendo react"/> */}
      {/* // <Aleatorio min={10} max={200}/> */}
      {/* <MinMax min={1} max={20}/>
      <CompPadrao></CompPadrao>
      <Comp1></Comp1>
      <Comp2></Comp2>
      <Primeiro></Primeiro> */}
    </View>
  )
}
const style = StyleSheet.create({
  App: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  }
})

