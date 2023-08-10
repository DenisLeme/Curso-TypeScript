//Decisoes e Repeticoes

// const num:number = 16
// if(num > 15){
//     console.log('Num maior que 15')
// }else if(num === 15) {
//     console.log('Num igual a 15')
// } else {
//     console.log('Num menor que 15')
// }

const typeUser = {
    admin: 'Seja Bem-Vindo admin',
    student: 'Seja Bem-Vindo Estudante',
    viewer: 'Vizualizando'
}

function validateUser(user:string){
    console.log(typeUser[user as keyof typeof typeUser]) // [serve para mostra aonde vai manipular] e está falando que essa variavel de usuario pode usar o typeUser
}

const usuario = 'admin'

validateUser(usuario)

//Objetos
//interface faz um parametro para quando ela chamar para receber :Pessoa que caso não tenha nome e idade ira retorna erro
//Todo objeto que for do tipo Pessoa terão esses valores obrigatórios
// interface Pessoa{
//     nome: string,
//     idade:number,
//     profissao?: string // o ? serve para que a sintaxe profissao seja opcional
// }
// //Objeto
// const pessoa: Pessoa = {
//     nome: 'Denis',
//     idade: 23
// }
// const outraPessoa: Pessoa ={
//     nome: 'Leme',
//     idade: 25,
//     profissao: 'Desenvolvedor'

// }
// //:Pessoa --declarando que essa variavel vai receber um array com objetos do tipo pessoa
// //ou :Array <Pessoa> que vai mostra que é um array mas do tipo pessoa
// const arrayPessoa:Pessoa[] = [
//     pessoa,
//     outraPessoa
// ]
// const arrayNum:number[] = [
// 1 , 2 ,3
// ]
// const arrayString:Array<string> =[
//     '1' , '2' , '3'
// ]






// Váriaveis
// var a = 'a'
// let b: string = 'b' // :string define que essa váriavel vai receber somente string porém o TS 
//                     //já faz isso por default mas é para boa prática caso queira que as pessoas consigam ler
// const c = 'c'
// //perceba que não retornou erro na alteração para string por causa do GRIP | que vai falar para receber string e number
// let m:string| number = 2
// m = 'Denis'
// //:any faz para que receba qualquer tipo

// const soma = (a: number, b: number) => {
//     console.log(a + b)

// }

// soma(2, 4)