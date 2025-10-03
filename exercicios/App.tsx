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

import Quadrado from './components/layout/Quadrado'
// import DigiteSeuNome from './components/DigiteSeuNome'
// import ListaProdutos from './components/produtos/ListaProdutosV2'
// import ListaProdutos from './components/produtos/ListaProdutos'
// import UsuarioLogado from './components/UsuarioLogado'
// import Familia from './components/relacao/Familia'
// import Membro from './components/relacao/Membro'
// import ParImpar from './components/ParImpar'
// import Diferenciar from './components/Diferenciar'
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
      <Quadrado/>
      <Quadrado cor='#098'/>
      {/* <DigiteSeuNome/> */}
      {/* <ListaProdutos/> */}
      {/* <ListaProdutos/> */}
      {/* <UsuarioLogado usuario={{nome: 'felipe', email:'correagfe'}}/>
      <UsuarioLogado usuario={{nome: 'gui', email:''}}/> */}
      {/* <Familia>
        <Membro nome="bia" sobrenome="silva"/>
        <Membro nome="renata" sobrenome="silva"/>
      </Familia>
            <Familia>
        <Membro nome="bia" sobrenome="castro"/>
        <Membro nome="ricardo" sobrenome="castro"/>
      </Familia> */}
      {/* <ParImpar num={3}/> */}
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

