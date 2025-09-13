// this e bind
const pessoa = {
    saudacao: 'bom dia',
    falar (){
        console.log(this.saudacao)
    }
}
pessoa.falar()
const falar = pessoa.falar 
falar()
const falarpessoa = pessoa.falar.bind(pessoa)
falarpessoa()