// class lancamento {
//     constructor (nome = 'generico', valor = 0){
//         this.nome = nome
//         this.valor = valor
//     }
// }
// class financeiro {
//     constructor (mes, ano){
//         this. mes = mes
//         this.ano = ano
//         this.lancamentos = []
//     }
//     addlancamentos(...lancamentos){
//         lancamentos.forEach (l => this.lancamentos.push(l))
//     }
//     sumario(){
//         let valorconsolidado = 0
//         this.lancamentos.forEach(l => {
//             valorconsolidado += l.valor
//         })
//         return valorconsolidado
//     }
// }
// const salario = new lancamento('salário', 4500)
// const contaluz = new lancamento('luz', -200)
// const conta = new financeiro(6, 2018)
// conta.addlancamentos(salario, contaluz)
// console.log(conta.sumario())

class avo {
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}

class pai extends avo {
    constructor(sobrenome, profissao = 'professor'){
        super(sobrenome)
        this.profissao = profissao
    }
}

class filho extends pai {
    constructor() {
        super('silva')
    }
}

const Filho = new filho
console.log(Filho)