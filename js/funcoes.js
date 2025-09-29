// this e bind
// const pessoa = {
//     saudacao: 'bom dia',
//     falar (){
//         console.log(this.saudacao)
//     }
// }
// pessoa.falar()
// const falar = pessoa.falar 
// falar()
// const falarpessoa = pessoa.falar.bind(pessoa)
// falarpessoa()

// function Pessoa() {
//     this.idade = 0
//     const self = this

//     setInterval(function() {
//         self.idade++ 
//         console.log(self.idade)
//     }, 1000)
// }
// new Pessoa

//funções arrow
// let dobro = function(a) {
//     return 2 * a
// }
// dobro = (a) => {
//     return 2 *a
// }
// dobro = (a) => 2 * a
// console.log(dobro(Math.PI))
// let ola = function (){
//     return 'ola'
// }
// ola = () => 'ola'
// ola = _ => 'ola'
// console.log(ola())

// function Pessoa() {
//     this.idade = 0
//     const self = this

//     setInterval(() => {
//         self.idade++ 
//         console.log(self.idade)
//     }, 1000)
// }
// new Pessoa

// let comparacomthis = function (param){
//     console.log(this == param)
// }
// comparacomthis(global)
// const obj = {}
// comparacomthis = comparacomthis.bind(obj)
// comparacomthis(global)
// comparacomthis(obj)
// let comparacomthisarrow = param => console.log(this == param)
// comparacomthisarrow(global)
// comparacomthisarrow(module.exports)
// comparacomthisarrow = comparacomthisarrow.bind(obj)
// comparacomthisarrow(obj)
// comparacomthisarrow(module.exports)

//funções anônimas
// const soma = function (x, y){
//     return x + y
// }
// const imprimirresultado = function(a, b, operacao = soma){
//     console.log(operacao(a,b))
// }
// imprimirresultado(3, 4)
// imprimirresultado(3, 4, soma)
// imprimirresultado(3, 4, function (x, y){
//     return x - y
// })

// imprimirresultado(3, 4, (x, y) => x * y)
// const pessoa = {
//     falar() {
//         console.log('opa')
//     }
// }
// pessoa.falar()

