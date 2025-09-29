//visão geral
// let aprovados = new Array('felipe', 'guilherme', 'luis')
// console.log(aprovados)
// aprovados = ['felipe', 'guilherme', 'luis']
// console.log(aprovados[0])
// console.log(aprovados[3])
// aprovados[3] = 'carlos'
// aprovados.push('ricardo')
// console.log(aprovados.length)
// aprovados[9] = 'flavia'
// console.log(aprovados.length)
// console.log(aprovados[8] == undefined)
// aprovados.sort()
// console.log(aprovados)
// delete(aprovados[1])
// console.log(aprovados[1])
// aprovados2 = ['felipe', 'guilherme', 'luis']
// aprovados2.splice(1, 1)
// console.log(aprovados2)

//métodos importantes
// const pilotos = ['felipe', 'guilherme', 'luis', 'bia', 'ana']
// pilotos.pop()
// console.log(pilotos)
// pilotos.push('clara')
// console.log(pilotos)
// pilotos.shift()
// console.log(pilotos)
// pilotos.unshift('dona')
// console.log(pilotos)
// pilotos.splice(2, 1, 'cris')
// console.log(pilotos)
// const algunspilotos = pilotos.slice(2)
// console.log(pilotos, algunspilotos)
// const algunspilotos2 = pilotos.slice(1, 2)
// console.log(pilotos, algunspilotos2)

//simulando array com objeto
// const quasearray = {0: 'felipe', 1: 'guilherme', 2: 'bruno'}
// console.log(quasearray)
// Object.defineProperty(quasearray, 'tostring',{
//     value: function() {return Object.values(this)},
//     enumerable: false
// })
// console.log(quasearray[0])
// const meuarray = ['luis', 'bia', 'ana']
// console.log(quasearray.tostring(), meuarray)

//foreach
// const aprovados = ['felipe', 'guilherme', 'luis', 'bia', 'ana']
// aprovados.forEach(function(nome, indice){
//     console.log(`${indice + 1}) ${nome}`)
// })
// aprovados.forEach(nome => console.log(nome))
// const exibiraprovados = aprovado => console.log(aprovado)
// aprovados.forEach(exibiraprovados)

// Array.prototype.forEach2 = function(callback){
//     for(let i = 0; i < this.length; i++){
//         callback(this[i], i, this)
//     }
// }
// const aprovados = ['felipe', 'guilherme', 'luis', 'bia', 'ana']
// aprovados.forEach2(function(nome, indice){
//     console.log(`${indice + 1}) ${nome}`)
// })

//map
// const nums = [1, 2, 3, 4, 5]
// let resultado = nums.map(function(e){
//     return 2 * e
// })
// console.log(resultado)
// const soma10 = e => e + 10
// const triplo = e => e + 10
// const paradinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`
// resultado = nums.map(soma10).map(triplo).map(paradinheiro)
// console.log(resultado)

// Array.prototype.map2 = function(callback){
//     const newarray = []
//     for(let i = 0; i < this.length; i++){
//         newarray.push(callback(this[i], i, this))
//     }
//     return newarray
// }
// const carrinho = [
//     '{"nome": "estojo", "preco": 20.30}',
//     '{"nome": "borracha", "preco": 5.50}',
//     '{"nome": "caderno", "preco": 50.90}',
//     '{"nome": "lapis", "preco": 7.10}',
//     '{"nome": "tesoura", "preco": 15.70}'
// ]
// const paraobjeto = json => JSON.parse(json)
// const apenaspreco = produto => produto.preco
// const resultado = carrinho.map(paraobjeto).map(apenaspreco)
// console.log(resultado)
// const resultado2 = carrinho.map2(paraobjeto).map2(apenaspreco)
// console.log(resultado2)

//filter
// Array.prototype.filter2 = function(callback){
//     const newarray = []
//     for (let i = 0; i < this.length; i++){
//         if (callback(this[i], i, this)){
//             newarray.push(this[i])
//         }
//     }
//     return newarray
// }
// const produtos = [
//     {nome: "notebook", preco: 3500, fragil: true },
//     {nome: "pedra", preco: 0, fragil: false },
//     {nome: "iphone", preco: 6500, fragil: true },
//     {nome: "caneta", preco: 15, fragil: false },
// ]
// // console.log(produtos.filter(function(p){
// //     return p.preco > 20
// // }))
// const caro = produto => produto.preco >= 500
// const fragil = produto => produto.fragil
// console.log(produtos.filter(caro).filter(fragil))
// console.log(produtos.filter2(caro).filter2(fragil))

//reduce
// const alunos = [
//     {nome: "felipe", nota: 10, bolsista: false},
//     {nome: "ana", nota: 0, bolsista: false},
//     {nome: "bia", nota: 5, bolsista: true},
//     {nome: "leo", nota: 7, bolsista: false}
// ]
// const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
//     console.log(acumulador, atual)
//     return acumulador + atual
// }, 0)
// console.log(resultado)

// Array.prototype.reduce2 = function(callback){
//     let acumulador = this[0]
//     for (let i = 0; i < this.length; i++){
//             acumulador = callback(acumulador, this[i], i, this)
//     }
//     return acumulador
// }
// const alunos = [
//     {nome: "felipe", nota: 10, bolsista: false},
//     {nome: "ana", nota: 0, bolsista: false},
//     {nome: "bia", nota: 5, bolsista: true},
//     {nome: "leo", nota: 7, bolsista: false}
// ]
// const todosbolsistas = (resultado, bolsista) => resultado && bolsista
// console.log(alunos.map(a => a.bolsista).reduce(todosbolsistas))
// const algumbolsista = (resultado, bolsista) => resultado || bolsista
// console.log(alunos.map(a => a.bolsista).reduce(algumbolsista))
// const todosbolsistas = (resultado, bolsista) => resultado && bolsista
// console.log(alunos.map(a => a.bolsista).reduce2(todosbolsistas))
// const algumbolsista = (resultado, bolsista) => resultado || bolsista
// console.log(alunos.map(a => a.bolsista).reduce2(algumbolsista))

//imperativo vs declarativo
// // Imperativo
// let total1 = 0
// for (let i = 0; i < alunos.length; i++) {
//     total1 += alunos[i].nota
// }
// console.log(total1 / alunos.length)
// // Declarativo
// const getNota = aluno => aluno.nota
// const soma = (total, atual) => total + atual
// const total2 = alunos.map(getNota).reduce(soma)
// console.log(total2 / alunos.length)

//concat
// const filhos = ['felipe', 'guilherme', 'luis']
// const filhas = ['bia', 'ana']
// const todos = filhas.concat(filhos)
// console.log(todos)
// console.log(['a', 'b'].concat([[1, 2], [3, 4], [[5], 6, 7]]))

//flatmap
const escola = [
    {
        nome: 'Turma M1',
        alunos: [
            {
                nome: 'Gustavo',
                nota: 8.1
            },
            {
                nome: 'Ana',
                nota: 9.3
            }
        ]
    },
    {
        nome: 'Turma M2',
        alunos: [
            {
                nome: 'Rebeca',
                nota: 8.9
            },
            {
                nome: 'Roberto',
                nota: 7.3
            }
        ]
    }
]
const getNotaDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)
const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)
Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}
const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2)