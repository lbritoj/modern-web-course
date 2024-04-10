// Função em JS é First-Class Object (Citizens)
//High-Order Function

//criar de forma literal
function fun1() {

}
//O retorno em uma funcao JS é opcional; Função sem retorno definido, retornará undefined
// as { } delimitam o corpo da função e é de uso obrigatório nas funções declaradas de forma literal

//Armazenar em uma variável
const fun2 = function () {} //função anomima (sem nome) armazenada em uma constante de nome fun2
// deve ser chamada com parenteses

//Amazenar em um array
const array = [function(a, b) {return a + b}, fun1, fun2]
console.log(array[0](2, 3))

//Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () {return 'Opa'}
console.log(obj.falar())

//Passar função como parâmetro
function run(fun) {
    fun() //nesse caso os parenteses são obrigatorios, sua omissão causará a não execução da função
}

run (function () {console.log("Executando ...")})

//Conter/Retornar uma função como parametro
function soma(a,b) {
    return function(c) {
        console.log(a + b + c)
    }
}

soma(2,3)(4) // forma de chamada 1
const cincoMais = soma(2,3) //forma de chamada 2
cincoMais(4) //chamada 2