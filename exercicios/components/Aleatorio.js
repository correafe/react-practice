import React from "react"
import { Text } from 'react-native'
import Estilo from "./estilo"


function rand({min = 10, max = 20} = {}){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

// export default props => {
//     const valor = props.max - props.min + 1
//     const resultado = parseInt(Math.random() * valor) + props.min
//     return (
//     <Text style={Estilo.txtG}>
//         um valor aleatorio entre {props.max} e {props.min} é {resultado}!
//     </Text>)
// }

export default ({min, max}) => {
    const valor = max - min + 1
    const resultado = parseInt(Math.random() * valor) + min
    return (
    <Text style={Estilo.txtG}>
        um valor aleatorio entre {max} e {min} é {resultado}!
    </Text>)
}

