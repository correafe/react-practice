//varáveis
// var a = 1
// let b = 5
// const c = 20
// var a = 10
// b = 14
// console.log(a, b, c)

//função vs objeto
// console.log(typeof Object)
// console.log(typeof new Object)
// const Cliente = function() {}
// console.log(typeof Cliente)
// console.log(typeof new Cliente)
// class Produto {}
// console.log(typeof Produto)
// console.log(typeof new Produto)

//par nome/valor
// const saudacao = 'oii'
// function exec(){
//     const saudacao = 'ola'
//     return saudacao
// }
// const felipe = {
//     sobrenome: 'correa',
//     altura: 1.82,
//     peso: 80,
//     endereco: {
//         rua: 'padre joao batista',
//         numero: 369
//     }
// }
// console.log(saudacao)
// console.log(exec())
// console.log(felipe)

//operadores: destructuring
// const felipe = {
//     sobrenome: 'correa',
//     altura: 1.82,
//     peso: 80,
//     endereco: {
//         rua: 'padre joao batista',
//         numero: 369
//     }
// }
// const {sobrenome, altura} = felipe
// const {sobrenome: i, altura: a} = felipe
// const {idade, feliz = true} = felipe
// const {endereco: {rua, numero}} = felipe
// console.log(sobrenome, altura)
// console.log(i, a)
// console.log(idade, feliz)
// console.log(rua)

// const [f] = [20]
// console.log(f)
// const [a, b, , c, d, , e] = [1, 2, 3, 4, 5, 6]
// console.log(a, b, c, d, e)
// const [, [, h]] = [[1, 2, 3,], [4, 5, 6]]
// console.log(h)

// function rand({min = 10, max = 20} = {}){
//     const valor = Math.random() * (max - min) + min
//     return Math.floor(valor)
// }
// const obj = {max: 100, min: 10}
// console.log(rand(obj))
// console.log(rand({min: 5}))
// console.log(rand({}))
// console.log(rand())

// function rand([min = 10, max = 20]){
//     if (min > max) [min, max] = [max, min]
//     const valor = Math.random() * (max - min) + min
//     return Math.floor(valor)
// }
// console.log(rand([5, 40]))
// console.log(rand([50]))
// console.log(rand([, 30]))
// console.log(rand([]))
// console.log(rand())

