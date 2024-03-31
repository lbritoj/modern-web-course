//JS aceita diversos tipos que se comportam como verdadeiro ou falso, a depender do contexto


let isAtivo = false

console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) //a negação (!) do valor retorna boolean, duas vezes a negação exibe o valor original no formato true/false

console.log('Os verdadeiros:') //todos os numeros inteiros diferentes de zero, um espaço vazio, um array vazio, Infinity
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!Infinity)
console.log(!!(isAtivo = true))


console.log('Os falsos:') //zero, uma string vazia, null
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log("Para finalizar ...")
console.log(!!('' || null || 0 || 'epa')) //o resultado dessa expressão retornará true, para o primeiro valor true encontrado

// Em JS o operador OU é representado por: ||