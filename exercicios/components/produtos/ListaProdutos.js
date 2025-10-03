import React from 'react'
import { Text } from 'react-native'
import Estilo from '../estilo'
import Produtos from './Produtos'

export default props => {
    function obterLista() {
        return Produtos.map(p => {
                return <Text key={p.id}>{p.id} {p.nome} tem preço R$ {p.preco}</Text>
            })
    }

    return (
        <>
            <Text style={Estilo.txtG}>
            lista de produtos
            </Text>
            {obterLista()}
        </>

    )
}

// export default props => {
//     return (
//         <>
//             <Text style={Estilo.txtG}>
//             lista de produtos
//             </Text>
//             {Produtos.map(p => {
//                 return <Text key={p.id}>{p.id} {p.nome} tem preço R$ {p.preco}</Text>
//             })}
//         </>

//     )
// }