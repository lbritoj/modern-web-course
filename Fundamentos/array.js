// Em JS o Array é heterogêneo e de tamanno flexível

const valores = [7.7, 8.9 , 6.3, 9.2] //as posições são separadas por vírgula e possuem índices, começando com zero

console.log(valores[0],valores[3])
console.log(valores[4]) // Para índices que não existem no array, o JS retornará undefined

valores[4] = 10

console.log(valores)

console.log(valores.length) //exibe quantos elementos existem no array

valores.push({id: 3}, false, null, 'teste') // push para inserir valores no array
//apesar de o JS permitir, não é uma boa prática ter array heterogêneo

console.log(valores)

console.log(valores.pop()) //pop retira o último elemento do array

delete valores[0] //remove o elemento de índice especificado

console.log(valores)

console.log(typeof valores)