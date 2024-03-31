console.log(7/0) //Divisões por 0 ou um número muito próximo a zero, irá retornar 'INFINITY'

console.log('10'/2) // é possível dividir uma string por número, se a string for um número ... 

console.log('show'/2) //Se a string não for um número, retornará NaN (not a number)

//JS utiliza a especificação IEEE e possui uma pequena imprecisão em numeros float
console.log(0.1+0.7)

//console.log(10.toString())

console.log((10.375).toFixed(2))