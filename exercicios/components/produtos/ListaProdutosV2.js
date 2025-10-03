import React from 'react'
import { Text, FlatList } from 'react-native'
import Estilo from '../estilo'
import Produtos from './Produtos'

export default props => {
    const produtoRender = ({item: p})=> {
            return <Text>{p.id} {p.nome}</Text>
        }
    return (
        <>
            <Text style={Estilo.txtG}>
            lista de produtos v2
            </Text>
            <FlatList
            data={Produtos}
            keyExtractor={i => i.id}
            renderItem={produtoRender}
            />
        </>

    )
}

// export default props => {

//     return (
//         <>
//             <Text style={Estilo.txtG}>
//             lista de produtos v2
//             </Text>
//             <FlatList
//             data={Produtos}
//             keyExtractor={i => i.id}
//             renderItem={({item: p})=> {
//                 return <Text>{p.id} {p.nome}</Text>
//             }}
//             />
//         </>

//     )
// }