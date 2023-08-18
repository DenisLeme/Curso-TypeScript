class User {
    name: string = 'Denis'
    age: number = 23

    constructor(name: string, age: number){
        this.name = name,
        this.age = age

    }

    showName = () => {
        console.log(this.name)
    }
}

const user = new User('Denis', 32)
user.showName()

const otherUser = new User('Ribeiro', 23)
otherUser.showName()
 
 //Array
 //essa váriavel array vai receber somente numeros:Array pra mostrar que é array <pra indicar o tipo do array>
// const array: Array<number> =[1, 2,3,4]

 //forEach para buscar os elementos no array
 // array.forEach(num => {
 //     if(num >2)
 //     console.log(num)
 // })
 // A diferença deles é perfomatica | MAP é mais usado para funções assincronas e o foreach passa por cima de função assincrona
// array.map(num => console.log(num))



// const stringArray:string[] = ['a','b','c']

// const buscaNum = array.find(num => num === 4)

// console.log(buscaNum)

// console.log(array[0])

// console.log(stringArray.length) para verificar quantos elementos tem nesse array

// console.log('array original', array)
// array.push(3) // colocar um novo elemento
// array.pop() // tirar o ultimo elemento
// console.log('array com novo elemento', array)


//Estrutura de repetição

// for(let i =0; i <5; i++){
//     console.log(i)
// }

// let n  = 2

// while(n < 6){
// console.log(n)
// n++
// }
//Decisoes e Repeticoes

// const num:number = 16
// if(num > 15){
//     console.log('Num maior que 15')
// }else if(num === 15) {
//     console.log('Num igual a 15')
// } else {
//     console.log('Num menor que 15')
// }

// const typeUser = {
//     admin: 'Seja Bem-Vindo admin',
//     student: 'Seja Bem-Vindo Estudante',
//     viewer: 'Vizualizando'
// }

// function validateUser(user:string){
//     console.log(typeUser[user as keyof typeof typeUser]) // [serve para mostra aonde vai manipular] e está falando que essa variavel de usuario pode usar o typeUser
// }

// const usuario = 'admin'

// validateUser(usuario)

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