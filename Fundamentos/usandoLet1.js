//let possui escopo de bloco, ou seja, quando declarada dentro de um bloco, ela será acessível apenas dentro daquele bloco (Escopo local).
//Portanto, mesmo que tenham nomes iguais, o escopo local não será acessível do lado de fora
//escopo local tem preferência sobre o escopo local na busca
var numero = 1
{
    let numero = 2
    console.log('Dentro =',numero)
}
console.log('Fora =',numero)