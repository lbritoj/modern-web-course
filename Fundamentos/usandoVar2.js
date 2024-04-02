var numero = 1
{
    var numero = 2
    console.log('Dentro = ',numero)
}
console.log('Fora = ',numero)

//Esse é o grande problema de declarar uma variável com var... ela pode ser redeclarada ao longo do código e causar conflitos quando definina no escopo global